import React, { useState } from 'react';

function App() {
  const [count, setCount] =  useState(0);

  const handleIncrease = () => setCount((prevCount) => {
    return prevCount + 1;
  });

  const handleDecrease  = () => setCount((prevCount) => {
    return prevCount - 1;
  });

  const handleReset = () => setCount(0);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;
