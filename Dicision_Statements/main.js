// If Statements is if true or false
let age = 16
if(age>18){
    console.log('You Can vote!')
} else if (age == 18) {
    console.log("You are invited!")
}else {
    console.log('your not invited!')
}


//Nested If
let num= 10
if(num>0){
    console.log("positive No")

    if(num % 2 === 0 ){
        console.log("Number is Even")
    }else {
        console.log("Odd No")
    }
}else {
    console.log("Negative No")
}


// Switch Cases
// In switch case condition not works

let age2 = 52

switch(age2){
    case 19:
        console.log('aplly for card')
        break;
    case 20:
        console.log("You can vote")
        break;
    case 23: 
         console.log("Vote Now!")
         break;
    default:
        console.log("You can't vote")
        break;     
}
