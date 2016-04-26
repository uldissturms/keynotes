import expect from 'expect';
import configureStore from './store';

describe('store', () => {
  it('starts off with empty names array', () => {
    const store = configureStore();
    const state = store.getState();
    expect(state).toEqual({ names: []});
  });
  it('adds a name when greet action processed', () => {
    const action = { type: 'GREET', payload: { name: 'Steve' }};
    const store = configureStore();
    store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual({ names: ['Steve']});
  });
});
