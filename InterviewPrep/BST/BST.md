# BST

## Objectives

- define a tree
- compare and contrasts trees and lists
- explain the difference between trees, binary trees and bst
- implement operations on bst

### Trees

- A data structure that consists of nodes in a parent / child relationship
- Lists are linear, trees are non-linear
- Linked lists only have one path way through
  - Singly linked lists can be considered as a special case for a tree
- Nodes that represent other nodes and are not under a parent, means that is not a tree
  - a node can only point to a child at the parent-child relationship
- If there is no root (two beginnings), it is not a tree
- Root
  - top node of a tree
- Child
  - node connected to another node as it traverses away from the root
- Parent
  - the converse notion of a child
- Leaf
  - a node with no children
- Edge
  - connection between one node and another (line on most images)

## MORE ON TREES

- Lots of different applications
  - HTML DOM
  - Network Routing
    - Routing/Delivery Schemes
  - Abstract Syntax Trees
  - Artificial Intelligence
  - Folders in Operating Systems
  - Computer File System
  - Parsing JSON

## INTRO TO BINARY TREES

- There are many types of trees, yet all follow the same fundamentals... (wikipedia)
- Binary trees are valid
  - each node can have no more than two children
- Binary Trees have certain properties that make it easier to navigate
- Binary Search Trees
  - Sorted in a particular way
  - Used to compare things
  - Which one is greater, which one is less (special property)
    - Normally(?), smaller nodes are on the left, larger are on the right, traversing/starting with the root.
  - How BSTs work
    - Every parent node must have at least two children
    - Every node to the left of a parent node is always less than the parent
    - Every node to the right of a parent node is always greater than the parent
  - The difference between BTs and BSTs
    - Data kept in a particular order
    - Every node to the left of a parent is less than and vice versa for the right

### INSERTING

    - create a new node
    - start at the root
      - check if there is a root, if not - that node is now the root
      - if there is a root, check if the value of the new node is greater than or less than the value of the root
      - if it is greater
        - check to see if there is a node to the right
          - if there is, move to that node and repeat >< check
            - if there is not, add that node as the right property
          - if it is less
            - check to see if there is a node to the left
            - if there is, move to that node and repeat >< check
            - if there is not, add that node as the left property
    - Handling duplicates
      - frequency count
      - check at the beginning of while loop
        - return this

### FIND

- Start at the root
  - check if there is a root, if not, search is over
  - if there is a root, check if the root is the value we are looking for. If it matches, search is over
  - if not, check to see if the value is greater than or less than the value of the root
  - if it is greater
    - check to see if there is a node to the right
    - if there is, move to that node and repeat the steps starting from match check (===)
    - if there is not, we're done searching
  - if it is less
    - check to see if there a node to the left
      - if there is, move to that ndoe and repeat the steps starting from match check (===)
      - if there is not, search is over.

### BIG O OF BST

- Insertion - O(log n)
- Find - O(log n)
- It's time complexity is not guaranteed
  - average case / best case
  - some binary configurations are slow
    - "weird" trees
      - completely one-sided tree
        - improve time-complexity by changing root of node
- I think it's search is more level base, checks all nodes on level before moving?
- Only works in a BST as we know how it is sorted
- Log (wikipdeia)??
  - 2x number of nodes: 1 extra step
  - 4x number of nodes: 2 extra steps
  - 8x number of nodes: 3 extra steps
