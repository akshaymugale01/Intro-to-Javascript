/*
//strings
//1)JavaScript string is made up of a sequence of UTF-16 units.
//2)tring is a type of primitive data that is used to manipulate text.
//3)Strings in JavaScript are immutable, which means once they are created, their values cannot be changed

//single quotes

let a = 'Akshay'

//double quotes

let aa = "akshay"

//template literal - Backtick

let aaa= `Akshay`

//Backticks are commonly used to incorporate variables or expressions into a string. 
//The  ' ${} ' syntax is used to interpolate the values of the variables into the string

const name ="Akkie"
const age = 23

console.log(`My Name is ${name} i'm ${age} years old`); //My Name is Akkie i'm 23 years old
console.log(name[1]);
console.log(age);


//Strings Are Emmutable Their Char can't b changed!

// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' +
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

console.log(message1)


//join strings

let c ='hello'.concat(' ', 'world');
console.log(c);

*/

//Strings Are immutabale

var str  = 'Hello'
console.log(str)
console.log(str[1])

//concat Joint Strings

var str1 = 'Well'
var str2 = 'come'
var concatStr= str1.concat('',str2)
console.log(concatStr); //Wellcome

//length of String

var str4 = 'My Name is akshay mugale.'
console.log(str4.length);

//indexOf particular character
console.log(str4.indexOf('a'));

//charAt
console.log(str4.charAt(18));

//replace
console.log(str4.replace('akshay','ajay')); //given name , new name

//slice
console.log(str4.slice('0','24')) //from which index to last index to show!

//trim
let strr = 'heLLo   '
console.log(strr)
console.log(strr.trim()) //remove spaces.

console.log(strr.toUpperCase()); // uppercases
console.log(strr.toLowerCase()) //to lower case

//start with True or false
console.log(strr.startsWith('h'));
console.log(strr.endsWith(' '));  //space in strr line no-83

const message = 'My Name is akshay Mugale ' + "I'm MERN Developer From Almabetter " + "With My salary is 14~16LPA."
console.log(message);



//Problem To solve:
//Take Email as input and display domain name.

let emailAdd = 'akshaymugale@gmail.com'
let newArr = emailAdd.split("@");
console.log(newArr)