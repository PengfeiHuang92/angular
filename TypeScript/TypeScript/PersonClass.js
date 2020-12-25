"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//by adding export in front of the Person Class. make Person class visiable outside of this class
var Person = /** @class */ (function () {
    /**
    private name : string; //by using private, name attriable can only can be accessed within this class
    private age : number;

    constructor(name?: string, age?: number){  //the question mark makes name and age optional
        this.name = name;
        this.age = age;
    }
    */
    //All above can be rewrite as
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Person.prototype.information = function () {
        console.log("Hi,my name is " + this._name + ", I'm " + this._age + " years old.");
    };
    Object.defineProperty(Person.prototype, "name", {
        //defined those getter and setter as properties.     
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value <= 0)
                throw new Error("age cannot be less than 0.");
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
