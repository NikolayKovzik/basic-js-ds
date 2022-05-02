const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return (this.node) ? this.node : null;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.node === null) {
      this.node = newNode;
    } else {
      this.chooseNode(this.node, newNode)
    }
  }

  chooseNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.chooseNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.chooseNode(node.right, newNode)
      }
    }
  }

  has(data) {
    return this.find(data);
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.node) {
      return null;
    }
    let node = this.node;
    while (node) {
      if (node.left) {
        node = node.left;
      } else {
        return node.data;
      }
    }
  }

  max() {
    if (!this.node) {
      return null;
    }
    let node = this.node;
    while (node) {
      if (node.right) {
        node = node.right;
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};