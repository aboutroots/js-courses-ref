import React, {useState, useEffect} from 'react';

function App() {
  const [userText, setUserText] = useState('');

  function handleUserKeyPress(event) {
    const { key, keyCode } = event;
        // spacja                     małe litery
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`)
    }     // to co wpisał user i to co wpisuje aktualnie
  }
                                                                // Jeśli NIE dodam funkcji teardown: gdy strona się załaduje, mam już jeden zarejestrowany
  useEffect(() => {                                             // Event Listener-w obiekcie window (to pochodzi z pierwszego uruchomienia useEffect).
    window.addEventListener('keydown', handleUserKeyPress);     // Gdy nacisnę klawisz, Event Listener uruchomi funkcję handleUserKeyPress. Wywołuję tu setUserText
                                                                // co aktualizuje stan userText. Za każdym razem, jak wywołam fn aktualizaującą, komponent jest ponownie
    return () => {                                              // renderowany, a wtedy uruchamiam useEffect. Dodaje to kolejny Event Listener. Teraz każdy nowy Event
      window.removeEventListener('keydown', handleUserKeyPress);// Listener aktualizuje naraz userText. To dodaje kolejne Event Listenery. Nawet, jesli ten komponent
    }                                                           // zostanie usunięty z ekranu, Event Listener dalej istnieje na obiekcie window i próbujemy zrobić coś
  })                                                            // na komponencie, który został rozmontowany.

  return (
    <div>
      <h1>Feel free to type! Your text will show up below!</h1>
      <blockquote>
        { userText }
      </blockquote>
    </div>
  )
}

export default App;
