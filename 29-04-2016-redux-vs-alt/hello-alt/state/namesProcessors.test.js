import expect from 'expect';
import namesProcessors from './namesProcessors';

describe('names processors', () => {
  it('no greetings to Stranger', () => {
    var names = namesProcessors.add({ names: [] }, 'Stranger');
    expect(names).toEqual({ names: [] });
  });
});