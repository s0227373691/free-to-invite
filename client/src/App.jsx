import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
import Main from './components/main';

const App = () => {
    return (
        <div>
            <Navbar />
            <Router>
                <Main />
            </Router>
        </div>
    );
};

export default App;
