const app = require("express")();
//Directly using the exported isPrime function. Child process is not used here
const { isPrime } = require("./isPrime");

app.get("/isprime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const jsonResponse = isPrime(parseInt(req.query.number));
  res.send(jsonResponse);
});

app.listen(8081, () => console.log("Listening on 8081"));
