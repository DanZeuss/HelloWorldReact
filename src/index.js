import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import Button  from './Button';
import CustomValidation from './CustomValidation' 
import Events from './Events' 
import GetComponentReference from './GetComponentReference'
import ComponentLifeCycle from './ComponentLifeCycle'

ReactDOM.render(
  // to test each example, simple modify the name of the element (i.e. App, Button, CustomValidation, etc)
  <ComponentLifeCycle />,
  document.getElementById('root')
);
