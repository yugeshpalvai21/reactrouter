import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const router = (
  <BrowserRouter>
      <Route path="/" component={App} />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));