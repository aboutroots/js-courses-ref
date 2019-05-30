import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prevState) => {
    return prevState + 1;
  });

  const handleDecrease = () => setCount((prevState) => {
    return prevState - 1;
  });

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div>{count}</div>
    </div>
  )
}

export default App;