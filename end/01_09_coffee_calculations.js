// Write your code here
function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));