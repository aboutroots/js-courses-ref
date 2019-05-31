import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange,
  }
}

function App() {
  // Zmieniam tu nazwę właściwości, którą otrzymuję z obiektu, bo potrzebuję 3 oddzielne wartości
  // a nie mam różnych nazw zmiennych dla tych wartości.
  const {value: name, onChange: handleNameChange} = useInput()
  const {value: surname, onChange: handleSurnanmeChange} = useInput()
  const {value: age, onChange: handleAgeChange} = useInput()

  return (
    <form>
      <input 
      type="text"
      placeholder="Name"
      value={name}
      onChange={handleNameChange}
      />

      <input 
      type="text"
      placeholder="Surname"
      value={surname}
      onChange={handleSurnanmeChange}
      />

      <input 
      type="number"
      placeholder="Age"
      value={age}
      onChange={handleAgeChange}
      />
    </form>
  )
}

/*
// Alternatywne(lepsze) rozwiązanie:

// To usunięcie wszystkich const z lini 19-21. Bo atrybuty value i onChange działają tak samo, czyli
// przekazuję wartość i funkcję aktualizującą tą wartość. Jeśli funkcjonalność jest ta sama,
// mogę inaczej zapisać te atrybuty.

function useInput() {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange,
  }
}

function App() {
  return (
    <form>
      <input 
      type="text"         // Wywołuje custom hook, który zwraca obiekt z dwoma właściwościami. Biorę więc ten obiekt, który został zwrócony,
      placeholder="Name"  // destrukturuzyję te dwie właściwości, czyli value i onChange, by służyły jako propsy i atrybuty. 
      { ...useInput() }   // Dzięki temu, że używam tej samej nazwy zmiennych, jak value, wszystkie zmienne stanu są niezależne (jak z licznikami).
      />                 

      <input 
      type="text"
      placeholder="Surname"
      { ...useInput() }
      />

      <input 
      type="number"
      placeholder="Age"
      { ...useInput() }
      />
    </form>
  )
}
*/

export default App;
