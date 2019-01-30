import React from 'react';
import ReactDOM from 'react-dom';
import style from './style/main.scss';

const title = 'Meu texto exibido na tela';

ReactDOM.render(
  <div><p className="title">{title}</p></div>,
  document.getElementById('app')
);

module.hot.accept();