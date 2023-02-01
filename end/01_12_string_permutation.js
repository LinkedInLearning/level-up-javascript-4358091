// Write your code here
// function numPermutations(letters) {
//   let total;
//   for (let i = 1; i <= letters.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

function numPermutations(letters) {
  if (letters.length === 1) {
    return 1;
  }
  return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));