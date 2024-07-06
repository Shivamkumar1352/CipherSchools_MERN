var x =15;
console.log(x);
{
    let x = 5;
    console.log(x);
}
console.log(x);
{
    const y = 6;
    console.log(y);
    // y=7; error
    console.log(y);
}

// function

var a = function(b,c){
    return b+c;
}
console.log(a(4,3));

// arrow function

const d = (b,c)=>{
    return b*c;
}
console.log(d(2,3));

//spread operator ...

const q1 = ["jan", "feb", "mar"]
const q2 = ["apr", "may", "jun"]
const q3 = ["jul", "aug", "sep"]
const q4 = ["oct", "nov", "dec"]
const year = [...q1, ...q2, ...q3, ...q4]
console.log(year)

const myNum = [10, -20, 5, 4,]
let maxValue = Math.max(...myNum)
console.log(maxValue)

//for loop

const num = [10, 20, 30, 40]
let sum = 0;
for(let n of num){
    sum = sum + n;
}
console.log(sum)

const name = "shivam";
let text = "";
for(let ch of name){
    text += ch + " ";
}
console.log(text)

//js map

const  fruits = new Map([["apple", 100], ["banana", 200], ["orange", 300], ["mango", 400]]);
console.log(fruits)
console.log(fruits.get("mango"))

//sets

const letters = new Set();
letters.add("s");
letters.add("h");
letters.add("i");
letters.add("v");
letters.add("a");
letters.add("m");
letters.add("s");
letters.add("h");
console.log(letters);

// class 

class Car{
    constructor(name, mfgYear){
        this.name = name;
        this.mfgYear = mfgYear;
    }
}
const myCar1 = new Car("toyota", 2019);
const myCar2 = new Car("mercedes", 2022);
console.log(myCar1, myCar2);

//promise

const myFunction = ()=>{
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("This is inside Promise");
        resolve();
    }, 2000);
})
}
myFunction().then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.error("rejected");
});

//symbols

const Person = {
    fisrtName : "Shivam",
    lastName : "Kumar",
    age : 21,
    eyeColour : "Black",
}
let id = Symbol("id");
Person[id] = 140111;
console.log(Person);

//default parameter

const addTwoNumber = (a, b = 10)=>a+b;
console.log(21);

const addNumbers = (...args)=>{
let sum = 0;
for(let arg of args){
    sum = sum + arg;
}
return sum;
};

console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));