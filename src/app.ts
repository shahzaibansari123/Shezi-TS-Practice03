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

let uname: Person;

uname={
  name : "Shahzaib",
    speak(sentence: string) : void {},
}

//---------------------------------------------


interface Person{
    name: string;
    speak(sentence: string): void;
}

class Human implements Person{
    constructor (public name: string, private id: string){
        }

        
    speak(sentence: string): void{

    }
    }
