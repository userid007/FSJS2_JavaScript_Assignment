// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction,
// multiplication and division on given numbers.

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter the eq (ex. 1 * 1): ");
rl.prompt();

rl.on("line", (eq) => {
  eq = eq.split(" ");
  eq[0] = Number(eq[0]);
  eq[2] = Number(eq[2]);
  let operator = eq[1];
  switch (operator) {
    case "+":
      console.log(eq[0] + eq[2]);
      break;
    case "-":
      console.log(eq[0] - eq[2]);
      break;
    case "*":
      console.log(eq[0] * eq[2]);
      break;
    case "/":
      console.log(eq[0] / eq[2]);
      break;
    default:
      console.log("Wrong operator");
      break;
  }
  rl.close();
});
