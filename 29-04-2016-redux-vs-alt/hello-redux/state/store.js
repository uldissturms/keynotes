import {createStore} from 'redux';
import namesReducer from './namesReducer';

export default function configureStore() {
  return createStore(namesReducer);
}
