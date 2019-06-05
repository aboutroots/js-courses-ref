import React, { useContext } from 'react';

import AuthContext from '../auth-context';

const Auth = props => {
  // Może być więcej niż jeden kontekst, dlatego potrzebny jakiś identyfikator.
  // Identyfikatorem jest obiekt kontekstu, stworzony w auth-context.js
  const auth = useContext(AuthContext);

  return <button onClick={auth.login}>Log in!</button>  // czyli po kliknięciu wywołuję fn w App.js
};

export default Auth;