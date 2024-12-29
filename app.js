// ================ Classes and Objects 

let student = {
    fullName : "Tom Henry",
    age : 25,
    skillSet : "Front-end-developer",
    printSkill: function ()  {
        console.log(`Skills = ${this.skillSet}`)
    },
}; 

// this.skillSet => here (this.) means students. (this.) applies to object.


const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
}


const fin = {
    salary: 50000,
};


const Tim = {
    salary: 80000,
    calcTax(){
        console.log("Tax rate is 20%");
        
    }
};

fin.__proto__ = employee;


Tim.__proto__ = employee;




//===========  Class

class toyotaCar  {
    constructor(brand, mileage){
        console.log(`${brand} was created`);
        this.brand = brand;
        this.mileage = mileage;
    }


    start(){
        console.log("start");
        
    }

    stop(){
        console.log("stop");
        
    }


//    WE can log this during intialization through constructor
//     setBrand(brand){
//         this.brandName = brand;
//     }

//     setModel(model){
//         this.modelNum = model;
//     }
 }

let fortuner = new toyotaCar("fortuner", 10);
console.log(fortuner);

// fortuner.setBrand("fortuner");

// fortuner.setModel(123);

let lexus = new toyotaCar("lexus", 12);
console.log(lexus);

// lexus.setBrand("Lexus");

// lexus.setModel("S");


// ============= Inheritance


class Person {
    constructor(name){
        this.species = "homo sapiens";
    
    }

    eat(){
        console.log("eat");
        
    }

    sleep() {
        console.log("sleep");
        
    }

    //When child and parent have same method then child's method overlaps the parent's method.
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person {
    //During inheritance when we want to add constructor in child object, We shall use SUPER keyword

    constructor(name){
        console.log("hello");
        super(name);
       this.name = name;
    }
    
    //Here child's method work has overlapper the parent;s method work 
    work(){
        super.eat();
        console.log("Build Something");
        
    }
}

let me = new Engineer("me");






//Practice Questions
 
let DATA = "secret information";

class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }    

    viewData(){
        console.log("Data = ", DATA); 
    }
}

class Admin extends User{
    constructor(name, email){
        super(name ,email);
    }

    editData(){
        DATA = "Some new Value";
    }
}

let student1 = new User("me", "abc@gmail.com");
let student2 = new User("You", "you@gmail.com");

let teacher = new User("mam", "mam@gmail.com");

let admin = new Admin("admin","admin@gmail.com");




//=============== Error Handling
//======== try-catch

let a = 5;
let b = 4;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
// console.log(`a + b = ${a + c}`); //Here we got error and because of it the rest of the code below won't be executed. So we use error handling here.
try{
    console.log(`a + b = ${a + c}`); 
}catch(err){     //err is an object. We use err to define error.
    console.log(err);
    
}


console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);





