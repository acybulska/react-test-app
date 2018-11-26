import React, { Component } from 'react';
import styles from './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Lisa", age: 24 }
    ],
    showPersons: false,
    userName: "the Hulk",
    userInput: ""
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

  assignmentTwoTask = (event) => {
    this.setState({ userInput: event.target.value })
  }

  removeChar = (charId) => {
    const chars = this.state.userInput.split('');
    chars.splice(charId, 1);
    const newChars = chars.join('');
    this.setState({ userInput: newChars });
  }

  render() {
    let btnClass = "";
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
      );
      btnClass = styles.Red
    }

    let charList = this.state.userInput.split('').map((ch, i) => {
      return <Char
        character={ch}
        key={i}
        click={() => this.removeChar(i)} />
    })

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    return (
      <StyleRoot>
        <div className={styles.App} >

          <div>
            <h2>People</h2>
            <p className={classes.join(' ')}>Test paragraph</p>
            <button className={btnClass} onClick={(event) => this.togglePersonsHander(event)}>Show people</button>
            {persons}
          </div>

          <div className={styles.Assignment1}>
            <h2>A1</h2>
            <button onClick={this.userNameHandler}>Set hero</button>
            <UserInput changed={this.createAHero} />
            <UserOutput userName={this.state.userName} />
          </div>
          <div className={styles.Assignment2}>
            <h2>A2</h2>
            <input onChange={this.assignmentTwoTask} />
            <p>Text length: {this.state.userInput.length}</p>
            <Validation length={this.state.userInput.length}></Validation>
            {charList}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
