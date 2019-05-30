import React, {useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('salmon');
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(`I am inside useEffect fn. The current count is ${count}`);

    return () => {
      console.log(`I am removing everything what is above. The last count was ${count}.`)
    }
  },[count])  // to mówi: uruchom powyższą funkcję callback tylko wtedy, gdy zmieni się wartość count

  function handleColorChange() {
    const nextColor = color === 'salmon' ? 'gold' : 'salmon';
    setColor(nextColor);
  }

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleColorChange}>Change color</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  )
}

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Show/Hide the counter component
      </button>
      
    {visible && <Counter />}
    </div>

  )
}

export default App;
