// Write your code here

// develop an inventory application for a book store
// title, author, isbn and numCopies
// create book class
// get availability() - "out of stock" if 0, lower than 10 "low stock", or in stock
// sell(numSold = 1)
// restock(numCopies=5)
// use a class 
// use a getter method

class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.numCopies = numCopies
  }

  get availability() {
   return this.getAvailability()
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of Stock'
    } else if ( bookExist && this.numCopies > 10) {
      return 'Low stock'
    } 
    return 'In stock'
  }
  sell(numCopies = 1) {
    this.numCopies -= numCopies
  }
  restock(numCopies=5) {
    this.numCopies += numCopies
  }
}


function Book( title, author, isbn, numCopies) {
  this.title = title
  this.author = author
  this.isbn = isbn
  this.numCopies = numCopies
}

Book.prototype.getAvailability = function() {
  if (this.numCopies === 0) {
    return 'Out of Stock'
  } else if (this.numCopies < 10) {
    return 'Low Stock'
  } else {
    return 'In Stock'
  }
}

Book.prototype.sell = function(numCopies = 1) {
  this.numCopies -= numCopies
}

Book.prototype.restock = function(numCopies = 5) {
  this.numCopies += numCopies
}

const HungerGames = new Book( 'hunger games', 'susane collins', 1234, 5)

console.log(HungerGames.getAvailability())

HungerGames.restock(200)
console.log(HungerGames.getAvailability())

HungerGames.sell(205)
console.log(HungerGames.getAvailability())
