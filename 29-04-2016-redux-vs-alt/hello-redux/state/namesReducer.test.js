import expect from 'expect';
import namesReducer from './namesReducer';

const greet = name => {
  return { type: 'GREET', payload: { name: 'Stranger' }};
};

describe('names reducer', () => {
  it('no greetings to Stranger', () => {
    const state = namesReducer({ names: [] }, greet('Stranger'));
    expect(state).toEqual({ names: []});
  });
});
