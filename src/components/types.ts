/* let text = "Esto es un texto";
text = 'Hello';


!tipado explisito

let number1: number = 123;
let boolean1: boolean = false;

!convertir en string
let numberToText: string = number1.toString();
 */
/* 
!parametro de funciones para un autocomplete
function multiplicarPor2(arr: number[]){
    const newArr = arr.map(item => item *2);

} */


//!tipado objetos JS (type, interface)

/* //!TYPE
const person: Person ={
    name:"alberto",
    age:19,

};
type Person={
    name:string,
    age:number,
    gender?: "Male" | "Female",

};

type Programmer={
   lenguage: 'JavaScript' | 'TypeScript'; 
}
// !TYPE TIENE HERENCIA DE TIPADO: UNION
type ProgrammerPerson = Person & Programmer;



function addOneToAge(person: Person){
    person.age+=1;
} */


//!INTERFACE

// const person: Programmer ={
//     name:"alberto",
//     age:19,
//     gender: "Male",
//     language:'TypeScript',

// };

// interface Person{
//     name:string,
//     age:number,
//     gender?: "Male" | "Female",

// };

// interface Programmer extends Person{
//     language: 'JavaScript' | 'TypeScript'; 
//  }



// function addOneToAge(person: Person){
//     person.age+=1;
// } 


import { types } from "util";

export type Person = {
    name:string,
    age:number,
  }



