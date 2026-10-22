// create array in javaScript

// string array 
const str=["apple","banana","mango","pnieapple","papaya"]
console.log("String array :",str);

// integer array 
const num=[1,2,3,4,5];
console.log("Integer array :",num);

// iterate over Array 

console.log(`String array :`);
for(let i=0;i<str.length;i++){
    console.log(`${i+1} : ${str[i]}`);
}

console.log(`Integer array :`);
for(let i=0;i<str.length;i++){
    console.log(`${i+1} : ${num[i]}`);
}

// using foreach on array 
str.forEach((char)=>{
    console.log(char.toUpperCase())
})

num.forEach((n)=>{
    console.log(n*2)
})

// Array function

const arr=[1,2,3,4,5,6,7,8,9]
// add Element in last 
arr.push(10)
console.log(arr);

// pop Element in last
arr.pop(9)
console.log(arr);

// check number of array 
console.log(arr.includes(3));

// find index of array 
console.log(arr.indexOf(4));

// convert other element into array 
const alpha="abcd";
const newarr=Array.from(alpha)
console.log(newarr);

// merge two array 
const myArr=[...str,...num]
console.log(myArr);

// by concate 
const concatArr=str.concat(num)
console.log(concatArr);

// join in array 
const newstr=str.join("-")
console.log("the string is :",newstr);











