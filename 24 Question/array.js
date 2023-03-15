// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to
// 100 (0 and 100 included).

const even = [];
const odd = [];
for (let itr = 0; itr <= 100; itr++) {
  if (itr % 2) {
    odd.push(itr);
  } else {
    even.push(itr);
  }
}
console.log(even,odd);