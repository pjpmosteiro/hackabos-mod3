var myRe = new RegExp('d(b+)d','g');
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);

var re = /(\w+)\s(\w+)/; //Palabra seguido de espacio y otra palabra
var str = "Marcos Martinez";
var newstr = str.replace (re, '$2, $1');
console.log (newstr);

var re2 = /\w+\s/g;
var str2 = "fee fi fo fum";//Palabra seguido de espacio
var myArray2 = str2.match(re2);
console.log (myArray2);