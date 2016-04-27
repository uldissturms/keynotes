import React from 'react';
import Hello from './hello';
import store from '../state/namesStore';
// Bad: getting into lib internals
import connectToStores from 'alt-utils/lib/connectToStores';

class HelloList extends React.Component {
  static getStores(props) {
    return [store];
  }
  static getPropsFromStores(props) {
    return store.getState();
  }
  render() {
    return (
      <div className='test-hello-name-list'>
        {this.props.names.map(name =>
          <Hello name={name}/>
        ) }
      </div>
    );
  }
}

export default connectToStores(HelloList);
