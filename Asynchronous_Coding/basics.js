
//Asynchronous - executed out of order and callbacks that fired at unpredictable times

//avaScript single-threaded model-only perform one task at a time

//calling itself inside itself

/*

js engine process TOP-Bottom Approach
JavaScript engine processes it from the top of the file to the bottom, managing execution contexts and the call stack

Blocking function- lengthy function take much time to responce   

The following illustration simulates a blocking function using a huge loop
*/
/*
function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...'); 
//task('Call an API'); // take much time//
console.log('Done!');



//Callbacks in JavaScript
//functions that are passed as arguments to another function and are executed after the completion of that function


//Way to handle this asynchronous function
//callback function is provided to be executed once the operation is finished

// Function with a callback
function fetchDataFromServer(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      const data = {
        name: "John",
        age: 30
      };
      callback(data); // Execute the callback function with the fetched data
    }, 1000); // delay of 1 sec
  }
  
  // Callback function to handle the fetched data
  function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
  }
  
  // Call the function with the callback
  fetchDataFromServer(displayData);
  



//using callback function 

function task(message) {
    // emulate time consuming task
    let n = 100000000;
    while (n > 0) {
      n--;
    }
    console.log(message);
  }
  
  console.log('Start script...'); // 1st
  
  setTimeout(() => {
    task('Download a file.'); // after some time delay 3rd
  }, 1000);
  
  console.log('Done!'); //2nd

//afetr you set timeOut 0 
// it won't execute immediately

console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.'); // end bcoz setTimeout 0
}, 0);

console.log('Bye!');

// Output
//Hi!
//Bye!
//Execute immediately.
  


// Js setTimeout() and setInterval()

//JavaScript setTimeout() and setInterval() are two methods used for
// scheduling and executing functions asynchronously after a specified time interval

// syntax- setTimeout(function,delay)  1sec= 1000

function greet(){
    console.log('this will appear next."Helo, World"')
}

setTimeout(function(){
    console.log('This msg appear 3 Seconds');
    greet();
},3000)


//  Extra arguments to setTimeout()
// Syntax- settimeout(function,delay, arg1, arg2,....);

function sayHello(name,message){
    console.log(`Helli,${name}! ${message}`);
}

let name= 'Akshay'
let message = 'Make money like your phone no.'

setTimeout(sayHello,2000,name,message);


//setInterval()
//setInterval(function,interval);

//Display Time After 3 seconds
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    console.log(timeString);
  }
  
 // setInterval(displayTime, 3000); infinite loop after ever 3 seconds



 //JavaScript clearTimeout() and clearInterval()
//In JavaScript, clearTimeout() and clearInterval() are methods used
// to cancel scheduled function executions set by setTimeout() and setInterval()

//1)clearTimeout()

function sayHello() {
    console.log("Hello, World!");
  }
  
  //const timerId = setTimeout(sayHello, 1000); // Schedule sayHello function to run after 1000 milliseconds (1 second)
  
  // Now, if you want to cancel the execution of the sayHello function before it runs:
 // clearTimeout(timerId);


//2) clearInterval()

// It stops the repetitive invocation of the specified function at the specified intervals

let count = 0;

function displayCount() {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalID);
    console.log("Interval stopped.");
  }
}

let intervalID = setInterval(displayCount, 1000);
*/

//Live class

console.log('1');
console.log('2');
setTimeout(()=>{
  //consol.log('3') // here consol spelling wrong  give errror in o/p
})
console.log(4);

// asynchronous function basically delays output

// map , filter probabily not asynchronus but 'reduce' is asynchronous function

//setInterval()

function showTime(){

  let dateTime = new Date()
  let time = dateTime.toLocaleTimeString()  //show current time.
  console.log(time)
}

//showTime()  //infinite time will print out

//setInterval()
//setInterval(showTime, 1000) // afeter 1000 milsec print function showTime()
// if i wont pass any condn it'll print forever
/*
function displayyName(name){
  console.log('Hello'+name)
}

var counter = 0;
let id = setInterval(()=>{
  counter++
  if(counter === 4 ){
    stopDisplayTime() // new Function invoke if condition true;
    console.log("Stopped")
  }

  displayyName('Akshay') //209 caling function inside setInterval()
},2000)

function stopDisplayTime(){
  clearInterval(id) // id= setInterval() - 214 stop at certain point it stop loop
}

*/
// with setTimeout()

function sayHello(){
  console.log('Hello')
}

setTimeout(sayHello, 5000) // print after 5 sec

//clearInterval() it wont print

const timerId = setTimeout(sayHello, 1000)
console.log(timerId)



/*
IMP - 1) Heap
      2) Call Back
      3) Web Api
      4) Callback queue
      5) Event Loop
*/      