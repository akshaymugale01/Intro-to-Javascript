//Regular expressions, often abbreviated as "regex" or "regexp," 
//are powerful patterns used to match and manipulate text in strings

/*  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
This is a type of Regular Expression for certain pattern matching
*/

// Sequeuence or combination of characters to search and Replace string using pattern matching

/*

'Airways'    // 'way' search for in if present then true output
'Freeway'
'Stayaway'


// Return = true, false
        or subdata of that searched string




 .// 3 Methods
 
 1) test() - search true/ false
 2) exep[] - div method - return 'Array' 
 3) RegEx[] - constructor method - Create 'search pattern'
 */


//1) imp**
// Search string

 const searchString = 'abcdefghijklmno'

 //Pattern
// const searchPattern = /egf/;

const searchPattern1 = new RegExp('efg')
const searchPattern2 = new RegExp(/efh/)
console.log(searchPattern1.test(searchString)) // pattern.test(string)

var result = searchPattern2.test(searchString);
console.log(result) //egh-false ~ efg true


//2)

const searchS = 'akshay'
const searchP = new RegExp(/^a....y$/) //.... as per no of characters

console.log(searchP.test(searchS))


const statement = 'My name is akshay mugaleis'
const result1= /is/.exec(statement) // It giev value and idex no at this vlaue is present
console.log(result1)



// String methods
/*
1. replace()
2. replaceAll()
3. match()
4. mathcAll()
*/

const str = 'Find me'
const pattern = new RegExp(/me/)
const removeSpace = new RegExp(/[\s,]+/); // remove spaces - quantifiers
console.log(str.search(pattern)) // index no
console.log(str.split(removeSpace));

console.log(str.replace(pattern, 'You')) // me with you as line no 70

//match
const naming = 'My Name is Akshay MUgaleFromKaKaK'
console.log(naming.match(/[A-Z]/g)) // All capital Letters from given sentences\

console.log(naming.match(/[a-z]/g)) // All small letters 

//match all

const aaa= 'Javascript1  akshay mugale  Javascript2'
const regex = /Javascript\d/g;

let resultA = aaa.matchAll(regex)

for (let r of resultA){
    console.log(r)
}


const bb= 'i love Javascript than Java'
const regexx = /Java[a-z]*/gi;

let rrr = bb.matchAll(regexx)
console.log(Array.from(rrr))

/*
or
 for (let i of rrr){
    console.log(i)
 }
*/

// * Means any combination
const hello = 'hEllo hello hello '
const result11 = hello.replace(/hello/, 'world') // where hello is present at once
const result44 = hello.replace(/hello/gi, 'world') // use of gi // all hello replace
const result22 = hello.replace(/hello/g, 'world') // use of g- // leave hello same and change all 
const result33 = hello.replace(/hello/i, 'world') // use of i- // All global

console.log(result11)
console.log(result22)
console.log(result33)
console.log(result44)


const fruits = 'Apple pears magoes apple strawbb'
const patrn1 = /apple/; // only where apple
const ptrn2 = /apple/gi; // g-global  where capital (i-case sensative)
const ptrn3 = /apple/i; // case sensative where capital letters  // replaceAll not work
const ptrn4 = /apple/g; // same as 122 line no
const replacement = 'grapes'


const rslt1 = fruits.replace(patrn1, replacement ) // Apple pears mangoes grapes strabb
const rslt2 = fruits.replaceAll(ptrn2, replacement)   //replace// grapes pears mangoes grapes strawbb
const rslt3 = fruits.replace(ptrn3, replacement)
const rslt4 = fruits.replaceAll(ptrn4, replacement)
console.log(rslt1)
console.log(rslt2)
console.log(rslt3)
console.log(rslt4)


 //i (Ignore case): The i flag makes the regex pattern case-insensitive.
 // It allows the pattern to match both uppercase and lowercase characters
const regeex = /hello/i;
console.log(regex.test("Hello")); // true
console.log(regex.test("HELLO")); // true


//g-g (Global search): The g flag enables global matching. It allows the regex pattern 
//to find all occurrences of a match in the input string, not just the first one 
const regeeex = /a/g;
console.log("abracadabra".match(regeeex)); //["a", "a", "a", "a"]

//m (Multiline matching): The m flag enables multiline matching. 
//It allows the regex pattern to match the start and end of each line in a multiline input string
const regeexx = /^start/m;
console.log("start\\nstart again".match(regeexx)); // ["start", "start"]

