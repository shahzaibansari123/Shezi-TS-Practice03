// CUSTOM TYPE of an OBJECT

// type Person ={
//     name: string;
// }

// -------------------------------------------

// INTERFACES 

// you can do the same task with the custom type or with the interface ig 
// interface Person{
//     name: string;
// }

// let uname: Person;

// uname={
//     name : "Shahzaib",
//     }

//---------------------------------------------


interface Person{
    name: string;
    speak(): void;
}

class Human implements Person{
    constructor (){
        }
    }
