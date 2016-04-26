import React from 'react';
import {connect} from 'react-redux';
import Hello from './components/hello.jsx';

class App extends React.Component {
  render() {
    return (
      <div class='test'>
        <Hello name='Uldis Sturms' />
      </div>
      );
  }
};

export default connect()(App);
