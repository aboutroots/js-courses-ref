import React, { Component, useState } from 'react';

/*
class App extends Component {
  state = {
    count: 0,
  }

  clickHandler = () => {
    // this.setState({count: this.state.count + 1});\
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Increase</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
*/

function App() {
  const [count, setCount] =  useState(0);

  // const clickHandler = () => setCount(count + 1);
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