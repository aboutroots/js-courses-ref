import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'qwda123', name: 'Max', age: 28 },
      { id: 'dsa32', name: 'Tom', age: 23, },
      { id: 'gfd21', name: 'Jane', age: 31 },
    ],
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    // alternatywa: Object.assingn({}, this.state.persons[persinIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) { 
      persons = ( // poniżej jako argument metody map muszę zwrócić JSX
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
          
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Toggle persons</button>      
        {persons}  
      </div>
    );
  }
}

export default App;
