//by adding export in front of the Person Class. make Person class visiable outside of this class
export class Person{  //PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized
   
    /** 
    private name : string; //by using private, name attriable can only can be accessed within this class
    private age : number;

    constructor(name?: string, age?: number){  //the question mark makes name and age optional
        this.name = name;
        this.age = age;    
    }
    */
    //All above can be rewrite as
    constructor(private _name?: string, private _age?: number){}
    
    information(){
        console.log("Hi,my name is " + this._name + ", I'm " + this._age +" years old.");
    }   

    //defined those getter and setter as properties.     
    get name(){
        return this._name;
    }
    set name(value: string){
        this._name = value;
    }
    get age(){
        return this._age;
    }
    set age(value: number){
        if(value <= 0)
            throw new Error("age cannot be less than 0.");
        this._age = value;
    }
}
