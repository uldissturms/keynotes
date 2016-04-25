import {createStore} from 'redux';
import namesReducer from './namesReducer';

export const store = createStore(namesReducer);
