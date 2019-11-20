import { createStore } from 'redux'
import rootReducer from './reducers/RootReducer';

const initialState = {
  timerloop: 5
}

export default function configureStore() {
  return createStore(rootReducer, initialState);
}
