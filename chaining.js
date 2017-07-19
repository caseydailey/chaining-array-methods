
console.log("chaining.js");

/*
Using one single line of JavaScript code, complete the following tasks on the array of integers below.

Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.
 
 */

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function chain(arr){
    let done = arr.sort((a,b)=> b - a)
                  .filter((num)=> num < 19)
                  .map((num)=> (num * 1.5) -1)
                  .reduce((a,b)=> a + b);
    return done;
}

//one at a time
console.log("integers: ", integers);

let descending = integers.sort((a,b)=> b - a);
let filtered = descending.filter((num)=> num < 19);
let mapped = filtered.map((num)=> (num * 1.5) -1);
let reduced = mapped.reduce((a,b)=> a + b)

console.log("descending: ", descending);
console.log("less than 19: ", filtered);
console.log("(* 1.5) - 1", mapped);
console.log("summed: ", reduced);


// all together
console.log("all together", chain(integers));

