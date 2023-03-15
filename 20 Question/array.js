// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.push("Meat");
  console.log(shoppingCart);
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
