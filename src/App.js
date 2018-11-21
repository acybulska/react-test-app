import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Lisa", age: 24 }
    ],
    showPersons: false,
    userName: "the Hulk"
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHander = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (personId) => {
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({ persons: persons });
  }

  userNameHandler = () => {
    this.setState({ userName: "STAN LEE" })
  }

  createAHero = (event) => {
    this.setState({ userName: event.target.value })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const userInputStyle = {
      border: '1px solid red',
      backgroundColor: 'orange',
      margin: '20px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }
    return (
      <div>
        <h1>Hero Management</h1>
        <button onClick={this.userNameHandler}>Set hero</button>
        <UserInput style={userInputStyle} changed={this.createAHero} />
        <UserOutput userName={this.state.userName} />
        <button style={style} onClick={(event) => this.togglePersonsHander(event)}>Show people</button>
        {persons}
      </div>
    );
  }
}

export default App;
