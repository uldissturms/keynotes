import React from 'react';

const Hello = ({name}) => {
  return (
    <div className='test-hello'>
      Hello, <b class='test-name'>{name}</b>
    </div>
  );
};

export default Hello;
