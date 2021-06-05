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
