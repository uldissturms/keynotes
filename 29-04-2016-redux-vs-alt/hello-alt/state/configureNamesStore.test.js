import expect from 'expect';
import alt from '../alt';
import configureStore from './configureNamesStore';
import namesActions from '../actions/NamesActions';

const greet = name => {
  const action = namesActions.ADD;
  const data = name;
  alt.dispatcher.dispatch({ action, data });
};

describe('store', () => {
  it('starts off with empty names array', () => {
    const store = configureStore();
    const state = store.getState();
    expect(state).toEqual({ names: []});
  });
  it('adds a name after greet action processed', () => {
    const store = configureStore();
    greet('Steve');
    const state = store.getState();
    expect(state).toEqual({ names: ['Steve']});
  });
});
