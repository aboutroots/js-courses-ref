import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});


/* Poniższe drzewo funkcji jest wykonywane przez Redux, nie muszę wywoływać żadnej z tych funkcji. 
    Jedynę co muszę zrobić to zastosować middleware do store */

               // store jako input, bo użyję metody dostarczonej przez redux do połaczenia middlewere ze store
const logger = store => {                                            
    return next => {          // nazwana next, bo będzie to funkcja, którą mogę wykonać, aby akcja mogła kontynuować swoją podróż do reduktora
        return action => {    // Ta zagnieżdżona funkcja to MIDDLEWARE, tu mogę wykonać kod, który chcę, by był uruchomiony pomiędzy akcją a reduktorem.
            console.log('[Middleware] Dispatching', action);
            const result = next(action);                              // to pozwoli akcji kontunuować działanie reduktora - by to się stało, przekazuję akcję jako arg
            console.log('[Middleware] next state', store.getState())  // to ważne, bo mogę zmienić akcję w middleware
            return result;
        }
    }
};
                                   // drugi argument to enhancer, np. applyMiddleware. Enhancer dodaje dodatkowe możliwości do store.
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
