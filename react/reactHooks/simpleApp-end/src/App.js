import React, {useState, useEffect} from 'react';

function App() {
  // ten komponen potrzebuję userText, dlatego go zwracam w useKeyPress
   const userText = useKeyPress()

  return (
    <div>
      <h2>Feel free to type! Your text will show up below!</h2>
      <div>
        { userText }
      </div>
    </div>
  )
}

function useKeyPress() {
  const [userText, setUserText] = useState('');

  function handleUserKeyPress(event) {
    const { key, keyCode } = event;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`)
    }     
  }
                                                                
  useEffect(() => {                                             
    window.addEventListener('keydown', handleUserKeyPress);     
                                                                
    return () => {                                              
      window.removeEventListener('keydown', handleUserKeyPress);
    }                                                           
  })   
  
  return userText;
}

export default App;
