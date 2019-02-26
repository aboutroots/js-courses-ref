import React from 'react';        // paczka do tworzenia komponentów
import ReactDOM from 'react-dom'; // paczka do renderowania powyższego do pliku html

/*
const App = React.createElement(   // wszystkie tagi w React (to nakładka) to wywołanie metody createElement
  'h1',           // element
  null,           // propsy 
  'Hello World',  // ...children
)


ReactDOM.render(
  // rendered element
  App,
  // target
  document.getElementById('root')
);
*/

// struktura struktura JSX - poniżej tzw. KOMPONENT FUNKCYJNY 
const App = () => (    // tu zwracam funkcję, nie html
  <div className='wrapper'>                     
    <h1 className='mainHeader'>Hello world</h1>   
    <h2 className='secondaryHeader'>hello World</h2>    
  </div>  
) 

ReactDOM.render(
  <App />, // lub App(),
  document.getElementById('root')
);