import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/navbar'
import Main from './components/main'

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Main />
            </div>
        </Router>
    )
}

export default App
