// Javascript Object Notation(JSON)
// JSON keys always is " " - in string fromat
//JSON cant have functions *****
//converting js object to json format strings

// Normal Object Created
let jsObj = {
    name : 'Akshay',
    age : 23,
    Add : 'India',
    Loc : function(){
        console.log("I Lives In MH Dharashiv-Dist, Umerga,413606")
    }
}

// Json Object
let person ={
    "name" : "akshay",
     "age" : 23,
    "work" : "Full-Stack Developer"
}
console.log(person); // here output will show!

//conver js to JSON
const JSONobj = JSON.stringify(jsObj);
console.log(JSONobj)

//convert JSON to js(javascript)
let javaS = JSON.parse(JSONobj)
console.log(javaS);



