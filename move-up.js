module.exports = function(RED) {
    function MoveUpNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            // 檢查 msg.payload 是否為 "是"
            if (msg.payload === "是") {
                // 從 flow 上下文中取得 order_now 陣列
                var order = node.context().flow.get('order_now') || [];
                // 從 flow 上下文中取得 up 值
                var up = node.context().flow.get('up');

                // 遍歷 order 陣列，找到匹配的項目並上移
                for (let i = 0; i < order.length; i++) {
                    if (order[i].id === up) {
                        if (order[i - 1]) { // 確保不是第一個項目
                            // 交換當前項目與前一個項目
                            [order[i], order[i - 1]] = [order[i - 1], order[i]];
                            // 更新 flow 上下文中的 order_now
                            node.context().flow.set('order_now', order);
                            msg.payload = order; // 返回更新後的陣列
                            break; // 找到並處理後退出迴圈
                        }
                    }
                }
                msg.payload = 1; // 成功時設置為 1
            } else {
                msg.payload = 0; // 失敗或條件不滿足時設置為 0
            }

            // 將 msg 傳送到下一個節點
            node.send(msg);
        });
    }

    // 註冊節點類型
    RED.nodes.registerType("move-up", MoveUpNode);
};