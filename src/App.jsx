import React, { useEffect } from 'react';
import './app.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavbarHome from './components/NavbarHome';
import Home from './pages/index/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Skills from './pages/skills/Skills';
import FourOhFour from './pages/fourOhfour/FourOhFour';
import Axios from 'axios';

function App() {
  useEffect(() => {
    try {
      async function get() {
        await Axios.get('https://mr-monkey.herokuapp.com/api/projects');
      }
      get();
    } catch ({ message }) {
      console.log(message);
    }
  });

  return (
    <>
      <NavbarHome />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/skills' component={Skills} />
        <Route component={FourOhFour} />
      </Switch>
    </>
  );
}
export default withRouter(App);
