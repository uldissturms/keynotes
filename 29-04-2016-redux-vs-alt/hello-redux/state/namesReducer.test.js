import expect from 'expect';
import namesReducer from './namesReducer';

const greet = name => {
  return { type: 'GREET', payload: { name: name }};
};

describe('names reducer', () => {
  it('greets', () => {
    const state = namesReducer({ names: [] }, greet('Steve'));
    expect(state).toEqual({ names: ['Steve']});
  });
  it('no greetings to Stranger', () => {
    const state = namesReducer({ names: [] }, greet('Stranger'));
    expect(state).toEqual({ names: []});
  });
});
