// Write your code here
// create a movie object with title, director, genre, release year, rating 
// getOverview
// returns "movie, a genre, fill firected by director was release in releaseYear. It recieved a rating of rating"
// class or function syntax

function Movie(title, director, genre, releaseYear, rating) {
  this.title = title
  this.director = director
  this.genre = genre
  this.releaseYear = releaseYear
  this.rating = rating
}

Movie.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} fill directed by ${this.director} was release in ${this.releaseYear}. It recieved a rating of ${this.rating}.`
}

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87)

console.log('SPIDERMAN', Spiderman.getOverview())
