// 23. Write a program to check that the number given by the user is a prime number or not.
const readline = require("readline");

const isprime = (num) => {
  for (let itr = 2; itr <= Math.sqrt(num); itr++) {
    if (num % itr == 0) {
      return "Composite";
    }
  }
  return "Prime";
};
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("Enter a number: ");
rl.prompt();

rl.on("line", (num) => {
  isprime(Number(num));
  rl.close();
});
