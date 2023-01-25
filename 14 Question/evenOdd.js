const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter a number: ");
rl.prompt();
rl.on("line", (number) => {
  if (number % 2 == 0) {
    console.log(`${number} is a even number.`);
  } else {
    console.log(`${number} is a odd number.`);
  }
  rl.close();
});
