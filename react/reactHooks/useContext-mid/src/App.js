import React, { createContext } from 'react';

const NameContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Billy Shakespeare',
    }
  }

  render() {
    return (
      <NameContext.Provider value={this.state.name}>
        <Child />
      </NameContext.Provider>
    )
  }
} 
class Child extends React.Component {
  render() {
    return (
      <section className="child">
        <GrandChild />
      </section>
    )
  }
} 
class GrandChild extends React.Component {
  render() {
    return (
      <div className="grandchild">
        <Button />
      </div>
    )
  }
} 
class Button extends React.Component {
  render() {
    return (
      <NameContext.Consumer>
        {/* Muszę tu zapewnić funkcję, która zwraca JSX. Ta fn otrzymuje argument, który będzie wartością kontekstu*/}
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>
    )
  }
} 


export default App;
