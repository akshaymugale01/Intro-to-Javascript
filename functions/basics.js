//A function in JavaScript is a piece of reusable code that, when called or executed, completes a certain operation or computation


//Defining the Function

function sum(num1,num2){
    console.log(num1+num2)
}

sum(2,3) // 5

//custom method

var jsObj ={
    name : 'akshay',
    age : 23,
   // work: function(){
   //     console.log(`${name} has ${age}`)
    }
//}

//jsObj.work()



//Javascript function is set of/Block of code to perform certain task

//DRY - don't repeat yourself

//Reusable block of to perform specifit task

//(...,...) parameter function

function display(x=5, y=15){
    var c = x+y
    console.log(c)
}
display(55,88);

function greet(name){
    return `hello, ${name}!`; // here name is not assigned
}

var greetings = greet("John") // calling from function
console.log(greetings)

function adNums(x,y){
    return x+y
}

var resultSum = adNums(3,5)
console.log(resultSum)


// Helper function :-

function double(x,y){
    return 2*addNums(x,y) // here addNums Is helper function
}

function addNums(n1,n2){ // using this function it helps double function
    return n1+n2
}

console.log(double(3,6)) //18

// Encapsulating - Hiding details

//Scope of Function - Global - Local


//TAX calculator

let myItems = [
    {  name : 'Iphone' , price: 2.5000  },
    { name : 'computer', price: 3.0000 },
    {name :'Tv' ,price : 4.0000}
  ]
//

 //let subtotal =0 // here GLOBAL SCOPE
function calculateTotal(x){  //call by reference "x" it dosent matter
    let subtotal = 0 // here global scope of calculateTotal (Outer Scope)
    for (let item of x){

        // let subtotal = 0 // here scopr is local it wont access outside
        subtotal = item.price
    }

    let tax = subtotal *0.1; // here it cant access subtotal 84line
    let total = subtotal + tax // here as scope is local 84line
    return total
}
var myTotal = calculateTotal(myItems) // here x cahnged to myItems which is myItems are assigned values

console.log(myTotal);

/* 
function test(x){                         var y =5
    console.log(x)                        test(y) - here call by reference happened
}                                         test(5) - here call by value happened
*/

// Here simple example

var x = "askhay" //global
function display(){
    var x = 'Ajay' // it overwrite over global as it near to local scope inside function
    console.log(x)
}
display();


//01:45 

