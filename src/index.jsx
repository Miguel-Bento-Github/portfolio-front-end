import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const CompareHistory = ({ history, location }) => {
  useEffect(
    () =>
      history.listen(() => {
        if (history.location.pathname !== location.pathname) {
          window.scrollTo(0, 0);
        }
      }),
    [location]
  );
  return null;
};

const ScrollToTop = withRouter(CompareHistory);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
