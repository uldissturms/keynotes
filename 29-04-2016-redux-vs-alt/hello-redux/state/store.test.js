import expect from 'expect';
import {store} from './store';

describe('store', () => {
  it('starts off with empty names array', () => {
    const state = store.getState();
    expect(state).toEqual({ names: []});
  });
  it('adds a name when greet action processed', () => {
    const action = { type: 'GREET', payload: { name: 'Steve' }};
    store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual({ names: ['Steve']});
  });
});
