import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';

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

const Portfolio = () => {
  return (
    <div>
      <p>Portfolios Section</p>
    </div>
  )
}

const Contact = () => (<p>Contact Details</p>)

const PageNotFound = () => (<p>Sorry! Page Doesn't existed</p>)



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