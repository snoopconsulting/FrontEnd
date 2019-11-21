import { createStore } from 'redux';
import reducer from '../../reducers/indexReducer.js';

export default function initStore() {
  return createStore(reducer, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}