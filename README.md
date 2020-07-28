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