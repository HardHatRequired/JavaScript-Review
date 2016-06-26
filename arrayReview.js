var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr) {
  return arr.pop();
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function removeOdd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function findNum(num) {
  var bool = false;
  for (var i=0; i<randomArray.length; i++) {
    if(randomArray[i] === num) {
      bool = true;
    }
  }
  return bool;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

function copyArray(first,second) {
  second = [];
  for (var i = 0; i < first.length; i++) {
    second.push(first[i]);
  }
  second.push(6,7);
  // alert(first); //[1,2,3,4,5]
  // alert(second); //[1,2,3,4,5,6,7]
}

copyArray(first, second);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";
var test2 = "The end is so near that even eyes cannot tell";

function longest(str) {
  var arr = str.split(" ");
  var long = '';
  for (var i = 0; i < arr.length; i++) {
    long = (long.length <= arr[i].length) ? arr[i]: long;
  }
  console.log(long);
  return long;
}

longest(sentence);
longest(test2);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes the first letter of each word
var myPoem = 'What is a jQuery but a misunderstood object?'

function cap(str) {
  str = str[0].toUpperCase().concat(str.substring(1, str.length));
  for (var i = 1; i < str.length; i++) {
    if(str.substr(i,1) === " ") {
      str = str.substring(0,i).concat(" ", str[i+1].toUpperCase(), str.substring(i+2, str.length))
    }
  }
  console.log(str);
  return str;
}

cap(myPoem);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(str) {
  var vowels = 'aeiou';
  str.toLowerCase();
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if(vowels.indexOf(str.substr(i,1)) >= 0) {
      counter += 1;
    }
  }
  console.log(counter);
  return counter;
}

vowelCounter(theOdyssey);
vowelCounter('aeiou');
