// Write your code here
function urlify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;

  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));