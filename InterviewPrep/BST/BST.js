class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();

// root
tree.root = new Node(10);
// right side of  node has to be greater than
tree.root.right = new Node(15);
// left side of node (has to be less than)
tree.root.left = new Node(7);
//
tree.root.left.right = new Node(9);

console.log({ root: tree.root });
