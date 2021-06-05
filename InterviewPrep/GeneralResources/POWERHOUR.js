/** questions to review */

//www.upwork.com/hiring/development/soap-vs-rest-comparing-two-apis/
https: //www.fullstack.cafe/blog/50-junior-web-developer-interview%20-questions-and-answers-ultimate-list-2018
https: //www.freecodecamp.org/news/cracking-the-front-end-interview-9a34cd46237/

// JS

https: //medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
https: //www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z?utm_source=youtube&utm_medium=social&utm_campaign=outreach&utm_term=post-du107p62z&utm_content=OH119-comment
https: //www.guru99.com/javascript-interview-questions-answers.html
// https://www.wisdomjobs.com/e-university/expressjs-interview-questions.html

// REACT
https: //dev.to/aershov24/26-reactredux-interview-questions-you-should-know-in-2018-41je
https: //www.edureka.co/blog/interview-questions/react-interview-questions/

// cs notes
https: //www.notion.so/Interview-Questions-e38ad86550cb4040bb21553f4549a7e1
https: //www.notion.so/d973eea66fbf4481847db934c9df6e6b?v=3e754b79af6d4438a3fadfa66177ddae

//teach yourself cs
// https://teachyourselfcs.com/#programming

// palindrome
https: function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else return false;
}

console.log(palindrome("racecar"));

// fizzbuzz
const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
};
fizzbuzz(15);

// anagrams
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap)) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// anagrams simpler solution
function anagram2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// fib recursion
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// fib iterative

