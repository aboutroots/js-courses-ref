import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount((prevState) => prevState + 1);
  const handleDecrease = () => setCount((prevState) => prevState - 1);


  useEffect(() => {
    console.log(`I'm inside the useEffect function. The current count is ${count}`);

    return () => {
      console.log(`I'm removing anything that was setup above! The last count was ${count}`);
    }
  })

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div>{count}</div>
    </div>
  )
}

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show - Hide the Counter component.
      </button>

      {visible && <Counter />}
    </div>
  )
}

export default App;