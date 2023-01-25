const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter grade: ");
rl.prompt();
rl.on("line", (grade) => {
  if (grade > 100 || grade < 0) {
    console.log("Please enter correct scores.");
  } else if (grade >= 80) {
    console.log("You got A grade.");
  } else if (grade >= 70) {
    console.log("You got B grade.");
  } else if (grade >= 60) {
    console.log("You got C grade.");
  } else if (grade >= 50) {
    console.log("You got D grade.");
  } else if (grade >= 0) {
    console.log("You got F grade.");
  }
  rl.close();
});
