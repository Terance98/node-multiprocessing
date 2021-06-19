/**
 * The following is the method to create a child process which will listen for a message
 * When it recieves a message, it'll create a new process and starts executing it over that process.
 * Each time we recieve a new request, a new process is spin up
 */

//Creating a child process
process.on("message", (message) => {
  // Here message is the { number : 10 } object which is sent by the parent
  const jsonResponse = isPrime(message.number);

  //We can send our response back to the parent with the process.send() method
  process.send(jsonResponse);
  //Exit the process after its completed, else it will stay as such and take up resources
  process.exit();
});

/************************ PRIME NUMBER FUNCTION ********************* */
// A fuction to check if a number is prime or not : Done in the most inefficient way as possible
function isPrime(number) {
  let startTime = new Date();
  let endTime = new Date();
  let isPrime = true;
  for (let i = 3; i < number; i++) {
    //it is not a prime break the loop,
    // see how long it took
    if (number % i === 0) {
      endTime = new Date();
      isPrime = false;
      break;
    }
  }

  if (isPrime) endTime = new Date();

  return {
    number: number,
    isPrime: isPrime,
    time: endTime.getTime() - startTime.getTime(),
  };
}

/*
2367949 (16 ms)
43686389 (200 ms)
93686687 (500 ms)
936868033(4 seconds)
29355126551 (very long time)
*/

module.exports = { isPrime };
