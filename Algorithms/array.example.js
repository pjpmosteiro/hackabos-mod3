//Añadir y quitar elementos

//pop(): Remove an item from the end of an array
//pop() returns the removed item.
let cats1 = ['Bob', 'Willy', 'Mini'];
cats1.pop(); // ['Bob', 'Willy']


//push(): Add items to the end of an array
//push() returns the new array length.
let cats2 = ['Bob'];
cats2.push('Willy'); // ['Bob', 'Willy']
cats2.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

//shift(): Remove an item from the beginning of an array
//shift() returns the removed item.
let cats3 = ['Bob', 'Willy', 'Mini'];
cats3.shift(); // ['Willy', 'Mini']

//unshift(): Add items to the beginning of an array
//unshift() returns the new array length
let cats4 = ['Bob'];
cats4.unshift('Willy'); // ['Willy', 'Bob']
cats4.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']

//Splicing arrays in JavaScript removes a certain part from an array to create a new array, made up from the part we took out. For example, if we wanted to remove the five numbers from the following array beginning from the 3rd index, we would do the following:

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,7);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9
