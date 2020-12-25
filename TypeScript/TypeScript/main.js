"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonClass_1 = require("./PersonClass");
function log(message) {
    console.log(message);
}
var message = "hello World";
log(message);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var background = Color.Red; //calling a enum 
//PersonClass
var Josh = new PersonClass_1.Person("Josh", 25);
//Josh.name = 'Tim';  //error since the name field is private
Josh.information();
var Katty = new PersonClass_1.Person();
Katty.name = 'Katty'; //calling the setter by using the name proporty looks like a field in code but it is a method.
Katty.age = 24;
console.log("I am " + Katty.name); //calling the getter
// Avoiding ' error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.'
// to run this typescript with  'tsc -t es5 PersonClass.ts'
