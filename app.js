// ================  Callbacks, Promises & Async Await

//=========setTimeOut falls under Asynchronous Programming
//===== It doesnot delay other functions but runs parallely and gives output after it's finished
// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
    
// }, 4000);

// console.log("three");
// console.log("four");



//============ Callbacks

// function sum(a, b){
//     console.log(a + b);
    
// }

// function calculator (a, b, sum){
//     sum(a,b);
// }

// calculator (2 ,3 ,sum);


// function setAlarm(time, callback){
//     console.log(`Alarm is set for ${time}`);
//     callback();
// }

// setAlarm("6:00 AM", function(){
//     console.log(`Wake up !`);
    
// })


//========== Callback Hell
 //=======Nested Callback 

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data = ",dataId );
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },3000)
   
    
// }





// getData(1, ()=>{
//     console.log(`getting data 2`);
//     getData(2,()=>{
//         console.log(`getting data 3`);
//         getData(3, ()=>{
//             console.log(`getting data 4`);
//             getData(4)
//         })
//     });
// });



//==== Using Promise in Callback hell 
//==== This is after learning promise chain(go below for it)

// function getData(dataId){
//    return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("data = ",dataId );
//         resolve("success");
//     },3000)
//    })
   
    
// }

// let p3 = getData(1);
// p3.then((res)=>{
//     console.log(res);
//     let p4 = getData(2);
//     p4.then((res)=>{
//         console.log(res);
        
//     })
// })

//==== better way
// getData(1).then((res)=>{
//     console.log("success");
//     getData(2).then((res)=>{
//         console.log("success");
        
//     })
// })

//====more better way/ real promise chain
// getData(1).then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3);
    
// }).then((res)=>{
//     console.log("success");
    
// })


//=========== Promise
// let promise = new Promise ((resolve, reject)=>{
//     console.log("I am a promise");
//     // resolve("success");
//     reject("Error in line 73");
// })



//  function getData(dataId, getNextData){
//     return  new Promise((resolve, result)=>{
//         setTimeout(()=>{
//             console.log("data = ",dataId );
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
    
// }

// let promise = getData(123);



//==Promise then and catch

// const getPromise = () =>{
//     return  new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("some error")
//     })
// }

// let promise = getPromise();
// // promise.then((res)=>{
// //     console.log("Promise Fulfilled",res);
    
// // })

// promise.catch((err)=>{
//     console.log("rejected",err);
    
// })




//======= Promise Chain  
// const asyncFunc = () =>{
//     return new Promise((resove, reject)=>{
//         setTimeout(()=>{
//             console.log("Hello Sekai");
//             resove("success");
//         },4000)
//     })
// }

// const asyncFunc2= () =>{
//     return new Promise((resove, reject)=>{
//         setTimeout(()=>{
//             console.log("Gambare Parusan-san");
//             resove("success");
//         },4000)
//     })
// }

// console.log("fetching data");

// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//     console.log("Gambareeeeeeeeeee");
    
// })
// })






//========= Async - Await

const getData = (dataId) =>{
    return new Promise((resolve, result)=>{
        setTimeout(()=>{
            console.log(`data = ${dataId}`);
            resolve("success");
        },3000)
    })
}



(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    console.log("Succes");
    

})()  //Here we have used IIFE
    //Immediately Invoked Function Expression





 



































// ================ Classes and Objects 

// let student = {
//     fullName : "Tom Henry",
//     age : 25,
//     skillSet : "Front-end-developer",
//     printSkill: function ()  {
//         console.log(`Skills = ${this.skillSet}`)
//     },
// }; 

// // this.skillSet => here (this.) means students. (this.) applies to object.


// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%");
//     }
// }


// const fin = {
//     salary: 50000,
// };


// const Tim = {
//     salary: 80000,
//     calcTax(){
//         console.log("Tax rate is 20%");
        
//     }
// };

// fin.__proto__ = employee;


// Tim.__proto__ = employee;




// //===========  Class

// class toyotaCar  {
//     constructor(brand, mileage){
//         console.log(`${brand} was created`);
//         this.brand = brand;
//         this.mileage = mileage;
//     }


//     start(){
//         console.log("start");
        
//     }

//     stop(){
//         console.log("stop");
        
//     }


// //    WE can log this during intialization through constructor
// //     setBrand(brand){
// //         this.brandName = brand;
// //     }

// //     setModel(model){
// //         this.modelNum = model;
// //     }
//  }

// let fortuner = new toyotaCar("fortuner", 10);
// console.log(fortuner);

// // fortuner.setBrand("fortuner");

// // fortuner.setModel(123);

// let lexus = new toyotaCar("lexus", 12);
// console.log(lexus);

// // lexus.setBrand("Lexus");

// // lexus.setModel("S");


// // ============= Inheritance


// class Person {
//     constructor(name){
//         this.species = "homo sapiens";
    
//     }

//     eat(){
//         console.log("eat");
        
//     }

//     sleep() {
//         console.log("sleep");
        
//     }

//     //When child and parent have same method then child's method overlaps the parent's method.
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     //During inheritance when we want to add constructor in child object, We shall use SUPER keyword

//     constructor(name){
//         console.log("hello");
//         super(name);
//        this.name = name;
//     }
    
//     //Here child's method work has overlapper the parent;s method work 
//     work(){
//         super.eat();
//         console.log("Build Something");
        
//     }
// }

// let me = new Engineer("me");






// //Practice Questions
 
// let DATA = "secret information";

// class User{
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//     }    

//     viewData(){
//         console.log("Data = ", DATA); 
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name ,email);
//     }

//     editData(){
//         DATA = "Some new Value";
//     }
// }

// let student1 = new User("me", "abc@gmail.com");
// let student2 = new User("You", "you@gmail.com");

// let teacher = new User("mam", "mam@gmail.com");

// let admin = new Admin("admin","admin@gmail.com");




//=============== Error Handling
//======== try-catch

// let a = 5;
// let b = 4;

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`a + b = ${a + b}`);
// console.log(`a + b = ${a + b}`);
// // console.log(`a + b = ${a + c}`); //Here we got error and because of it the rest of the code below won't be executed. So we use error handling here.
// try{
//     console.log(`a + b = ${a + c}`); 
// }catch(err){     //err is an object. We use err to define error.
//     console.log(err);
    
// }


// console.log(`a + b = ${a + b}`);
// console.log(`a + b = ${a + b}`);
// console.log(`a + b = ${a + b}`);





