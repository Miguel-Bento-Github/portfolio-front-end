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
      (async () => {
        const { status } = await Axios('https://mr-monkey.herokuapp.com');
        console.warn(status !== 200 ? 'Connected to DB' : new Error('Could not connect to DB'));
      })();
    } catch (error) {
      throw new Error('Cannot establish connection with the database.');
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
