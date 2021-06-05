class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      // no length
      while (true) {
        if (value === current.value) {
          current.count++;
          return this;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}

// let tree = new BinarySearchTree();

// // root
// tree.root = new Node(10);
// // right side of  node has to be greater than
// tree.root.right = new Node(15);
// // left side of node (has to be less than)
// tree.root.left = new Node(7);
// //
// tree.root.left.right = new Node(9);

// console.log({ root: tree.root });
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(13);
tree.insert(13);
tree.insert(99);
tree.insert(3);
tree.insert(96);
tree.insert(8);
tree.insert(12);
tree.insert(12);
tree.insert(12);

console.log(tree);
