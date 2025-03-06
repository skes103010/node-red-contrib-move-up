# node-red-contrib-move-up

一個基於指定條件將陣列中項目上移的 Node-RED 節點。

## 支援的版本

- 支援的 Node-RED 版本：2.0.0 或更高版本
- 支援的 Node.js 版本：12.0.0 或更高版本

## 安裝方法

您可以透過以下兩種方式安裝此節點：

### 透過 npm
在您的 Node-RED 使用者目錄（通常為 ~/.node-red）中執行以下命令：
npm install node-red-contrib-move-up

### 透過 Node-RED 調色盤管理器
1. 開啟 Node-RED 編輯器。
2. 點擊右上角選單 → "管理調色盤" → "安裝" 標籤。
3. 搜尋 node-red-contrib-move-up 並點擊 "安裝"。

## 使用方法

此節點會將 flow 上下文中儲存的 order_now 陣列中的某個項目上移一位，前提是該項目的 id 與 flow 上下文中的 up 值相符。當 msg.payload 設為 "是" 時觸發此動作。

### 輸入
- msg.payload (字串)：必須設為 "是" 以觸發上移動作。

### 輸出
- msg.payload (數字 | 陣列)：
  - 1：表示移動成功或已嘗試移動（即使未發生變化）。
  - 0：表示條件未滿足（例如 msg.payload 不是 "是"）。
  - 更新後的 order_now 陣列：若發生移動則返回（通常被 1 覆蓋）。

### Flow 上下文需求
- flow.order_now：一個包含 id 屬性的物件陣列（例如 [{id: 1}, {id: 2}, {id: 3}]）。
- flow.up：要上移的項目 id（例如 2）。

### 行為
- 若 msg.payload 為 "是"，節點會在 order_now 中搜尋 id 與 up 相符的項目。
- 若找到且該項目不在頂部，則與前一個項目交換位置。
- 更新後的 order_now 會儲存回 flow 上下文。

## 先決條件
- Node-RED v2.0.0 或更高版本
- Node.js v12.0.0 或更高版本
- 無額外依賴需求。

## 許可證
MIT 許可證

## 作者
- 姓名：skes103010
- GitHub：[skes103010](https://github.com/skes103010)