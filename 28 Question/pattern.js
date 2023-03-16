// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter the number: ");
rl.prompt();

rl.on("line", (num) => {
  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }

  console.log("\r");

  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j < num; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }

  console.log("\r");

  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = num; j > i + 1; j--) {
      pattern += " ";
    }
    for (let j = 0; j < 1 + i * 2; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
  rl.close();
});
