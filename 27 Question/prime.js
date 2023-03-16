// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const isprime = (num) => {
  for (let itr = 2; itr <= Math.sqrt(num); itr++) {
    if (num % itr == 0) {
      return false;
    }
  }
  return true;
};

for (let itr = 2; itr <= 100; itr++) {
  if (isprime(itr)) {
    console.log(itr);
  }
}
