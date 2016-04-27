import React from 'react';
import {connect} from 'react-redux';
import Greet from './components/greet.jsx';
import HelloList from './components/helloList.jsx';

const App = ({names}) => (
  <div className='main'>
    <Greet />
    <HelloList names={names} />
  </div>
)

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

export default connect(mapStateToProps)(App);
