import React from 'react';
import {connect} from 'react-redux';
import Hello from './hello';

const HelloList = ({ names }) => {
  return (<div className='test-hello-name-list'>
    {names.map(name =>
      <Hello name={name}/>
    ) }
  </div>);
}

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

export default connect(mapStateToProps)(HelloList);