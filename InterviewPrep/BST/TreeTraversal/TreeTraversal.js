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
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      /* if it doesn't meet condition we have a match 
        or current has been set to null(node.left & node.right === null) 
        with variable found still false */
      if (value < current.value) {
        // eventually set to null which stops loop
        current = current.left;
      } else if (value > current.value) {
        // eventually set to null which stops loop
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return `${found}: node doesn't exist`;
    return `${found}: we searched for your node (${value}). 
      Here is the result: ${JSON.stringify(current)}`;
  }
  BFS() {
    let node = this.root;
    let queue = [];
    let storage = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      storage.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return storage;
  }
}

// let tree = new BinarySearchTree();

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
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log({ find: tree.find(96) });
console.log({ BFS: tree.BFS() });
