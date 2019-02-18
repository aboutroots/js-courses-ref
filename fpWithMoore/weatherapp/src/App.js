import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import axios from 'axios';
import * as R from 'ramda';

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  function dispatch(msg) {
    const updates = update(msg, model);         // 1. Zamiast wywoływać update() bezpośrednio, przechowuję fn w updates. To, co zwraca
    const isArray = R.type(updates) === 'Array';// update to Model lub Array. By wiedzieć jakie to rodzaj danych, muszę te wartości obsłużyć
    model = isArray ? updates[0] : updates;     // 2. W tym celu dodaję const isArray. Jeśli isArray jest true, biorę element tablicy. 
    const command = isArray ? updates[1] : null; // Jeśli false, to oznacza że wartość w update musi być model - zgodnie z tablicą w Update.js
    httpEffects(dispatch, command);              // w wiadomości MSGS.ADD_LOCATION 
    const updatedView = view(dispatch, model);   // Jeśli nie ma tablicy, to oznacza, że NIE MA do obsługi skutków ubocznych i zwracam null.
    const patches = diff(currentView, updatedView);// 3. Wywołuję fn httpEffects która wysyła zapytanie do serwera.
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

function httpEffects(dispatch, command) {
  if (command === null) {                  // czyli jeśli nie ma zapytania do serwera
    return;
  }
  const { request, successMsg } = command;
  axios(request).then(response => dispatch(successMsg(response)));    // otrzymuję odpowiedź jako, którą przesyłam jako parametr
}

export default app;
