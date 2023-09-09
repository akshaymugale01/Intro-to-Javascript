/**
 Valid Phone Number
Write a function to check if a given string contains a valid phone number or not using Regular Expression in JavaScript. 
A valid phone number should have 10 digits and should start with either 7, 8 or 9. 
 */

 let phoneNumber = 7507295555
function validPhoneNum(phoneNumber){
    const regex = /^[7-9]\d{9}$/; //^-start, [7-9] in betn start 7,8,9;, \d digits total 9 , $ End
    return regex.test(phoneNumber);
}

console.log(validPhoneNum(phoneNumber))

/**
 2)Count Vowels
Write a function to count the number of vowels in a given string using Regular Expression in JavaScript.
 */

// vowels = aeiou

function countVowels(){
    const vovels = /[aeiou]/gi; // gi- global, i- case sensative 
    return (str.match(vovels)||[]).length
}

let str = 'Hello world';
console.log(countVowels(str))

/*
3) Digit Shuffle
Easy
Kaushal works at a company called MoEngage, and his boss has given him a task.
 She hands him a piece of paper with a positive integer N written on it and says,
  "I want you to determine if it is possible to rearrange the digits of N and obtain
   a multiple of 5.” For example, when N=108, we can rearrange its digits 
   to construct 180=36⋅5 which is a multiple of 5.

Write a program to help Kaushal find if a number can be rearranged to obtain a multiple of 5.
 */
1
function isMultipleof(number){
    const digit = number.toString().split(''); // convert n to string,split to numbers {n=50= '5','0'} 
    return digit.includes('5')||digit.includes('0');
   
}

let number= 251;
console.log(isMultipleof(number))


/*
4)Zeros’ Chaos
Easy
There was a magical array filled with random numbers. However, the array was plagued with
 zeros that were causing chaos and disorder. The wise wizard tasked with solving this problem,
 decided to push all the zeros to the end of the array, while keeping the order of all other elements the same.

The wizard knew that he had to be efficient in his solution, as the array was quite large.
 He needed to find a way to achieve this in linear time complexity, without using any extra space
*/

function pushZerosToEnd(arr) {
    n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i];

    while (count < n)
        arr[count++] = 0;
    return arr;
}

let arr = [1, 2, 0, 4, 3, 0, 5, 0]
console.log(pushZerosToEnd(arr))

/*
5)Valid Password
Hard
Write a function to validate if a given string is a valid password or not using 
Regular Expression in JavaScript. A valid password should have at least 8 characters, 
one uppercase letter, one lowercase letter, one number and one special character.
*/

// Define the regex for a valid password
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/;

// Define the function that takes a string as an argument and returns true or false
function isValidPassword(password) {
  // Test the password against the regex and return the result
  return passwordRegex.test(password);
}

let password = "akshay1A!"
console.log(isValidPassword(password));



// Thank you!