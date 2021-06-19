# node-multiprocessing

A boilerplate repository to test out the multi processing methods in Node.js

## Setup

- npm run server1 :- Use this for legacy single process based server
- npm run server2 :- Use this to test out the multiprocess based server

## Explanation

- Here we have 2 servers, one uses the single process method, other one uses the multiprocessing method
- The first one will block the server when a particular request is being processed, so horizontal scaling should be implemented if we are to handle another request
- The second server uses the Node's child process features to spin up a new child process each time a request comes. This will help in paralell execution so the server now becomes non-blocking by itself and doesn't require a horizontal scaling.
- Remember to close/exit each process after use since otherwise stay as such it will take up the system resources

## Conclusion

- Best method is to not use this mutliprocessing method while architecturing a software
- The system will get very complex like which all child processes are executing right now we have to check those out
- It becomes very hard for debugging. Though we can identify the child process and pass its processId to the debugger, it will still be a complicated process
- The advantage here is that the execution becomes pretty much non-blocking without any horizontal scaling
- Another method is to pre-define and create a pool of processes. That way a new process is not spin up each time a request is sent. It is being used in libraries like node-postgres where we can have a pool of processes set to a limit ( say 7 ) that are connected with the postgres server and whenever a request comes if any of the process is free, we can use that. If exceeded, then the request has to wait for a process to become available
- Ideally microservices and containers are the best method to handle this when architecturing a software. Use a good load balancer above it. The containers will scale up horizontally as per required.
