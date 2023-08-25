// Javascript Object Notation
// JSON keys always is " " - in string fromat
//JSON cant have functions *****
//converting js object to json format strings

let jsObj = {
    name : 'Akshay',
    age : 23,
    Add : 'India',
    Loc : function(){
        console.log("I Lives In MH Dharashiv-Dist, Umerga,413606")
    }
}

//conver js to JSON
const JSONobj = JSON.stringify(jsObj);
console.log(JSONobj)

//convert JSON to js
let javaS = JSON.parse(JSONobj)
console.log(javaS);



