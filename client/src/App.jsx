import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Main from './components/main';
import Login from './components/login';

const App = () => {
    return (
        <div>
            <Navbar />
            <Router>
                <Main />
                <Route path="/login" component={Login} />
            </Router>
        </div>
    );
};

export default App;
