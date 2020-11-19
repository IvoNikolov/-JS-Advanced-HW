let users = ["George", "Peter", "Ada", "Maria"];

// Task 1
users.sort();

users.forEach( user => {
  console.log(user);
});

console.log("------------------");
// Task 2

users.sort(function(a, b){
  return a.length - b.length;
});

users.forEach( user => {
  console.log(user);
})
