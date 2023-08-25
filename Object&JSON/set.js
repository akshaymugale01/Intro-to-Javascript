//Never duplicate values
// always unique values

var myset = new Set();
console.log(myset) // 0 Empty set

myset.add('akshay')
myset.add('ajay')
myset.add('akshay')
myset.add('vaishnavi')

console.log(myset) // set wont repeat Akshay as in no 7 and no 9 line

// Anothe Way to add Set 
//Chaining

var mySet2 = new Set();

mySet2.add(1).add(2).add('Hello').add('World').add(true)
console.log(mySet2)

//size of the set

console.log(mySet2.size)
console.log(myset.size)

//iterate through array
//for..of use
for(let val of myset){  
    console.log(val)
}

//for..Each

myset.forEach((val2)=>{
    console.log(val2)

})

//yaha function karke kiya
var at = [11,22,34,55,79]

function display(item2){
    console.log(item2)
}
at.forEach(display)


//Convert set to Array

const ary = Array.from(at)
console.log(at)

//convert Array to set

var newArr = ['a','b','c','d']
const nyNew = new Set(newArr)
console.log(nyNew)


//01:55