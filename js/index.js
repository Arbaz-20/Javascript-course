// methods for console
console.log("Hello World");

//error for  console

console.error("error Occured");

//warning for console

console.warn("Warning occured");


//variables in Javascript var , let and const
var name = "Arbaz";

//let use for the reassign the values
let age = 20;
age = 35
console.log(age);

//const is for the constant values which wiil never get change

const SurName =  "Khan";

//SurName = "shaikh"

console.log(SurName);

// Premitive datatypes 

//String , boolean , Number , null , undefined , symbol(ES-6)
const fullname = 'arbazkhan';
const hugeage = 75;
const rating = 4.5;
const isOk = true;
const x = null;
const y = undefined;
let z;

// typeof which is to determine the type of a variable or Object
console.log(typeof name);
console.log(typeof age);
console.log(typeof x);

//String Concatinations
console.log("My name is : "+ name +' '+"and age is : " +age);

//Template String new Way
const hello = `My name is ${name} and i am ${age}`
console.log(hello);


//String properties and Methods
const size = "Hello world how are you!!!";
const tech = 'tech , computer , it , code';
console.log(size.length);
console.log(size.toUpperCase());
console.log(size.toLowerCase());
console.log(size.substring(0,5).toUpperCase());

//String split method
console.log(size.split(''));
console.log(tech.split(', '));

// Comments
// single line comments

/*MultiLine
Comments*/

//Arrays Methods
//Old Method
const number = new Array(1,2,3,4,5,6);
console.log(number);

//New Methods
const fruits = ['apple','grapes','orange','banana'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//add by index
fruits[4] = "bluberry";
console.log(fruits);

//add by method [push]
fruits.push('mangoes');

//add at the begining
fruits.unshift('stawberries');
console.log(fruits);

//to get the indexOf any fruits
const index = fruits.indexOf('bluberry');
const index1 = fruits.indexOf('mangoes');
const index3 = fruits.indexOf('orange');

console.log(index);
console.log(index1);
console.log(index3);


//Object Leterals
const Person = {
    firstName: 'John',
    LastName: 'Doe',
    age:40,
    hobbies:['music','movies','sports'],
    address :{
        city:'Boston',
        state:'MA',
        street:'50 main st'
    }
}
console.log(Person.firstName,Person.LastName,Person.address);
console.log(Person.hobbies[1]);
console.log(Person.address.city);

//Destructuring in ES-6
const {firstName , LastName , address:{ city }} = Person;
console.log(firstName);
console.log(LastName);
console.log(city);

//to add properties in object

Person.email = 'arbkhan2002@gmail.com';
console.log(Person);

const todos = [
    {
        id:1,
        text: 'take out trash',
        iscompleted:true
    },
    {
        id:2,
        text: 'Meeting with boss',
        iscompleted:true
    },
    {
        id:3,
        text: 'Dentist Appointment',
        iscompleted:false
    }
];

console.log(todos[0].text,todos[1].text);

//Json is very important Uses in FullStack Development
const json = JSON.stringify(todos);
console.log(json);

//Loops in Javascript
//for loop

for(let i = 0; i <= 10; i++){
    console.log(`for loop number: ${i}`);
}

let j = 0;

while(j < 10){
    console.log(`while loop number is : ${j}`);
    j++;
}

//loop through arrays
for(let k = 0; k < todos.length; k++){
    console.log(todos[k].text);
}

//new method for the looping through arrays
for(let todo of todos){
    console.log(todo.text);
}

//forEach loop , map , filter
//forEach
todos.forEach(function(todo){
    console.log(todo.text);
});

//map in javascript
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

//filter in javascript
const todoComplete = todos.filter(function(todo){
    return todo.iscompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoComplete);



//conditional operators
//if statement
let w = 10;
if(w === 10){
    console.log(`the number is : ${w}`);
}

//if and else statement
 let s = 12;
 let n = 6;
 if(s === n)
 {
     console.log(`s is ${s}`)
 }
 else
 {
     console.log(`s is not ${n}, however it is ${s}`)
 }

//conditional carries more operations

//And operator : &&
//OR operator : ||
//Not operator : !

//ternary operator

const r = 10;
const color = x < 10 ? 'red' :'blue';
console.log(color);

//Switch Case

switch(color){
    case 'red':
        console.log('color is red');
        break;
    
    case 'blue':
        console.log('color is blue');
        break;
    
    case 'green':
        console.log('color is green');
        break;

}

//functions

//Normal functions
function addnum(num1 , num2){
    sum = num1 + num2;
    console.log(`the addition of ${num1} and ${num2} is : ${sum}`);
}
addnum(147,152);


//Arrow Functions
const subtract = (number1 , number2) =>{
    sub = number1 - number2;
    console.log(`the subtraction of ${number1} and ${number2} is : ${sub}`);
}
subtract( 147 , 47 );

//Object Oriented Programming

//constructor function
function person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

//prototypes
person.prototype.getbirthyear = function(){
    return this.dob.getFullYear()
}

//prototypes
person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}

//Instantiate object
const person1 = new person('john','doe','20-may-2021');
const person2 = new person('arbaz','khan','06-may-2002');
const person3 = new person('imran','sayyed','18-dec-2003');
console.log(person1);
console.log(person2.getbirthyear());
console.log(person3.getbirthyear());
console.log(person2.getFullName());

//ProtoTypes
console.log(person1.getFullName())

//ES-6 classes 

class persons{
    constructor(firstname,lastname,dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getfullnames() {
        return `${this.firstname} ${this.lastname}`;
    }

    getbirthyears(){
        return this.dob.getFullYear();
    }
    
}

//Instantiate object for class Persons
const persons1 = new persons('arbaz','khan','06-may-2002');
const persons2 = new persons('imran','sayyed','18-dec-2003');

console.log(persons1.getfullnames());
console.log(persons2.getbirthyears());

//Javascript DOM(Document Object Model)