import React, {useState} from 'react';


/* plain javascript object to store the state

function App() {
  // state to zwykły obiekt
  const [state, setState] = useState({
    city: '',
    country: '',
  })

  const handleCityChange = (event) => {
    setState({
      ...state,
      city: event.target.value,
    });
  }

  const handleCountryChange = (event) => {
    setState({
      ...state, 
      country: event.target.value,
    });
  }

  return (
    <form>
      <div>
        <input 
        type='text'
        placeholder='city'
        value={state.city}
        onChange={handleCityChange}
        />
      </div>

      <div>
        <input 
        type='text'
        placeholder='country'
        value={state.country}
        onChange={handleCountryChange}
        />
      </div>

      <div>
        You live in {`${state.city} ${state.country}`}
      </div>
    </form>
  )
}
*/

// with useState multiple times

function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

  return (
    <form>
      <div>
        <input 
        type='text'
        placeholder='city'
        value={city}
        onChange={handleCityChange}
        />
      </div>

      <div>
        <input 
        type='text'
        placeholder='country'
        value={country}
        onChange={handleCountryChange}
        />
      </div>

      <div>
        You live in {`${city} ${country}`}
      </div>
    </form>
  )
}


export default App;
