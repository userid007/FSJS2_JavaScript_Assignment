// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter a Month: ");
rl.prompt();
rl.on("line", (month) => {
  month = month.toLowerCase();
  switch (month) {
    case "september":
    case "october":
    case "november":
      console.log("Season is Autumn");
      break;
    case "december":
    case "january":
    case "february":
      console.log("Season is Winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("Season is Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("Season is Summer");
      break;
    default:
      console.log("Invalid Month");
      break;
  }
  rl.close();
});