function fibI(n) {
  // holds series of numbers
  // first two numbers can't be generated and will always be 0,1
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    // previous two records
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

console.log("fib", fib(8));
// What is a singleton pattern?
// A singleton pattern is a creation design pattern that restricts the instantiation of a class to one "single" instance.
class Person {
  constructor() {
    if (typeof Person.instance === "object") return Person.instance;

    Person.instance = this;

    return this;
  }
}

class Person {
  constructor() {
    if (typeof Person.instance === "object") return Person.instance;

    Person.instance = this;

    return this;
  }
}

// what is a hashtable
// Hash tables are used to store key-value pairs, keys are not ordered
// Every operation is fast!
// To implement a hash table use an array!
// In order to look up values by key use a hash function to convert keys into valid array indices

// Hash function
// a good hash is fast
// doesnt cluster outputs at specific indices, but distrubutes uniformly
// deterministic(same input yields same output)

// every character has a numeric character code with it
// subtract 96 from character code will give you the alphabet position
// add every character code together from its alphabet position using a loop
// take the length of the array and total get the modulo (total % length)

function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash(key, arrayLen) {
  let total = 0;
  // helps with reducing collusions and storing data in same spot
  let WEIRD_PRIME = 31;
  // loop whatever is smaller, key or 100
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("woah", 11));
console.log(hash("pink", 11));

// Dealing with collisions
// even with a large array and a great hash function, collisions are inevitable.. two strategies

// Separate Chaining - with separate chaining, each index in the array we store values using a more sophisticated data structure (array or linked list) prety much check an indices to see if it has more than one value and loop to find the key you are searching forrrr

//Linear Probing
// when a collision occurs, search through the array to find the next empty slot, Unlike with separate chaining this allows us to store a single key-value at each index.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // get character
      let char = key[i];
      // get character code at alpha position
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // accepts a key and value, hashes the key, stores the key-value pair in the hash table array via separate chaining
  set(key, value) {
    // index of key
    let index = this._hash(key);
    // if there's nothing at the index, insert empty array and add key,value.. if there's something there, nest.
    if (!this.keyMap[index]) {
      // create a new array at that index
      this.keyMap[index] = [];
    }
    // push nested array at index
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }
  // accepts a key, hashes the key, retrieves the key-value pair in the hash table
  // if the key isnt found, returns undefined
  get(key) {
    let index = this._hash(key);
    // if index exists in key map
    if (this.keyMap[index]) {
      // loop through index in subarray of keymap
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // i is whats at the index subarray, [0] is the key
        if (this.keyMap[index][i][0] === key) {
          // return key and value or "subarray"
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
  // loops through the hash table array and returns an array of keys in the table
  keys() {
    let keysArr = [];
    // loop through keymap
    for (let i = 0; i < this.keyMap.length; i++) {
      // check if index exists in keymap
      if (this.keyMap[i]) {
        // loop through index in keymap
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // check for duplicates, if it doesnt exist push
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            // push key, i = index, j = sub array, 0 = key
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  // loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    // loop through keymap
    for (let i = 0; i < this.keyMap.length; i++) {
      // check if index exists in keymap
      if (this.keyMap[i]) {
        // loop through index in keymap
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // check for duplicates, if it doesnt exist push
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // push value, i = index, j = sub array, 1 = value
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
console.log("set", ht.set("hello world", "goodbye"));
console.log("set", ht.set("hello", "godbye"));
console.log("set", ht.set("duplicate", "godbye"));
console.log("set", ht.set("brrrr", "oodbye"));
console.log("set", ht.set("brrrr", "wooodbye"));
console.log("get", ht.get("brrrr"));
console.log("valies", ht.values());
console.log("keys", ht.keys());
ht.keys().forEach(function (key) {
  console.log("hey", ht.get(key));
});

// Exception is thrown when you access an xmlhttprequest response before it is complete. Error indicates a clear violation. Try catch block

// Linked Lists
// contains a reference to the next node
// two special nodes, the head node and the tail node
// tail node does not have a reference to any other node
// data in a node can be any type of valid javascript value

class Node {
  // takes data and the next node in the chain
  contstructor(data, next = null) {
    // assign data to the data property in the node
    this.data = data;
    // it's fine to pass a node with no next as it will default to null
    this.next = next;
  }
}

// linked list class only knows about the first node
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    // create a new node with this.head as its next node
    const node = new Node(data, this.head);
    // this.head is new node
    this.head = node;
  }
  size() {
    // initiate a total
    let total = 0;
    // set node to the head
    let node = this.head;
    // loop through list if there is a node
    while (node) {
      // increment counter variable
      total++;
      // shift node over
      node = node.next;
    }
    return total;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    // if there's no node return null
    if (!this.head) {
      return null;
    }
    // reference to first node
    let node = this.head;
    // loop through list
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }
  removeLast() {
    // if list is empty
    if (!this.head) {
      return;
    }
    // only 1 node in list
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    // while this.head.next.next is not null;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    // after reaching the end, remove the last node
    prev.next = null;
  }
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // there are some existing nodes
      last.next = new Node(data);
    } else {
      // chain is empty
      this.head = new Node(data);
    }
  }
  // linked lists are 0 index
  getAt(idx) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      // counter is equal to index
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // index is out of loop
    return null;
  }
  removeAt(idx) {
    if (!this.head) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }
    // node right before the one you want to remove
    const previous = this.getAt(idx - 1);
    // index is out of bounds or node is last
    if (!previous || previous.next) {
      return;
    }
    // node at index points to next node, removing node at index
    previous.next = previous.next.next;
  }
  insertAt(data, idx) {
    //insert new node with data at the 0 index when the list is empty
    if (!this.head) {
      this.head = new Node(data);
    }
    // index of 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // right before the node we want to insert, need this reference, if it returns falsy it will provide last node
    const previous = this.getAt(idx - 1) || this.getLast();
    // new nodes next node is the old node that was next to the node where we want to insert new node
    const node = new Node(data, previous.next);
    // set node to that spot
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.head = new Node(10);

//
//

/** What is React
 *
 * React is an open-source javascript library created by facebook for building complex, interactive UIS in web and mobile apps.
 *
 * call setState -
 *
 * react merges proposed state into current state, initiate reconciliation between the previous and new states via constructing a new tree of React elements, then it properly updates components that were modified. unique keys are important for expedient and reliable reconciliation
 */

// TREES
// Parent node has child nodes :)
// nodes at a giving level are referred to as siblings
// Breadth-First-Travel = start at the top level and go from left to right
// Depth-First-Travel = start at the top level and go down the left hand side, soon as we hit the bottom we go back up to the closest parent and then go back down again

class Node {
  constructor(data) {
    this.data = data;
    // stores children
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }
  remove(data) {
    this.children = this.children.filter((node) => {
      // will return all nodes that are not equal to what needs to be removed
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    // tree will start empty
    this.root = null;
  }
  traverseBF(fn) {
    // root node is first in the array
    const arr = [this.root];
    // going to be removing items from the array
    while (arr.length) {
      // first item in the array/tree
      const node = arr.shift();
      // node.children is an array, take every element from that array and push them nto the tree array?
      arr.push(...node.children);
      // pass parent node through iterator function
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      // add children to front of the array
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

// bst
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
  insert(data) {
    if (data < this.data && this.left) {
      // recurse through left side
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

// async await promises cb

// async/await is used to work with promises with asynchronuus functions. putting async in front of the function expects it return the promise. aka a callback. Await can be used for single promises to get resolved or rejected and return the data or error. there can be multple awaits in a single async function. try/catch makes it easy to handle synchronous and asynchronous code. async/await behaves like synchronous code execution

// synchronous - execution happens in a single event, only execute the next event when the previous event is completed

// asynchronous - non blocking, it will execute all the events in a single go and multiple events will be in progress

// callback function is a function which will get called after the execution of the first function and it will run the second function

// promise is an object which keeps track of whether the asynchronous event has happened already or not and determines what happens after the event has occurred. three states.. fulfilled, pending, or rejected

// NODE

// a javascript runtime environment - it enables javascript to escape the confines of the browser. built on googles v8 engine
/**
 * emphasis on event driven http servers
 * asynchornous (reliant on callbacks)
 * no dead-locking
 * single threaded(for async processing
 * event loop as a runtime construct(runs until no more callbacks are left)
 * good for concurreny
 * if two operations can be run asynchronously, non-blocking formatting will make that possible... callbacks are used to preserve an order of events
 * could be more secure
 * package.json involves a lot of boilerplate noise
 * module resolution algo is very complicated
 */

// Functional programming vs OOP

/* Functional programming avoids shared state and mutable data
 * pure functions
 * avoid side effects(side effects are anythinig that affects something outsdie the scope of the function being executed)
 * simple function composition
 * First class functions
 * higher order functions
 * functions as arguments/values
 */

// classical inheritance vs prototypal inheritance
/**
 * class inheritance - instances inherit from classes like a blueprint
 * and create subclass relationships: hierachical class taxonomies. instances are created via the new keyword.. create tight coupling
 *
 * prototypal inheritance - instances inherit directly from other objects. instances are typically instantiated via factory functions or Object.create()
 */

// pros and cons of FP & OOP

/**
 * fp pros
 *
 * programmers avoid shared state or side effects which eliminates bugs caused by multiple functions competing for the same resources. code can be reusable compared to oop
 *
 * tends to favor declarative and denotational syles, which do not spell out step-by-step instructions for operations, but instead focus on what to do, letting the underlying functions focus on the how. Leaves tremendous latitude for refactoring, simply many applications
 *
 * fp cons
 *
 * large compositions of the point free style reduce readability because the resulting code is often more abtractly specified. Fp has as steeper learning curve
 *
 *
 * oop pros
 *
 * its easy to understand the basic concept of objects and easy to interpret the meaning of a method call. uses an imperative style rather than a declarative style(the what).
 *
 * oop cons
 *
 * typically depends on shared state. objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non deterministic order, which can lead to undesired behavior and race conditions. resilant to change and can be very brittle compared to an equivalent fp codebase
 */

// class inhertance is rarely a good choice, never more than one level. react.component is okay as a single level.
// object composition over class inheritance

// when is protypal inhertance an appropriate choice

// Delegation (the prototype chain)
// Concatenative (mixins, object.assign())
// functional ( a function used to create a closure for private state/encapsulation.. not fp)

// each type of prototypal inheritance has its own set of use-cases, but all of them are equally useful in their ability to enable composition, which creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance

// the answer is in situations where modules or fp dont provide an obvious solution, when you need to compose objects from multiple sources, anytime you need inheritance

/** what does favor object composition over class inheritance mean
 *
 * code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating class taxonomies
 *
 * avoid tight coupling
 * avoid brittle base class problem
 * avoid the gorilla banana problem .. wanted a banana but you got a gorilla holding the banana and the whole jungle
 */

/** two way binding and one way binding
 *
 * two way binding means that the ui fields are bound to model data dynamically such that when a ui field changes the model data changes and vice versa
 *
 * one way flow = model is the single source of truth only the model has access to change the app's state. data flows in a single direction, which makes it wasier to understand.
 *
 * two way binding can cause side effects which are harder to understand
 */

/** what is asynchornous programming and why is it important
 *
 * Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk i/o
 *
 * asynchronous progamming means that the engine runs in an event loop.
 *
 * when a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.
 *
 * Node is async by default, waiting in a loop for a network request and accepting more incoming requests while the first one is being handled.
 *
 * ui are async by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger event handlers.
 */

// CSS

// Spriting images make it one large image and then only show parts of the image that is needed
// break down files into smaller more focused files, instead of profile.sass have button.sass and dialog.sass
// prefix image file names with their usage
// should almost never need to use IDs as broken behaviors from id collisions are hard to track down
// rarely want to nest as it makes it harder to tell at a glance where css selector optimiazations can be made

/**
 *
 * box model -
 * rectangular layout paradigm for html elements that consists of content, padding, margin, and border
 *
 * float - positioning property.
 *
 * flex-box - meant for 1 dimensional layouts, solves vertical centering of elements within a container, sticky footer, etc..
 *
 * preprocessor - generate css from the preprocessor's own unique syntax
 *
 * DOM -
 *
 * treats html, xml document as a tree structure where each node represents a part of the document.
 */

// Event bubbling - when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors

/** The this keyword
 * the this keyword refers to the object it belongs to
 * in a method, this refers to the owner object
 * alone, this referes to the global object
 * in a function, this refers to the global object
 * in a function, in strict mode, this is undefined
 * in an event, this refers to the element that received the event
 * methods like call and apply can refer this to any object
 */

/** SQL
 * a database management system that is reliable and easy to use. small or large applications
 *
 * advantages
 * supports different types of storage engines to store the data and it works faster for this feature
 * it can handle millions of queries with a high speed transactional process
 * it supports many advanced level database features, multi-level transaction, data integrity, deadlock identification
 *
 * disadvantages
 * it is hard to make mysql scalable
 * not suitable for a very large type of database
 *
 * Databse table uses a primary key to identify each row uniquely. It is necessary to declare the primary key on those tables that require to create a relationship among them. When a primary key of any table is used in another table as the primary key or another field making a databse relation, then it is called a foreign key
 *
 * distinct - filter duplicate data
 * like - selecting a query for partial matching
 * substr - is used to retrieve a portion of any column
 * count - count the total number of records of any table
 * sum - calculate the sum of any column of a table
 * truncate - deletes all the records from the table or make the table empty and reinitializes the table and new record will start from one
 *
 * an index is a data structure of mySQL table that is used to speed up the queries, one or more fields of a table can be used as an index key.
 *
 * unique key field can accept a null value, unique data is stored in a unique key field
 *
 * 'join' is used to make a connection between two or more tables
 * inner join, left outer join, right outer join, full outer join
 */

/** System Design
 *
 * vertical scaling -
 *
 * low on cpu, disk, ram, get more
 *
 * more threads & processors & computational resources = higher scale
 *
 * mechanical drives -> solid state drives better option
 *
 * horizontal scaling -
 *
 * instead of a few high powered machines/servers, cluster a bunch of cheap ones.. now if a request comes in and we have more than one server, we have to use a load balancing to distribute the request. instead of returning the ip of the server, return the IP address
 *
 * load balancing -
 *
 * request arrives at load balancer, load balancer determines which server to route the request to, server sends response back to the load balancer, which passes it to the client
 *
 * sticky sessions -
 *
 * sessions persist, handstamps for which server to send the user to by hashing some id for the server, interpreted by the load balancer, and storing it in a cookie
 *
 * memcached - memory cache, server that stores whatever you want in ram; relies on LRU for eviction, good for read heavy
 *
 * outline features
 * define apis and how they will be structured
 * availability - how much redundancy do we need to have
 * latency performance
 * scalability
 * durability
 * class diagram
 * security privacy
 */
