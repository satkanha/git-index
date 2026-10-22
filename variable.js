// Use const for values that will not be reassigned.
const userName = "Kanha";
const age = 20;
const isStudent = true;

// Use let for values that can change.
let score = 0;
score = score + 10;

// JavaScript variables can also hold arrays and objects.
const subjects = ["HTML", "CSS", "JavaScript"];
const user = {
  name: userName,
  age: age,
  isStudent: isStudent,
};

console.log(`Hello, ${userName}!`);
console.log("Score:", score);
console.log("Subjects:", subjects);
console.log("User:", user);
