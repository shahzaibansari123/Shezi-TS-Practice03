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
//   name : "Shahzaib",
//     speak(sentence: string) : void {},
// }

//---------------------------------------------

// move this into mew file

// interface Person{
//     name: string;
//     speak(sentence: string): void;
// }

// import { Person } from "./types";

// class Human implements Person{
//   constructor (public name: string, private id: string){
//     }

//   speak(sentence: string): void{

// }
// }

//ADVANCED TYPES

//union types

// type Combined = string | number | boolean;

// let abc: Combined;

// abc = "shezi";

//intersection types

// type Bird = {
//   name: string;
//   flyingSpeed: number;
// };

// type Animal = {
//   name: string;
//   runningSpeed: number;
// };

// type Creature = Bird & Animal;

// let xyz: Creature;

// xyz = {
//   name: "Duck",
//   flyingSpeed: 25,
//   runningSpeed: 35,
// };

//for interfaces

// interface Bird {
 //  name: string;
 //  flyingSpeed: number;
// }

// interface Animal {
//   name: string;
//  runningSpeed: number;
// }

// the , functionality only allows in interfaces scenario not in class scenario as it inherits only one class
// you can implements one class with multiple interfaces means the , works for interfaces scenario while extends or implemnts as well 
// interface Creature extends Bird, Animal {

// };


//TYPE GUARDS

type Bird = {

   name: string;

   flyingSpeed: number;

 };

 type Animal = {

   name: string;

runningSpeed: number;

 };



// practicing typguards


type Plants={
 name: string;
 plantType: string; 
 }

type Creature= Bird | Animal | Plants ;


// typeguarding while working on classes

class Animalc {
 constructor(public name: string , public runningSpeed: number){}
 }

class Birdc {

 constructor(public name: string , public flyingSpeed: number){}

 }

class Plantc{
 constructor (public name: string, public plantType: string){}
 }


function log(creature : Creature){
 console.log(creature.name);
 if(creature instanceOf Animalc){

  console.log(creature.runningSpeed)

  }
 if(creature instanceOf Birdc){
  console.log(creature.flyingSpeed)
  }
 
 if(creature instanceOf Plantc){

  console.log(creature.plantType)

  }
 };


// log({name: "Dog", runningSpeed: 40})

log(new Animal ('dog', 40));
