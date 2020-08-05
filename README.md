# webdev-review

## Networking

### Networking Protocol

- Contract between network and client about requests will be exchanged
- HTTP: hypertext transfer protocol
  - deals with the formatting of requests and responses, not concerned with the actual mode of transit (TCP, IP do)
- UDP: user datagram protocol
  - a firehose of unsupervised packet flow; useful when a huge volume of data is needed quickly and some data loss is tolerable
- TCP: transmission control protocol
  - measured, realize via three way handshake; will try to resend data that is corrupted or fails to arrive
- IP: internet protocol

### HTTP

- The content-type in the http header is used to determine the type of data in the response body. Check the MIME type.
  - A mime type is a label used to identify a type of data.
    - Multipurpose internet Mail Extensions
      - images
      - html
      - plain text

### LRU Cache

- Cache files that we think will be requested again in the near future to reduce repeated expensive computations of fetching from disk

### Data Encapsulation

- Is the process in which some extra information is added to the data item to add some features to it.
  - We either use the OSI or the TCP/IP model in our network, and the data transmission takes place through various layers in these models.
  - Data Encapsulation adds the protocol information to the data so that data transmission can take place in a proper way.
  - This information can either be added in the header or the footer of the data.
  - Data is encapsulated on the sender's side, starting from the application layer to the physical layer. Each layer takes the encapsulated data from the previous layer and adds some more information to encapsulate it and some more functionalities with the data.
    - These functionalities may include proper data sequencing, error detection and control, flow control, congestion control, routing information...

### Data Encapsulation - HTTP data packet

- Ethernet Header
  - Deals with routing on the LAN
- IP Header
  - Deals with routing on the internent
- TCP Header:
  - Deals with data integrity
- HTTP Header: Deals with web data

### Why is that in the web server code, sockets are nothing more than integers? How does this work

Socket numbers are like pointers in that they reference a pointer without embodying its entire structure. The OS manages and tracks socket connections because its a privileged operation.

### Describe how to add an item to an LRU cache

Item gets added as the new head of a doubly linked list, this represents the most recently used position. If the DL is full, the LRU will evict the least recently used item(current tail). The hash table must be updated whenever both adding and evicting items.

- The LRU Cache consists of both a hash table and double linked list..
  - hash table for quick access of any item
  - doubly linked list for quickly adding to head, evicting tail

- LRU Item is accessed:
  - Look up in hash table
  - If present in our cache
    - Use the hash table to quickly find the corresponding linked list node
    - Move the item's linked list node to the head of the linked list
  - If not present:
    - If cache is full, evict tail of doubly linked list from the cache by removing it from the linked list and the hash map
    - Create a new linked list node for the item. Insert it as the head of the linked list
    - Add the item to our hash table, storing the newly-created linked list node as the value.
  - O(1) time for access, same to update cache after access/eviction

### TCP vs UDP

- TCP is reliable due to three way handshake and reattempts to send; ideal for messaging
  - Three-Way Handshake
    - Client sends an intial request to the server
    - The server acknowledges receipt of that initial request
    - Client acknowledges acknowledgement
- UDP is a high volume stream of data packets that skims over loss data; ideal for streaming

### URL entered into browser

- browser checks cache
- if not in cache:
  - asks OS for server's IP address
  - OS does DNS lookup ands tells the browser what it found
  - browser opens a TCP connection to server
  - browser sends HTTP request via TCP to server
  - server sends HTTP response to browser; TCP may be closed
  - browser evaluates response (status)
  - caches response
- if in cache:
  - browser decodes response
  - browser evaluates content-type
  - browser renders response