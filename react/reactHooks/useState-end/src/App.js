import React, {useState} from 'react';

function App() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'Active' : 'Inactive';

  const onClick = () => {
    setActivated(!activated)
  }

  return (
    <button onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default App;
