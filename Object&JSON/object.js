
/*
car.mileage = '45/litr'
car['basePrice']= '30L'

delete car['mileage'];
console.log(car);
car['basePrice']= '25L';
console.log(car['basePrice'])

*/


    const jsObj = {
        name : 'Akshay',
        surName: 'Mugale',
        age : 23,
        salary : '16LPA'
    }

    console.log(jsObj);

    console.log(`${jsObj.name} ${jsObj.surName} at age of ${jsObj.age}. He earns ${jsObj.salary}.`)
    console.log(jsObj.salary)
    //or//
    console.log(jsObj['salary'])


    //Oobject cunstroctor

    var jsObj2 = new Object();

    jsObj2.NAME = 'Ajay'
    jsObj2.Age = '25'
    jsObj2.add = 'Nuremberg,Germany'
    jsObj2.salary = '60LPA'

    console.log(jsObj2);

    //Nested Object

    let nameObj = {
        name : "Vaishnavi",
        salary : "25LPA",
        add :  {  // Nested Object
            state : 'MH',
            city : 'Pune',
            pin: '000000'
        }
    }

    console.log(nameObj.add.city); //Pune
// Or
    console.log(nameObj['add']['pin']);

// for...in
    for(addr in nameObj.add){ // here addr new  
        if(addr === 'pin'){ // i wont write this show everything
            console.log(`pin: `+ nameObj.add[addr])
        }
   }    

   delete nameObj.add.pin
   console.log(nameObj)

   //Object.keys Object.values Object.entries

   var allKeys = Object.keys(nameObj)
   console.log(allKeys)
//values
   var allValues = Object.values(nameObj.add)
   console.log(allValues)
//Entries
   var nn = Object.entries(nameObj)
   console.log(nn)

   // slice()

   var xp = 'MY NAME IS AKSHAY'
   let xxx=xp.slice(1,6)
   console.log(xxx)

   //array destructing
   let arr = [1,2,3,4,5,6]
   const [a,b,...c] = arr

   console.log(a)
   console.log(b)
   //console.log(d)
   console.log(c)
   //console.log(e)
   //console.log(arr)
  


   //Object destructuring

   let varr = {
    name: 'Akshay',
    add: 'omerga'
   }

   const {name , add} = varr //here destructuring is  =done through varr
   console.log(name)
   console.log(add)

   //splice
    var arr3= [1,2,3,4]
    arr3.splice(0,2) //deleting index and how many (i, how many)
    arr3.splice(1,0,33)
    console.log(arr3)



    //var ab = +prompt('Enter your no:');

    //console.log(ab)

    //Switch Case

    let a20 =2

    switch(a){
        case 1 :
            a2 = 'happy'
            break;

        case 2 :
                a20 = 'Sad'
                break;
        case 1 :
                a20 = '2'
                    break;
            default:
               a20 = 'Not found'
               break;                 
    }

    console.log(a20)

// Assignment
    let xy = 5
    let yx = '5'

    console.log(xy == yx) // Compare values

console.log(xy === yx) // compare with type of

//Object.assign

let fisrtObj = {
    name : 'akshay'
}
let secObj ={
    age : 23
}

let sameObj ={
    name : 'Ajay'
}
console.log(secObj, fisrtObj);
Object.assign(fisrtObj, secObj) // here Assigning 1st ob with sec
Object.assign(fisrtObj, sameObj) //here Write over firstObj
console.log(fisrtObj)


//object.freeze
'use strict';
let studetData ={
    name : 'Shivani',
    age : 24
}

console.log(studetData)
studetData.age = 23 //modified Age to 23
console.log(studetData)

//use Object.freeze

Object.freeze(studetData) // here we freezed data so it cant b changed of=r modified

studetData.age = 28
console.log(studetData)

//Custom Method

let akData ={
    name : 'akshay',
    age : 23,
    add : function(){
        console.log('My Name is Akshay and my age is 23')
    }
}

akData.add()
console.log(akData.add())





