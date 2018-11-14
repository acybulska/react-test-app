import React, { Component } from 'react';
import './App.css';
import Text from './components/Text';
import ListResult from './components/ListResult';

class App extends Component {
  state = {
    subtitle: "to jest podtytul ze stanu",
    showResults: false,
    results: [
      {
        name: "Lisa",
        age: "24"
      },
      {
        name: "Wade",
        age: "33"
      },
      {
        name: "Tony",
        age: "42"
      }
    ]
  }

  alertHandler = () => {
    alert("TO JEST ALARM");
  }

  constructor(props) {
    super(props);
    this.toggleResultsHandler = this.toggleResultsHandler.bind(this);
  }

  toggleResultsHandler() {
    this.setState({ showResults: !this.state.showResults })
  }
  render() {
    return (
      <div className="App">
        <h2 style={{ borderBottom: 'red 1px solid' }}>Jest to jakis tytul</h2>
        <Text color="blue" subtitle={this.state.subtitle}></Text>
        <button onClick={this.toggleResultsHandler}>Pokaz wyniki</button>
        {
          this.state.showResults ? <ListResult alert={this.alertHandler} data={this.state.results}></ListResult> : null
        }
      </div>
    );
  }
}

export default App;
