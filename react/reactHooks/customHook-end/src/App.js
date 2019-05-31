import React, { useState } from 'react';

function useCounter(startingValue) {
  const [count, setCount] =  useState(startingValue);

  const handleIncrease = () => setCount((prevCount) => {
    return prevCount + 1;
  });

  const handleDecrease  = () => setCount((prevCount) => {
    return prevCount - 1;
  });

  const handleReset = () => setCount(0);

  return {
    count,
    handleIncrease,
    handleDecrease,
    handleReset,
  }
}

function Display(props) {
  // destrukturyzacja
  const { count, handleIncrease, handleDecrease, handleReset } = useCounter(props.start);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Display start={10} /> {/** Te dwa komponenty są całkowicie niezależne, ich wartości są rozdzielone. Oba mają dostęp do własnej zmiennej stanu. */}
      <Display start={20} /> {/** Każdy komponent śledzi swój własny, odrębny licznik (count) */}
    </div>
  )
}

export default App;
