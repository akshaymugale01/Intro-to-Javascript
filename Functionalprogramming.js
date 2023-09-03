// Functional Programming

//It is based on the mathematical concept of a function, 
//where a function takes input values and produces output values without side effects

//Pure Function-
// for same i/p its giving same output
function double(n){
    return 2*n;
}
console.log(double(5));

//Impure function 
// when there is external effect  which chnages output called impure function 
var x = 5
function double2(n,m){
    return 2*n*m*x
}
console.log(5,6.7)



//functions are first-class citizens, meaning they can be passed around as arguments to other functions,
// returned as values from functions, and stored in data structures

/*Here are some characteristics of the functional programming paradigm

1) Immutable : Value cant be altered after assignment
2) Pure Function : Always return same result as given to input
3) Recursion : function can call one another , enabling strong solution to some issue]
4) Expressio-Oriented : rather than using statements to construct programs, expresion are frequently used
5) Lazy evaluation : only compute values  when necesry to better use resources 

*/

// High Order function 
// a higher-order function is characterized by its ability to take
// one or more functions as arguments and/or return another function as its output
/*
function double(numbers){
    return numbers.map(function(n){
        return 2*n;
    })
}
*/

function add(x){
    return function(y){
        return x+y
    }
}

const addFive = add(5)
console.log(addFive(5))
/*

//Function composition
//a method in which the output of one function is passed on to the next, which is passed to another, 
//and so on until the last function is executed to provide the desired outcome

*/

const double22 = x => x*2
const square =x => x*x

//Tradition approach
var ouput1 = double(2);
var output = square(ouput1)
console.log(output)

//varient two
var output_final = square(double(2));
console.log(output_final);



//we can pass function to another function as argument

function functionReturner(fn){
    return fn;
}
function disply(name){
    return name;
}

console.log(disply("John"))
var displayName = functionReturner(disply)
console.log(displayName('Akshay'))





function abc(x){
    return x;
}

function display(name){
    return name
}

var xyz = abc(display)
console.log(xyz('Akshay Mugale'))

// fucntion can be passes into array 

function display22(name){
    return name
}

var displayNam = [1,22, display22]
console.log(displayNam[2] ('Johny depp'))

function diplayV(name){
    return name
}

const nameDisplay = display;
nameDisplay.message = 'Add New Word uisng . method'
nameDisplay.showName = function(){
    console.log('console msg')
}

console.log(nameDisplay.message)
nameDisplay.showName()

function test(){
    console.log('Hello')
}

console.log(typeof test)
test()

// we can add custom properties method later

function dName(name){
    return name
}

let jsObj = {
    name : 'John',
    testFunction : display
}

console.log(jsObj.testFunction("jsOBj"))

// Fisrt class citizen Bozx of:

/*
1) Can be passed as an argument to another function
2) can be assigned to another function 
3) can be passed to array 
4) can be passed to object 
5) can add custom method to properties

*/


//Higher order function

function a(x){
    return x
}

function pp(name){
    return name 
}

a(pp); // here a is HIGHER ORDER function and 
      //pp is LOWER Order Function / call back function
console.log(pp('Akshay'));

let ak = [1,2,3,4]

var newArrv= ak.map((item)=>{
    return 2* item
})
console.log(newArrv)



// Declarative - What is Done?
//Imparative - How is done?

//imperative appro;

var xx = [1,2,3]
var sum1 = 0;

for(var i =0; i<xx.length; i++){
    sum1 += xx[i]
}

console.log(sum1);

//Declarative ;

var sum2 = xx.reduce((arr, curr)=> {return arr + curr})
console.log(sum2);


//calculate area

