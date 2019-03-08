import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    const personIndex = this.state.persons.findIndex(p => {                 // 1. Najpierw znajduję index
      return p.id === id;
    });

    const person = {                                                        // 2. Uzyskuję konkretną osobę niezmieniając stanu 
      ...this.state.persons[personIndex],
    };
    // alternatywa: Object.assingn({}, this.state.persons[persinIndex]);

    person.name = event.target.value;                                       // 3. Aktualizuję imię przez (kopię obiektu) person

    const persons = [...this.state.persons];                                // 4. Aktualizuję tablicę na pozycji którą znalazłem
    persons[personIndex] = person;                                          //    Mam kopię w persons i aktualizuję w jednej pozycji

    this.setState({ persons: persons })                                     // 5. Ustawiam state na zaktualizowaną tablicę, która jest kopią 
  }                                                                         //    starej tablicy

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // alternatywa: const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) { 
      persons = ( 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
      );
    }

    

    return (
        <div className={classes.App}>
           <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.togglePersonHandler} />
          {persons}  
        </div>
    );
  }
}

export default App;
