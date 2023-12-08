// Write your code here



function coffeeSum(coffeeOrders) {
  const coffeePrice = 1.25
  const coffeeTotal = coffeeOrders.reduce((acc, order, index) => {
  acc += (coffeePrice * order)
  return acc
  }, 0)
  return `The total bill is $${coffeeTotal}`
}
const coffeeOrders = [2, 5, 7, 1, 4]
console.log('coffeeSum', coffeeSum(coffeeOrders))