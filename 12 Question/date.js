const today = new Date();
const year = today.getFullYear();
const month =
  today.getMonth() + 1 < 10
    ? "0" + (today.getMonth() + 1)
    : today.getMonth() + 1;
const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const hour = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
const minute =
  today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minute}`);
console.log(`${date}-${month}-${year} ${hour}:${minute}`);
console.log(`${date}/${month}/${year} ${hour}:${minute}`);
