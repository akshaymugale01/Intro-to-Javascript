// Advanced Function:-
// Assign function to variable

//Function Expression
var test = function(){ // here function is anonymeous function
    console.log("Hello")
}

test() // Hello

const add = function(a,b){
    return a+b;
}

const result = add(33,7) //40
console.log(result);

//Arrow Function  ()=>{...}

//eg.
var test = function(){
    console.log("Arrow")
}
test()
var test1 = ()=>{ // Here Arrow used
    console.log("Arrow Used");
}
test1()

//Self Invoking function "(function(){})()";
let selfFun= (function test2(){
    console.log("Self Invoking Function");
})();

//eg2
const result1 = (function(a,b){
    return a+b; // Here :- console.log(a+b) it'll Auto Invoke
})(3,5);
console.log(result1);

/*
1) function test(){

}

2) var test = function(){

}

3) var test = () => {

}

// Arrow function have 3 Types
3-a) Zero Parameter
var test = () => {

}

b) One parameter
var test = parameterOne => {

}

c) Two or More Parameter
var test = (ParaOne, ParaTwo) => {

};

*/

//Single Line block
const sum1 = num => num + num;
console.log(sum1(5));

//Multiline Block
const sum2 = numm => {
    const sum = numm+numm;
    return sum;
}
console.log(sum2(6))

//Generator Function

function* generatorfun(){
    console.log("Line 1")
    yield 50;

    console.log("Line 2")
    yield 100;
}

const genF= generatorfun()

console.log(genF.next())
console.log(genF.next())

function* numGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

const numbers = numGenerator()

for (let number of numbers){
    console.log(number)
}


//Recursive Function

function ff(n){
    if (n === 0) return 1;
    return n* ff(n-1)
}

console.log(ff(4));


//LIFO last in first out

function* display(){
    console.log('hello1')
    yield 100;

    console.log('hello2')
    yield 200;
}

const Genfun = display()
console.log(Genfun.next());
console.log(Genfun.next());

let name = 'Akshay@Jotiran@Mugale'
let arr = name.split("@");
console.log(arr) // In Array Form


var  a1 = "Nothing Phone 2"
var  a2 = "OnePlus Nord 3"
var  price1 = 30000
var  price2 = 34000
//Here using ${}
console.log(`The Price of ${a1} is ${price1} and Price of ${a2} is ${price2}`);


//Helper Function

function A(x,y){
    return 2*B(x,y)
}

function B(n1,n2){
    return n1+n2;
}

console.log(A(5,6))