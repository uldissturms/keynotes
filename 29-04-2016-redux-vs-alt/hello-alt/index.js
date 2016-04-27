import React from 'react';
import {render} from 'react-dom';
import HelloList from './components/helloList.jsx';
import Greet from './components/greet.jsx';

render(
  <div className='main'>
    <Greet />
    <HelloList/>
  </div>,
  document.getElementById('App')
)
