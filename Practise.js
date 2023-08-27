const prompt = require("prompt-sync")();

// use = +prompt for positive numbers only

/*
1).
 Help Sarah by writing a JavaScript function named capitalizeWords that takes 
  a string as input and return a new string with the first letter of each word capitalized. 
  The function should use the split method to split the string into an array of words and then 
  capitalize the first letter of each word using the toUpperCase method. 
  Finally, the capitalized words should be joined back together into a single string using the join method
*/

// 2 or More Words.....
//let inputWords = prompt("Enter word to get CapitalL: ");

function capitalWords(inputWords){
    let words = inputWords.split(" ")
    let capitalLetter= words.map(function(word){     // Arrow function - word.map(word=>{
                                                //return word.charAt(0).toupperCase() + word.slice()
                                                //});
        return word.toUpperCase().charAt(0) + word.slice(1);
    })
    return capitalLetter.join(" "); // If we console here then dont need to call agian in downside....
}

//console.log(capitalWords(inputWords));



/* 
2)
Area of Triangle
Easy
Mary is a geometry teacher who wants to create a web application that calculates the area of a triangle.
She needs to write a JavaScript function to achieve this. 
How can she write a function to find the area of a triangle?

*/

// For 3 side area of triangle
// Formula : area = square_root_of (s*(s-a)*(s-b)*(s-c));  // HERON"S Formula
// For finding s = sub-Primitive = (a+b+c)/2;

//let a = +prompt("Side A:")
//let b = +prompt("Side B:")
//let c = +prompt("Side C:")

function areaOf(a,b,c){
    const s = (a+b+c)/2; 

    // Now , Area of triangle 
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c)); // here function Math.sqrt is square root of(....);

    return area;
}

//console.log(areaOf(a,b,c));



/*
3)
“Py” before String
How can you create a JavaScript program to modify a given string by adding "Py" in front of it, 
while returning the original string without modification if it already starts with "Py"?
*/

//let str = prompt("Enter Name want to start with Py : ")

function addPy(str){
    if(str.substring(0,2) === 'Py'){
        return str;
    }else {
        return "Py" + str;
    }
}

//console.log(addPy(str));

/* 
4)
Copies of String
Easy
A young programmer named Alice wanted to create a program that would make her work easier. 
She often had to repeat the same string multiple times in her code, which was tedious and time-consuming. 
Can you help Alice by writing a JavaScript program that takes in a string and a positive number,
 and returns a new string consisting of the original string repeated the specified number of times?
*/

let str1 = "Akshay"
let multiple = 2
function copiesOfStr(str1,multiple){
    if(multiple<=0){
        return false;
    }else{
        return str1.repeat(multiple);
    }
}

//console.log(copiesOfStr(str1,multiple))

/*
5)
Point inside the circle
Medium
A group of friends went on a picnic to a park where they found a circular fountain with 
a statue in the center. They were curious to find out if a small toy boat they had would fit inside the
 fountain. Write a JavaScript program to help them determine if the boat, represented by a point, lies 
 strictly inside the circle formed by the fountain.

Can you write a JavaScript program to check whether a given point lies strictly inside a given circle?
*/

//The formula (a-x)*(a-x)+(b-y)*(b-y) is used to calculate the distance between
// two points in a two-dimensional plane. 
//Here, (a,b) and (x,y) are the coordinates of two points.

let a = 2
let b = 2
let x = 3
let y = 3
let r = 4

function checkPoints(a,b,x,y,r){
    let distance = (a-x)^2 + (b-y)^2
    r *= r // r = r*r
    //condition check for lies in betn or not?
    if(distance < r){
        return true;
    }else {
        return false;
    }
}

//console.log(checkPoints(a,b,x,y,r));


/* 
6)
XOR of two numbers
Easy
XOR of two numbers is a bitwise operator that returns 1 if the corresponding bits of its operands
 are different, and 0 if they are the same. For example, the XOR of 5 (in binary 101) and 3 
 (in binary 011) is 6 (in binary 110), because the first and third bits are different in the operands.

Once upon a time, there was a problem where we had to find the XOR of two integers without using 
the XOR operator. This was a tricky problem because XOR is a commonly used operator for finding the 
XOR of two integers.However, we had to find a solution without using it.
*/

// ^ XOR operand

let x1 = 1 ; 
let y1 = 2

function myXOR(x1, y1)
{
  // Your code goes here
  let result = x1^y1;
   console.log(result);
}

myXOR(x1,y1);


//7) Temperature Conversion (C → F)
//Easy
//As a budding chef, Tom was determined to master the art of baking. 
//However, he often found himself confused about the appropriate temperature conversions for his recipes.
// Can you help Tom write 
//a JavaScript program to convert temperatures from Celsius to Fahrenheit and vice versa?

// fahrenheit formula f=(c*9/5)+32

function celciusTofahrenheit(celcius){
    let F = (C*9/5)+32
    return F;
}

let C = 25
//console.log(celciusTofahrenheit(C))

// Vice versa F-C

function fahrenheitTocelcius(f){
    let C = (5/9)*(F-32)
    return C;
}

let F= 90
//console.log(fahrenheitTocelcius(F))

/*
9)Second Most Important Person
Hard
There were three friends named A, B, and C. 
They were all very competitive and loved to compete with each other in everything they did.
One day, they decided to find out who among them was the second most important person in their group.
 They knew that the first most important person was whoever won their competitions, 
 but they were unsure who would be the second most important.
To determine this, they came up with a game. They each had to pick a number, and the person who chose 
the second largest number would be declared the second most important person in the group. Write a program to find 
the second largest number in a, b, c to find the second most important among A, B, C.

*/

function secondImp(a,b,c){
    if((a>b && a<c)||(a>c && a<b)){
        return a;
    } else if ((b>a && b<c)||(b>c && b<a)){
        return b;
    } else if ((c>a && c<b)|| (c>b && C<a)){
        return C;
    }else {
        return 0;
    }
}

let a1 = 15
let b1 = 20
let c1 = 10

//console.log(secondImp(a1,b1,c1))


/*
10)
String Shifting Shenanigans
Rahul wants to find out whether there exists a string S such that both L(V)=S and R(V)=S holds.
Write a programs that outputs “YES” if such a string exists otherwise “NO”

*/
// substr() - length of parameter 
// substring() - start and end point

function lshift(string){
    return string.substr(1) + string.charAt(0) // substr- abc=bc+a = bca
}

console.log(lshift('abc'))

function rShift(s) {
    return s.charAt(s.length-1) + s.substr(0, s.length-1); // charAt(-1) abc= c+ sunstr(0,s.length-1) total length= 3 length-1 = 2 ab== c+ab= cab/
}

console.log(rShift('abc'))