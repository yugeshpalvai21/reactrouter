import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome To Portfolio App</h1>
      <p>website to maintain portfolio</p>
    </div>
  )
}

const router = (
  <BrowserRouter>
      <Route path="/" component={Home} />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));