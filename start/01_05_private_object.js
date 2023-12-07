// Write your code here
// create user object that has 3 properties
// username, password and age
const userName = Symbol('username')
const password = Symbol('password')
const user = {
  [userName]: 'angie',
  [password]: '2345', 
  age: 55
}



console.log("username", user.userName)
console.log('password', user.password)
console.log('age', user.age)