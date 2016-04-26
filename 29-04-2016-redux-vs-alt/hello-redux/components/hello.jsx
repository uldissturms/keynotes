import React from 'react';

const Hello = ({name}) => {
  return (
    <div className='test-hello'>
      Hello, <b className='test-name'>{name}</b>
    </div>
  );
};

export default Hello;

