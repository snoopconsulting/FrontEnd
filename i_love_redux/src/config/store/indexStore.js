import { createStore, compose, applyMiddleware } from 'redux';
import reduxCatch from 'redux-catch';
import reducer from '../../reducers/indexReducer.js';

function errorHandler(error, getState, lastAction, dispatch) {
  console.error(error);
  console.debug('current state', getState());
  console.debug('last action was', lastAction);
  // optionally dispatch an action due to the error using the dispatch parameter
}

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Llama al siguiente método dispatch en la cadena de middlewares
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // Este seguramente sera la acción, excepto
    // que un middleware anterior la haya modificado.
    return returnValue
  }
}

export default function initStore() {
  return createStore(
    reducer,
    compose(
      applyMiddleware(reduxCatch(errorHandler)) +
      applyMiddleware(logger) +
      window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}