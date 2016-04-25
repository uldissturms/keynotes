import expect from 'expect';
import alt from '../alt';
import store from './store';
import namesActions from '../actions/NamesActions';

const greet = name => {
  const action = namesActions.ADD;
  const data = name;
  alt.dispatcher.dispatch({ action, data });
};

describe('store', () => {
  it('starts off with empty names array', () => {
    const state = store.getState();
    expect(state).toEqual({ names: []});
  });
  it('adds a name after greet action processed', () => {
    greet('Steve');
    const state = store.getState();
    expect(state).toEqual({ names: ['Steve']});
  });
});
