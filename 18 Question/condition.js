// 18. Write a program which tells the number of days in a month, now consider leap year.
const readline = require("readline");

const leapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter a MM/YYYY: ");
rl.prompt();
rl.on("line", (date) => {
  let month, year;
  [month, year] = date.split("/");
  month = Number(month);
  year = Number(year);
  console.log(leapYear(year));
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;
    case 2:
      console.log(`${leapYear(year) ? 29 : 28} days`);
      break;
    default:
      console.log("Invalid Month");
      break;
  }
  rl.close();
});
