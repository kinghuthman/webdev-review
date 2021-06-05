# TREE TRAVERSAL

## INTRO

- Traversing A Tree
  - Two Ways:
    - Refers to general direction
    - Breadth-first Search
      - Horizontal search, going across
    - Depth-first Search
      - Three main orders
      - Primary direction is vertically, going down, then coming back up
      - DFS - PreOrder
      - DFS - PostOrder
      - DFS - InOrder

## BREADTH FIRST SEARCH

- Iterative Steps
  - Create a queue (this can be an array) and a variable to store the values of nodes visited
  - Place the root node in the queue
  - Loop as long as there is anything in the queue
    - Dequeue(shift, remove from front) a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
  - Return the variable that stores the values

## DEPTH FIRST SEARCH

- Traverses through trees vertically

### DFS - PreOrder

- Visit the root first, then traverse entire left side, then entire right side
- Better to be done recursively
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - Push the values of the node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property on the node
  - Invoke the helper function with the current variable
  - Recursion will pause functions until the functions invoked within, are completed

### DFS - PostOrder

- First traverse the entire tree or the entire branch from a given node, the left and the right. Then visit the node
- The root is the last thing visited
- Explore all children before we actually visit the node
- Recursive Steps
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
    - Push the values of the node to the variable that stores the values
  - Invoke the helper function with the current variable
  - Recursion will pause functions until the functions invoked within, are completed

### DFS - InOrder

- Traverse the left, visit the node
- Traverse the right, visit the node
- Recursive Steps
  - Create a variable to store the values of nodes visited
  - Store the root of the BST in a variable called current
  - Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - Push the values of the node to the variable that
    - If the node has a right property, call the helper function with the right property on the node
    - stores the values
  - Invoke the helper function with the current variable
  - Recursion will pause functions until the functions invoked within, are completed

## WHEN TO USE BFS & DFS

- Depends on the tree
- Time complexity of DFS & BFS are the same as we visit every node
- Need to keep in mind space complexity
  - Wider trees it's better to use DFS (???)
    - How much space do we take in the process of doing that work?
    - How much gets stored in memory at any given time(within our queue)
    - If it's a deep search, DFS will take up more space, BFS won't keep much in queue
- Different use cases/examples
  - DFS - InOrder
    - Commonly used with BST's
      - Retrieve nodes in order
  - DFS - PreOrder
    - Can be used to "export" a tree structure so that is easily reconstructed or copied
      - If you want to flatten it out, or store in a database
      - Given to you in an order where you can reconstruct a tree

## RECAP

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right of a parent is greater
- Search through trees using DFS & BFS
