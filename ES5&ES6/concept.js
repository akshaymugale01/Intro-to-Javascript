// ECMA Script
// They Maintain Javascript

// ES5
// 'use strict' - stop lot of mistakes while in terminal
 
"use strict"

 //x = 5  // not strict
//console.log(x) // o/p 5 

// Instal 'es5 in terminal'
let z = 10;
console.log(z)

// trim remove spaces

let str = "    Akshay"
console.log(str.trim())


// Get dosent need to bracket

const person ={
    name : 'Akshay',
    surName : 'Mugale',
    age : 23,
    get display(){ // get without key // No need to () give in console
        return `${this.name} and ${this.age}`
    }
}

console.log(person.display)

//Set 


/*
ES5 Concepts
JavaScript ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, released in December 2009. 
It introduced several important features and concepts that were widely
used before newer versions of JavaScript (ES6 and beyond) were introduced.

Here are some key concepts introduced in ES5:
-“use strict” = enables "strict mode" in a script or a function
-Multiline strings = you can use the backslash (\) to create multiline strings by escaping the line breaks
-String trim() =  that removes whitespace characters from both the beginning and the end of a string
-JSON.parse() and JSON.stringify() =  two important functions provided by JavaScript for working with JSON (JavaScript Object Notation) data
-Getters and Setter =allow you to define custom behavior when reading (getting) or writing (setting) the value of an object property
 */


 // trim()   // remove white space

 let str1 = '     akshay mugale'
 let result1 = str1.trim()
 console.log(result1)

 
 //  JSON.parse()

 const jsonString = '{"name": "John", "age": 30, "isStudent": true}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.name);
console.log(parsedObject.age);
console.log(parsedObject.isStudent);

console.log(parsedObject)


// JSON.stringify

let userObj = {
    name : 'sunny',
    add: 'india',
    movie :' Gadar 2'
};

let stringg = JSON.stringify(userObj);

console.log(userObj)
console.log(stringg)


// Multilinestring

const multilineString = "This is a multiline string \
using the backslash to escape line breaks\
in JavaScript ES5.";
console.log(multilineString);



// Getter and Setter
//Protect private values in js

const personAk = {
    name : 'vaishnavi',
    age : 23,

    get display(){
        return `${this.name} she is ${this.age} years old`
    }

}

console.log(personAk.display)

class PersonC{
constructor(name){
    this.name = name
}
get display(){
    return this.name
}
}

let p1  = new PersonC('Shivani')
console.log(p1.display)

// setter

const data = {
    _age: 30,
    set age(newAge) {
      if (newAge >= 0 && newAge <= 120) {
        this._age = newAge;
      } else {
        console.log("Invalid age value");
      }
    }
  };
  
  data.age = 25; // Sets the age property using the setter
  console.log(data._age);
  
  data.age = 150; // Attempts to set an invalid age (will be rejected by the setter)
  console.log(data._age);
















// ES6

/*
1) Arrow function
2) Templete literals (`${}`)
3) Spread Operators 
4) let , const
5) destructuring
6) modules
 */

// Modules


/*
1) CJS - Common Js
2) ESM - E.S. Modules
3) AMD - Asynchronous Module definition
4) UMD - universal module definition
 */

//1) CJS common js