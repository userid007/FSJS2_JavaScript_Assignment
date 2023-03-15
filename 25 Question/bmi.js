// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in
// adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the
// information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Enter a height and weight: ");
rl.prompt();

rl.on("line", (hw) => {
  let weight, height;
  [weight, height] = hw.split(" ").map((item) => Number(item));
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi < 25) {
    console.log("Normal Weight");
  } else if (bmi < 30) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
  rl.close();
});
