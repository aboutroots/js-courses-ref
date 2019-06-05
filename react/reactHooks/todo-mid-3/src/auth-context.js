import React from 'react';
                                        // muszę mieć taką strukturę, jaką mam w App.js
const AuthContext = React.createContext({status: false, login: () => {}});

export default AuthContext;