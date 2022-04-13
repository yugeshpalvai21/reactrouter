import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';


const router = (
  <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));