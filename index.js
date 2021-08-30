const app = require("express")();
//Directly using the exported isPrime function. Child process is not used here
const { isPrime } = require("./isPrime");

app.get("/isprime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // This code will promisify a sync code. Don't know if this is safe in all cases
  const jsonResponse = new Promise((resolve) =>
    setTimeout(() => resolve(isPrime(parseInt(req.query.number))))
  );
  console.log(jsonResponse);
  jsonResponse.then((resp) => res.send(resp));
  // res.send({}); // Comment the above line and uncomment this line if the prime check needs to be executed asynchronously
});

app.listen(8081, () => console.log("Listening on 8081"));
