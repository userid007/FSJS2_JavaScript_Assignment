// 29. Write a javascript program which takes the input of filename as string and prints the extension
// of the file in the console.

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter the filename: ");
rl.prompt();

rl.on("line", (file) => {
  console.log(file.split(".").pop());
  rl.close();
});
