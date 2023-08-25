//callStack is LIFO(Last in first out!)



console.log(x);

var c = 'akshya@almabetter.com'
var arr = c.split('@')
console.log(arr)
var a1= "iphone"
var a2= "laptop"
var price1 = '1200'
var price2 = '2200'

console.log(`the price of ${a1} and  ${a2} is ${price1} and ${price2}`);
var xx = 'Akshay'
var varr = xx.toUpperCase()
console.log(varr);


//HELPER function/ MOdular and 

function display(x,y){
    return 2* add(x,y);
}

// here add is helper function 
function add(a,b){
    return a+b;
}

console.log(display(5,6));



// Recursion Function- calling a function inside itself
// syntax- function a(){ a() }; a();

/*
var num =10
function decrement(n){
    console.log(10)
    decrement(n-1)
}

decrement(); // infinite loops it executes

*/

var num1 =10
function decrementNums(n){
    //Base condition
    if(n <= -2){
        return;
}else {
    // these condn for infinite loops
    console.log(n);
    decrementNums(n-1)
      }
}

decrementNums(num1)


function add(x,y){
    return x+y
}

function mult(x,y){
    return x*y
}

function div(x,y){
    return x/y
}

let output1 = add(6,7)
let op2 = mult(output1, 5);
let op3 = div(op2, 2)

console.log(output1);