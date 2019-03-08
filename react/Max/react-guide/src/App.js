import React, { Component } from 'react';
import myClasses from './App.module.css';
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
    let btnClass = '';

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
      btnClass = myClasses.Red
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(myClasses.red)  // classes = ['red']
    }
    if (this.state.persons.length <=1 ) {
      assignedClasses.push(myClasses.bold) // classes = ['red', 'bold']
    }

    return (
        <div className={myClasses.App}>
          <h1>Hi, I am React App!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonHandler}>Toggle persons</button>      
          {persons}  
        </div>
    );
  }
}

export default App;
