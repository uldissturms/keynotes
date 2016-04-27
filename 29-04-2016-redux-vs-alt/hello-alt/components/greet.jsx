import React from 'react';
import store from '../state/namesStore';
import namesActions from '../actions/NamesActions';
// Bad: getting into lib internals
import connectToStores from 'alt-utils/lib/connectToStores';

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  static getStores(props) {
    return [store]
  }
  static getPropsFromStores(props) {
    return store.getState();
  }
  submit(e) {
    e.preventDefault();
    namesActions.add(this.input.value);
  }
  render() {
    return (
      <div className='test-greet'>
        <form onSubmit={this.submit}>
          <input id='test-greeting' type='text' ref={node => {
          this.input = node}}/>
          <button id='test-submit-greeting' type='submit'>Greet</button>
        </form>
      </div>
    );
  }
};

export default connectToStores(Greet);
