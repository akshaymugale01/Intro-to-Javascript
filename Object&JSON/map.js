//01:55
// Alternative of Object
// It dosent store Duplicate Values
// More Efficient

const myMap = new Map()
//Adding Elements 
myMap.set('name', 'Akshay')
myMap.set('name', 'Ajay')
myMap.set('age', 23)

console.log(myMap);
console.log(myMap.size);

//delete method
//myMap.delete('name')
console.log(myMap)
// get
console.log(myMap.get('name'));

//clear
myMap.clear()
console.log(myMap)


//New Map


const myMap2 = new Map()
//Adding Elements 
myMap2.set('name', 'Akshay')
myMap2.set('Surname', 'Mugale')
myMap2.set('age', 23)
myMap2.set('Add', 'India')

console.log(myMap2)

// has - boolean

console.log(myMap2.has('Surname'))

//get method
console.log(myMap2.get('age'))

//iterate to.....

//for...of
for(let keys of myMap2){ // fro of Give keys + values
    console.log(keys)
}

//
console.log('"FOREACH Here:"')
//forEach

myMap2.forEach((item)=> {  //GIve Each every Values of keys
    console.log(item)
})

// keys value
myMap2.forEach((key, value)=>{
    console.log(value,key)
})