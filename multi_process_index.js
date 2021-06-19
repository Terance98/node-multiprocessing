const app = require("express")();
const { fork } = require("child_process");

app.get("/isprime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Spinning up a child process for execution. Each time a new request is recieved, this happens
  const childProcess = fork("./isPrime.js");

  // Send the message to the child process for execution. Here a json object is sent in the format : { number : 10 }
  childProcess.send({ number: parseInt(req.query.number) });

  // Once the child process completes its execution, it will send back the response message and we can send it back to the client
  // This is an asynchronous process
  childProcess.on("message", (message) => res.send(message));
});

app.listen(8081, () => console.log("Listening on 8081"));
