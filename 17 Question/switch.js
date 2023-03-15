// 17. Write a program which tells the number of days in a month.

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter a Month: ");
rl.prompt();
rl.on("line", (month) => {
  month = month.toLowerCase();
  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      console.log("31 days");
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      console.log("30 days");
      break;
    case "february":
      console.log("28/29 days");
      break;
    default:
      console.log("Invalid Month");
      break;
  }
  rl.close();
});
