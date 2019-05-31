import React, { createContext, useContext, useState } from 'react';

// tu mam context object
const NameContext = createContext();

function App() {
  const [name, setName] = useState('Billy Shakespeare');

  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  )
}

function Child() {
  return (
    <section className="child">
      <Grandchild />
    </section>
  )
}

function Grandchild() {
  return (
    <div className="grandchild">
      <Button />
    </div>
  )
}

function Button() {
  const name = useContext(NameContext); // to uzyskuje informacje

  return(
    <button>{name}</button>
  )
}

export default App;
