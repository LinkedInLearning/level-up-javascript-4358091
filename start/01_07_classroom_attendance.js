// Write your code here
// getStudents takes in one arg classroom
// classroom  contains a boolean value hasTeachingAssistant, classlist 

const getStudents = (classroom) => {
  const {hasTeachingAssistant, classList} = classroom
  if (hasTeachingAssistant) {
    return classList.slice(2)
  } 

  return classList.slice(1)
}

console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}));



