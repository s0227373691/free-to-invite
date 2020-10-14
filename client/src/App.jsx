import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/menu';
import Navbar from './components/navbar';
import Main from './components/main';
import Login from './components/login';

const App = () => {
    return (
        <div>
            <Menu />
            <Router>
                <Navbar />
                <Main />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
};

export default App;
