import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

class CompareHistory extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

const ScrollToTop = withRouter(CompareHistory);

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
