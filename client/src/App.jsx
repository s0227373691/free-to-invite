import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Navbar from './components/navbar';
import Main from './components/main';
import Login from './components/login';

const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Navbar />
                <Main />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default App;
