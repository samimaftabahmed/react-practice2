import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom'
import {Users} from "./components/Users";
import {Contact} from "./components/Contact";
import {NotFound} from "./components/NotFound";


ReactDOM.render(
    <Router>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>

        <switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
        </switch>

    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
