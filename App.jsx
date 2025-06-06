import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0123456789'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()

    if(persons.some(person=> person.name === newName )) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if(persons.some(person=> person.number === newNumber )) {
      alert(`Phonenumber is already added to phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    console.log('button clicked', event.target)

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} 
          onChange = {handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber} 
          onChange={handleNumberChange}
          />
          
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) =>
         <li key={index}>{person.name}: {person.number} </li>
        )}
      </ul>
    </div>
  )

}

export default App

