import React from 'react';
import {connect} from 'react-redux';

const Greet = ({ dispatch }) => {
  let input;
  const submit = e => {
    e.preventDefault();
    dispatch({ type: 'GREET', payload: { name: input.value }});
  }
  return (
    <div className='test-greet'>
      <form onSubmit={submit}>
        <input id='test-greeting' type='text' ref={node => {
          input = node}}/>
        <button id='test-submit-greeting' type='submit'>Greet</button>
      </form>
    </div>
  );
};

export default connect()(Greet);
