import React from 'react';
import { render } from 'react-dom';
import HeroContainer from './containers/HeroContainer.jsx'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import DocsContainer from './containers/DocsContainer.jsx';
import NotFound from './components/NotFound.jsx'
import './scss/application.scss'



const routing = (
    <Router>
            <Route path='*' component={Nav} />
        <Switch>
            <Route exact path='/' component={HeroContainer} />
            <Route path='/docs' component={DocsContainer} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

render(
    routing,
    document.getElementById('root')
);
