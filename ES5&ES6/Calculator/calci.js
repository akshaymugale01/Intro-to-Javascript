/*

function add(x,y){
    return x+y

}

function mul(x,y){
    return x*y

}

function sub(x,y) {
    return x-y
}

function div(x,y){
 return x/y   
}


console.log(add(5,6))
console.log(sub(5,6))
console.log(mul(5,6))
console.log(div(5,6))
// Export these  using 

module.exports = {add, sub, mul, div}

*/

// For Es6

// Connect using - npm -y init in terminal
// This will create package.json file in that file after main line no 5 
// "type" : "module" enter.


function add(x,y){
    return x+y

}

function mul(x,y){
    return x*y

}

function sub(x,y) {
    return x-y
}

function div(x,y){
 return x/y   
}

export {add, mul, div, sub}