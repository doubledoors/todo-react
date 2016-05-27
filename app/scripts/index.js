// global postcss
require('../styles/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <TodoApp />,
  rootElement
);
