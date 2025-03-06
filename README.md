# node-red-contrib-move-up

A Node-RED node that moves an item up in an array based on a specified condition.

## Installation

You can install this node in two ways:

### Via npm
Run the following command in your Node-RED user directory (typically ~/.node-red):
npm install node-red-contrib-move-up

### Via Node-RED Palette Manager
1. Open Node-RED editor.
2. Click the menu (top-right) → "Manage Palette" → "Install" tab.
3. Search for node-red-contrib-move-up and click "Install".

## Usage

This node moves an item in the order_now array (stored in the flow context) up one position if its id matches the up value (also in flow context). The action is triggered when msg.payload is set to "是".

### Inputs
- msg.payload (string): Must be "是" to trigger the move-up action.

### Outputs
- msg.payload (number | array):
  - 1: Indicates the move was successful or attempted (even if no change occurred).
  - 0: Indicates the condition was not met (e.g., msg.payload is not "是").
  - Updated order_now array: Returned if a move occurs (though typically overridden by 1).

### Flow Context Requirements
- flow.order_now: An array of objects with id properties (e.g., [{id: 1}, {id: 2}, {id: 3}]).
- flow.up: The id of the item to move up (e.g., 2).

### Behavior
- If msg.payload is "是", the node searches order_now for an item with an id matching up.
- If found and not already at the top, it swaps the item with the previous one.
- The updated order_now is saved back to the flow context.

## Example Flow

Below is a sample flow to demonstrate how to use the move-up node:

### Steps
1. Deploy the flow in Node-RED.
2. Click "Initialize Context" to set flow.order_now to [{id: 1}, {id: 2}, {id: 3}] and flow.up to 2.
3. Click "Trigger Move Up" to move the item with id: 2 up.
4. Check the debug sidebar: order_now should change to [{id: 2}, {id: 1}, {id: 3}], and msg.payload will be 1.

## Prerequisites
- Node-RED v2.0.0 or later
- Node.js v12.0.0 or later
- No additional dependencies required.

## License
MIT License

## Author
- Name: skes103010
- GitHub: [skes103010](https://github.com/skes103010)