// For loops
/* syntax -   for(intialize; condition; increment/decrement){
    //code 
}  

var x = [1,2,3,45]
for(let i=0; i<=x.length; i++){
    console.log(i);
}

// display 5 times
for(let i=0 ; i<=5; i++){
    console.log("Akshay")
}
// display 1to 5 
for(let i=1 ; i>=-2; i--){
    console.log(i)
}

*/

const PromptSync = require("prompt-sync");

// fo..in loop
// syntax - for(let variable in object)
let person = {
    name : 'Akshay',
    age : 23 ,
    dob : '11/12/2000'
};


for(let x in person ){
    //console.log(`${key} : ${person[key]}`)
    //showing name only
    console.log(person.name);
}


// for...of Loop
// syntax - for(let variable of iterable){ code  }

let ak ={
    name : 'akshay',
    age : 23,
    year : 2000
};

for(let all in ak){
    console.log(ak.name);
}

// Diff betn for..in/ for..of (https://grow.almabetter.com/web-dev/learn/full-stack-web-development/bootcamp-wd-m1-c1-l2/Read#43e69c1b6ea84ae4837b4c38bbdcaeb6)



// while loop - for repeated loops until false to ternimnate 

// syntax -while(){ code}


//to display no 1 to 5

let i = 1;
while(i<=5){
    console.log(i)
    i++;
}


//sum of positive numbers

const a =[1,-12,-22,22,1,5,-5,-3,3]

// creat variable to store sum 
let sum = 0;

//index variable to while loop
let ii=0;

// Using a while loop, iterate through the array and add any positive numbers to the sum
while(ii<a.length){
    if(a[ii]>0){
        sum += a[ii];
    }
    ii++;
}

console.log( `positive sum is : ${sum}`);


// do..while  - false treminate
// do { // loop body } while (condition);

//display no 1 to 10

let s = 1;
do{
    console.log(s);
    s++;
} while(s<=10);



// Break statement 

/*1) for loop
/ syntax -   for(init; condition; update){
    // code
    if(condition to break ){

    }
    //code
}
*/

for(let i =2; i<=20; i++){
    if(i === 19 ){
        break;
    }
    console.log(i)
}


/* 2) 
/ syntax - while(condition){
    //code      
    if(condition to break){
        break;
    }
    // code
}

*/

let j= 1;

while(j<=11){
    if(j == 10){
        break;
    }
    console.log(j);
    j++;
}




// CONTINUE statement = bypass the current iteration and proceed to subsequet iteration of the loop

for (var k=1; k<=9; k++){
    //skip iteration if even
    if(k % 3 !== 0){
        continue; // here it is used
    }
    console.log('Iteration:' +k);
}

console.log("Exited loop");

//2)

for (let n=0 ; n<=20; n++){
    // skip iteration if i == 6
    if(n === 6){
        continue;
    }
    console.log(n);
}

console.log("Loop exited");




// Projects

/* The Grade Distributor
Easy
In a kingdom where knowledge was highly cherished, the wise scholars developed a system to grade students based on their academic performance. They assigned letter grades "A", "B", "C", "D", and "F" to represent different levels of achievement.

The kingdom needed a function that would analyze a set of numerical scores and distribute the corresponding letter grades to each student. They sought a skilled JavaScript sorcerer to create the distributeGrades function.

The distributeGrades function would take an array of numerical scores as input and return an object containing the count of grades distributed as "A", "B", "C", "D", and "F", respectively, based on the following scale:

Scores from 90 to 100 would receive an "A". Scores from 80 to 89 would receive a "B". Scores from 70 to 79 would receive a "C". Scores from 60 to 69 would receive a "D". Scores below 60 would receive an "F". Eager to leave a mark on the kingdom's education system, the JavaScript sorcerer accepted the challenge. Utilizing decision statements, the sorcerer worked tirelessly to craft a solution that would efficiently distribute the grades and empower the kingdom's educators with valuable insights.

Could you lend your coding expertise to assist the JavaScript sorcerer in completing the distributeGrades function and bestow the gift of knowledge upon the kingdom's students?

*/

// conditions if score>=90 -A, score>=80-B, score>=70-C, score>=60-D else F
/*  here is problem ******
const prompt  = require('prompt-sync')();

let scores = +prompt("Enter Your Score:");

function distributGrades(scores){
const gradeCount = {A:0, B:0, C:0, D:0, F:0}


for (let score of scores){
    if(score>=90){
        gradeCount.A++;
    }else if(score>=80){
        gradeCount.B++;
    }else if(score >=70){
        gradeCount.C++;
    }else if(score>=60){
        gradeCount.D++;
    }else{
        gradeCount.F++;
    }
    return gradeCount;
}

}

console.log(distributGrades(scores));
*/

// simple calculator Project
const prompt = require('prompt-sync')();

let num1 = +prompt("Enter first value:")
let num2 = +prompt("Enter Second Value:")
let operator = prompt("Enter operator:")

function simpleCalculator(num1, num2, operator){
    switch(operator){
        case '+' :
            return num1+num2;
        case "-" :
            return num1-num2;
        case "*" :
            return num1*num2;
        case '/' :
            if(num2 ===0){
                return " devided by 0 :0"
            }else {
                return num1/num2
            }
        break;
        default : return "Not a valid Operator!"    
    }
}

console.log(simpleCalculator(num1, num2, operator));