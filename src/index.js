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

const About = () => {
  return (
    <div>
      <h4>About</h4>
      <p>Brief Description</p>
    </div>
  )
}

const router = (
  <BrowserRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));