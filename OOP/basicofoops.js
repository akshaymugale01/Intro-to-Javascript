/*  OOP Basics:-

Object-oriented programming (OOP) treats everything as an object, 
and objects contain properties and methods that specify their behavior

advantages of OOP include enhanced readability and modularity, better maintenance and scalability, 
and better code organization and reuse.

//Note: JavaScript is not a class-based object-oriented language. 
But it still has ways of using object-oriented programming (OOP)

~An object is an entity that is unique and contains properties and methods
For instance, a "vehicle" is a real-world object with qualities like color, kind, model, horsepower, and the ability to drive

~In Object-Oriented Programming, an object's attributes are referred to as properties, and its operations are referred to as methods

~An object is a class's instance

~Whether it be a function, array, or string, practically every element in JavaScript is an object

*/
//ex
let person ={
    f_name : 'Akshay',
    l_name : "Mugale",
getPersonDetails : function(){
    return `the name of person is ${person.f_name} ${person.l_name}`
},

}
console.log(person.f_name);
console.log(person.getPersonDetails());


//ES Classes and instance(object)
/*
ECMAScript 2015 (ES6) that provides a more structured and convenient way 
to create and work with objects and prototypes in JavaScrip

ES Classes simplify the syntax for creating constructor functions, prototypes, and inheritance,
 making object-oriented programming (OOP) concepts more accessible and organized

*/

// Declare using class Keyword

/*

class ClassName {  //class: The keyword used to declare a class
    //ClassName: Replace this with the desired name of your clas
  constructor(// constructor parameters ) { 
    // constructor code  //constructor: A special method used to initialize object instances. 
    //It is called when you create a new object using the class
}

method1(/* parameters ) {
  // method1 code  //method1, method2, etc.: These are methods of the class. 
  //You can define any number of methods within the class.
}

method2(/* parameters ) {
  // method2 code
}

// ... more methods ...
}

*/

//ex;
/*
class person2{
    constructor(name, age,salary,mob_no,salary2,mob2){
        this.name = name,  // in class use = to asign 
        this.age = age,
        this.salary2 = salary2,
       this.mob_no = mob_no
       
    }

    //method
    pnameAge(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }

    salaryofAj(){
        console.log(`1)I'm Salaried with ${this.salary2} per month and my mob no is ${this.mob_no}`);
    }

}

// Give details;

let onlyIdentity1 = new person2('Akshay', 23, 80000, 707515);
onlyIdentity1.pnameAge();

let salaryOfak = new person2('Ajay', 25, 250200, 75000);
salaryOfak.pnameAge();
salaryOfak.salaryofAj();


*/
// this - current execution context;

class hotel{

    //create Constructor to initialize variable
    constructor(name, loc){
        this.name = name,
        this.loc = loc
    }

    //method
    displayHotelName(){
        console.log(`name of hotel in ${this.loc} is ${this.name}`);
    }

    kitchen(){
        console.log(`name of hotel ${this.name} has kitchen.`)
    }

}    // this whole is blue print

//create instance to allocate memory(place)

const puneHotel = new hotel('Pune Hotel', 'Pune');
const mumHotel = new hotel('Taj Hotel', 'Bombay');
const dharashivHotel = new hotel('Matoshri', 'dharashiv');

puneHotel.displayHotelName()
dharashivHotel.displayHotelName()
dharashivHotel.kitchen()   


//Inheritance Properties

// Parent child class 
//like father have 1Cr rs so it will get to son at age of 30 so son is chilnode of parent

class motel extends hotel {
    constructor(name, loc, floors){
    // this.name = name,
    // this.loc = loc,   // but this two already in hotel class so we dont need to write 
    super(name, loc)  // call as super(hotel parameters....)
    this.floors = floors 
 }
   //method
   show(){
    console.log(`${this.name} has ${this.floors} floors`)
   }
}

// Allocate memory

let m1 = new motel('Pune Hotel', 'pune', 5)
m1.show();
m1.kitchen()
m1.displayHotelName();




// Another way to create object using Prototype
// Prototype is predefined keyWord 

let arr = [1,2,3,4]
//whenever we press . it show all methods
arr.__proto__ // in browser
Array.prototype // this work in browser

// person blueprint
function Person(name, age, birthPlace){ // class nam ehsould capital
    this.name = name,
    this.age= age,
    this.birthPlace = birthPlace
} 

// method
Person.prototype.nationality = "Indian";
Person.prototype.getName = function() {
    return this.name + " " + this.birthPlace;
};

//Allocate memory 

let p1 = new Person('Akshay', 23, 'Omerga');
console.log(p1.getName()); 




// Prototypal Inheritance
// Parent Object
function Human(){
    this.name = "John"
}

Human.prototype.displayName = ()=>{
    return this.name
}

//child Object 

function Employee(){
    this.age = 25
}

Employee.prototype.getAge = ()=>{
    return this.age
}

// Employee child of Human 
Employee.prototype = new Human()

console.log(Employee.age)
console.log(Employee.name)


// Bind
const Personx = {
    firstName : "Akshay",
    lastName : 'Mugale',
    fullName : function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const Member ={
    firstName: "Ajay",
    lastName: "Mugale"
}

let memberFullname = Personx.fullName.bind(Member);

memberFullname()