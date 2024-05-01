/* import {types} from "util";

type Person = {
    name:string,
    age:number,
};


const personas: Person[]= [
    {
        name:'Alberto',
        age: 19,
    },
    {
        name:'Maria',
        age: 20,
    }
]
const strings = ["123", "hsadhasd", "dsasdsaads"]


// Tenplate function
function findByIndex<T>(array: T[], index: number): T | undefined{

   const object = array.find((element,elementIndex) => index === elementIndex)
   return object;


}

export function getObjects(){
    console.log(findByIndex<string>(strings, 2));
    console.log(findByIndex<Person>(personas, 1));
}


 */