import {Person} from './PersonClass';

function log(message){
    console.log(message);
}

var message = "hello World";

log(message); 

enum Color {Red = 0, Green = 1, Blue = 2};  

let background = Color.Red;  //calling a enum 

//PersonClass
let Josh = new Person("Josh", 25);
//Josh.name = 'Tim';  //error since the name field is private
Josh.information();

let Katty = new Person();
Katty.name = 'Katty';  //calling the setter by using the name proporty looks like a field in code but it is a method.
Katty.age = 24; 
console.log("I am " + Katty.name);  //calling the getter

// Avoiding ' error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.'
// to run this typescript with  'tsc -t es5 PersonClass.ts'