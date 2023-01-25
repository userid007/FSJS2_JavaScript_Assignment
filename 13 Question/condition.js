const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(`Enter your age: `);
rl.prompt();
rl.on("line", (age) => {
  if (age >= 18) {
    console.log("You are old enough to drive");
  } else {
    console.log(
      `You need to wait ${
        18 - age > 1 ? 18 - age + " years" : "1 year"
      } to drive.`
    );
  }
  rl.close();
});
