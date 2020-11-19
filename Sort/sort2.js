let users = ["Maria", "Ada", "Ivan"];

// Task 1
console.log(`users:\n\t${users}\n`);

// Task 2

let usersSortedAlphabetically = users.sort(function(a, b){
  return a.length - b.length;
});

console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`);
