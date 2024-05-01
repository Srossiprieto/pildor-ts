import React from 'react'
import { Person } from './types'
import PersonCard from './PersonCard'


type Props = {
  personList: Person[],
}


function PersonList({personList}: Props) {
  return (
    <div>
      {personList.map((person,index) =>(
        <PersonCard 
          name={person.name}
          age={person.age}
          key={index}
        />
      ))}
    </div>
  )
}

export default PersonList
