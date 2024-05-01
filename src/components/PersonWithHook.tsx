"use client"

import { Person } from './types';
import { useState, ChangeEvent,FormEvent } from 'react';

export default function PersonWithHook(){

    const[person, setPerson] = useState<Person>({
        name: "Alberto",
        age: 20,
    });
    
        function handleClick(){
            const newPerson = {
                name: person.name,
                age: person.age + 1,
            }
    
            setPerson(newPerson)
            
        }

    const [inputValue, setInputValue] = useState<string>("")
    
        function handleChange(event: ChangeEvent<HTMLInputElement>){
          setInputValue(event.target.value)
        }

        function handleSubmit(event: FormEvent<HTMLFormElement>){
          event.preventDefault();
          const formData = new FormData(event.currentTarget)

          console.log(event.target);
          
        }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}> 
        <h1>
          {person.name}
        </h1>
        <p>
          {person.age}
        </p>
        <input onChange={handleChange}/>
        <button onClick={handleClick} className="bg-red-600 text-white p-5 rounded-md">
          incrementar edad
        </button>
        <input type="submit" value='submit' name='name'/>
      </form>
    </div>
  )
}