const radius = [1,2,3,4]
/*

//1
const calculateArea = function(radius){
    const output = []
    for (let i=0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]) // PI* radius
    }

    return output
}

console.log(calculateArea(radius))

//2
const circleCircumference = (radius) => {
    const output = [];
    console.log('circumference of the circle are below');

    for (let i=0 ; i<radius.length; i++){
        output.push(Math.PI * radius[i]* 2)
    }
    return output;
} 

console.log(circleCircumference(radius))

//3
const circleDiameter = (radius) => {
    const output =[];
    console.log('diamter of circle are below');

    for(let i = 0; i<length.radius; i++){
    output.push(radius[i] *2)
    }
    return output;
}

console.log(circleDiameter(radius));

*/

// simple using arrow function ()=>{}

const area = (radius)=> {
    return Math.PI*radius*radius
}

const circumference = (radius) =>{
    return Math.PI * radius * 2;
}

const  diamter = (radius)=> {
    return 2* radius;
}

// here using common code;

const calculate = (radius, logic)=>{  // logic means area, circum, diameter
    const output =[]
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diamter));



function addition(x,y){
    return x+y
}

function division(x,y){
    return x/y;
}

function multiplication(x,y){
    return x*y;
}

let output1 = addition(10,10)
let output2 = multiplication(output1, 5)
let output3 = division(output2, 5)

console.log(output1); // 20
console.log(output2); // 20*5=100
console.log(output3); // 100/5=20



// Composition function:

var output4 = division(multiplication( addition(5,5),5),5) // 5+5=10, 10*5=50, 50/5=10;
console.log(output4);


/* Imp */ 
const compose = (g, f) => x => g(f(x)); // 1st f will applied the g will be aplied

const user = { name : 'Gadar 2', passcode: 1234}
const getUserName = (user) => user.name
const toUpper = (string) => string.toUpperCase()
const getusernameANDuppercase = compose(toUpper, getUserName)(user)

console.log(getusernameANDuppercase)


// Reduce Write
// when we have more than 2 function 

function compose2(...fns) {
    return function (x) {
        return fns.reduceRight(function (y, f) {
            return f(y);
        }, x);
    };
} 
function double212(x) {
    return x * 2;
}
function square2(x) {
    return x * x;
}

// function composition
var output_final = compose(square2, double212)(2);
console.log(output_final);

/*  Arrow function
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final); */


// Pipe 
//On the other hand, we can reverse the order of the function invocation by using the pipe function:
// Left to Right work

// function composition using pipe of any number of functions
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
const doubleto = x => x * 2
const squareof = x => x * x

// function pipe
var output_final = pipe(squareof, doubleto)(2);
console.log(output_final);



// Immutabality:

//const x1 = 26; as assignment to constnt value 
x1 = 27; 
console.log(x1)
const arr = [ 1,2,3,4,5]
arr[2]= 111111;

console.log(arr)
//how to provide immutablity to this arr , object

let sand = ['turkey', 'tuna', 'wadpav', 'pork'];

// create immutable copy 
let moreSand = Array.from(sand);

//Add few items to sand
sand[3] = 'MOnkey'

console.log(sand)
console.log(moreSand)

let sandswitches = ['tuna', 'elly', 'gelly', 'bubble', 'money'];
[a, ...b] = sandswitches;

console.log(a); // tuna only 1st 
console.log(b); // other 


const fruits = ['Oranges', 'Mangoes', 'Grapes']
const newAdd = [...fruits, 'banana'];  // adding without modifying fruits

console.log(newAdd)


// Using  spread operator
// Array.from


// Immutability over object
'use strict';

const obj = {
    name : 'akshay',
    age : 30
}

console.log(obj)

Object.freeze(obj)

obj.name = 'Ajay'
console.log(obj)

//reduceRight

const compose3 = (... functions) => x => functions.reduceRight((acc, fn) => fn(acc),x)

const users = {name: 'akshay', age: 23}

const getusersName = (users) => users.name ;
const upperCases = (string) => string.toUpperCase()
const firstTwo = (string) => string.substring(0,2)

console.log(compose3(firstTwo, upperCases, getusersName)(users))