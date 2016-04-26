import React from 'react';
import Hello from './hello';

const HelloList = ({ names }) => (
    <div className='test-hello-name-list'>
      {names.map(name =>
        <Hello name={name}/>
      )}
    </div>
)

export default HelloList;
