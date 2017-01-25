var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//sort the numbers in descending order
//remove any integers greater than 19
//multiply each remaining number by 1.5 and then subtract 1
//then output the sum of all the resulting numbers

var chainingResult = integers
	.sort(function(a, b){ return a - b})
	.reverse()
	.filter(function(num){return num < 19})
	.map(function(num){return (num * 1.5) -1})
	.reduce(function(prev, curr){ return prev + curr});

console.log('chainingResult:', chainingResult);


