# webdev-review

## Table of Contents

> > [The Internet](#internet)

> > > [Networking](#networking)

> > > > [Networking Protocol](#networkingProtocol)

> > [Systems Design](#systemsDesign)

<a name="internet"></a>

## The Internet

<a name="networking"></a>

### Networking

<a name="networkingProtocol"></a>

#### Networking Protocol

- Contract between network and client about requests will be exchanged
- HTTP: hypertext transfer protocol
  - deals with the formatting of requests and responses, not concerned with the actual mode of transit (TCP, IP do)
- UDP: user datagram protocol
  - a firehose of unsupervised packet flow; useful when a huge volume of data is needed quickly and some data loss is tolerable
- TCP: transmission control protocol
  - measured, realize via three way handshake; will try to resend data that is corrupted or fails to arrive
- IP: internet protocol

#### HTTP

- The content-type in the http header is used to determine the type of data in the response body. Check the MIME type.
  - A mime type is a label used to identify a type of data.
    - Multipurpose internet Mail Extensions
      - images
      - html
      - plain text

#### LRU Cache

- Cache files that we think will be requested again in the near future to reduce repeated expensive computations of fetching from disk

#### Data Encapsulation

- Is the process in which some extra information is added to the data item to add some features to it.
  - We either use the OSI or the TCP/IP model in our network, and the data transmission takes place through various layers in these models.
  - Data Encapsulation adds the protocol information to the data so that data transmission can take place in a proper way.
  - This information can either be added in the header or the footer of the data.
  - Data is encapsulated on the sender's side, starting from the application layer to the physical layer. Each layer takes the encapsulated data from the previous layer and adds some more information to encapsulate it and some more functionalities with the data.
    - These functionalities may include proper data sequencing, error detection and control, flow control, congestion control, routing information...

#### Data Encapsulation - HTTP data packet

- Ethernet Header
  - Deals with routing on the LAN
- IP Header
  - Deals with routing on the internet
- TCP Header:
  - Deals with data integrity
- HTTP Header: Deals with web data

### Why is that in the web server code, sockets are nothing more than integers? How does this work

Socket numbers are like pointers in that they reference a pointer without embodying its entire structure. The OS manages and tracks socket connections because its a privileged operation.

#### Describe how to add an item to an LRU cache

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

#### TCP vs UDP

- TCP is reliable due to three way handshake and reattempts to send; ideal for messaging
  - Three-Way Handshake
    - Client sends an initial request to the server
    - The server acknowledges receipt of that initial request
    - Client acknowledges acknowledgement
- UDP is a high volume stream of data packets that skims over loss data; ideal for streaming

#### URL entered into browser

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

<a name="systemsDesign"></a>

## Systems Design

<a name="approach"></a>

### Approach

- Outline Use cases, constraints, assumptions
- Generate a high level design
- Design core components
- Scale the design; identify bottlenecks

<a name="scaling"></a>

### Scaling

#### Vertical Scaling

- If you're low on CPU, Disk, RAM, get more
- More threads + processors + computational resources = higher scale
- Mechanical drives -> solid state drives
- There is a ceiling

#### Horizontal Scaling

- Instead if a few high-powered machines/servers, cluster a bunch of cheap ones
- Now, if a request comes in and we have more than one server, we have to use load balancing to distribute the requests; instead of returning IP address of the server, you can return the IP address of the load balancer

#### Loading Balancing

- Request arrives at load balancer via its IP address
- The load balancer determines which server to route it to, probably based on some metric of business -- send the request to the least busy server -- or you could differentiate the servers by the content it contains (e.g each one is responsible for a different content type). Simply, you can do round robin (first request -> server 1; second request -> server 2; etc) though this doesn't take performance, computational variability into account
- Then the server sends the response back to the load balancer, which passes it along to the client

#### Sticky Sessions

- sessions persist, handstamps for which server to send the user to by hashing some id for the server, interpreted by the load balancer, and storing it in a cookie

#### Memcached

- memory cache, server that stores whatever you want in RAM; relies on LRU for eviction; good for read-heavy

#### Disk is slow, but fast to serve up

##### Replication

- in the Captain-Sailor model, the Captain is the database for read/writes and the Sailors are the backup copies for redundancy and reads. They should all be identical so if the Captain falls overboard, you can promote one of the Sailors to be the new Captain. There is also a Captain-Captain model where there won't be any latency for Sailor->Captain promotion, instead, there are these co-captains.

#### Scaling Additional Notes

- Steps

  - outline features
  - define APIs (how will they be structured)
  - availability - how much redundancy do we need to have
  - latency performance (cache might be added to lower latency)
  - scalability (load balancing)
  - durability
  - class diagram
  - security/privacy

- CAP
  - consistency vs availability
  -
- Partitioning/Sharding Data needs to consistent hashing

- Latency

  - the time taken for a packet to be transferred across a network. You can measure this as one-way to its destination or as a round trip.

- Throughput - the quantity of data being sent and received within a unit of time
- Bandwidth - the number of packets that can be transferred throughout the network

- memcached & redis: distributed cache, hold data in memory in key value store, they should never be source of truth
- mapreduce: parallel processing with fault tolerance
