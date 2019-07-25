import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
// import styles from './scss/application.scss';
import MainContainer from './containers/MainContainer.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={MainContainer}/>
        </div>
    </Router>
)

render(
  routing,
  document.getElementById('root')
);