//s (Dot matches all): The s flag, also known 
//as the "single-line" flag, enables the dot (.) to match all characters, including newlines
const rregex = /hello.world/s;
console.log(rregex.test("hello\\nworld"));//true


// Quantifies
/*
1)* (Zero or More Quantifier): The * quantifier matches zero or more occurrences of the preceding character or group.
 It means that the character or group can appear any number of times, including not at all
 */

 const reg = /ab*c/;
console.log(reg.test("ac")); // true
console.log(reg.test("abc")); //true
console.log(reg.test("abbc")); //true
console.log(reg.test("abbbbc")); //true

/*
2) + (One or More Quantifier): The + quantifier matches one or more occurrences of the preceding character or group.
 It requires the character or group to appear at least once
*/

const re = /ab+c/;
console.log(re.test("ac")); //false
console.log(re.test("abc")); //true
console.log(re.test("abbc")); //true
console.log(re.test("abbbbc")); //true

/*
? (Zero or One Quantifier): The ? quantifier matches zero or one occurrence of 
the preceding character or group. It means the character or group is optional.
*/

const egex = /ab?c/;
console.log(egex.test("ac")); //true
console.log(egex.test("abc")) //true
console.log(egex.test("abbc")); //true
console.log(egex.test("abbbc")); //false

/*
{n} (Exact Quantifier): The {n} quantifier matches exactly "n" occurrences of the preceding character or group
*/
const gex = /ab{3}c/;
console.log(gex.test("abbbc")); //true
console.log(gex.test("abbc")); //false

/*
{n,} (At Least "n" Quantifier): The {n,} quantifier matches "n" or more occurrences of the preceding character or group
*/
const regx = /ab{2,}c/;
console.log(regx.test("abbc")); //true
console.log(regx.test("abbbc")); //true
console.log(regx.test("abc")); //false

/* 
{n,m} (Between "n" and "m" Quantifier): The {n,m} quantifier matches between "n" and "m" occurrences (inclusive) of the preceding character or group
*/
const rgex = /ab{2,4}c/;
console.log(rgex.test("abbc")); //true
console.log(rgex.test("abbbc")); //true
console.log(rgex.test("abbbbc")); //true
console.log(rgex.test("abbbbbc")); //false


/*
Bracket Epression
ex - const regex = /[A-Z]/
Notice that A-Z is inside the square brackets so this will search for all uppercase letters in the alphabet

.[a-z] matches a string that has all lowercase letters in the entire alphabet
.[A-Z] matches a string that has all the uppercase letters in the entire alphabet
.[abcd] matches a string that has a, b, c, d
.[a-d] exactly the same as the previous example so you can either specify each character or group them
.[a-gA-C0-7] matches string that has lowercase letters a-g, uppercase letters A-C, or numbers 0-7
.[^a-zA-Z] matches a string that DOES NOT have all lowercase or uppercase letters

Inside a character set, the ^ character means all the characters that are NOT in the a-z or A-Z
*/

/*
Boundry Assertion
^ = Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, 
/^A/ does not match the "A" in "an A", but does match the first "A" in "An A".

$=Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example,
 /t$/ does not match the "t" in "eater", but does match it in "eat"

\b=  Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space.
For Example:  /\bm/ matches the "m" in "moon".

\B =Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, 
  for example between two letters or between two spaces. For example, /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday".
*/



//BUG
// Debugg - make it error free

//Debugging JavaScript is the process of finding and resolving bugs in JavaScript code. The browser offers a number of tools to aid developers in the real-time debugging of JavaScript code

debugger; //Developers can halt the execution of a program at a specified point by adding a breakpoint to their code. This enables developers to traverse through 
  //the code line by line and inspect its present state.
// Break Point

function foo() {
  const x = 42;
  debugger; // Adds a breakpoint here
  console.log(x);
}

foo();  // output 42


/*
Watches: A watch feature enables programmers to keep track of a particular variable or expression's value in real time. 
This enables programmers to track changes in a variable's value and troubleshoot intricate expressions.

 - To add a watch, locate the file you wish to debug, select the "Sources" tab in the developer tools of the browser, and then right-click on
 the variable or expression you want to watch. Choose "Add to Watch" after that
*/
const x = 42;
const y = 7;
const z = x + y; // Add a watch for "z"
console.log(z); //49 

/**
Call Stack: A feature that shows the present state of the program, along with all the functions that have been called and their arguments, is called the call stack. 
This enables programmers to track the program's route during execution and locate the error
*/

function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  throw new Error('Uh oh!');
}
foo();

// Output
Uncaught Error: Uh oh!
