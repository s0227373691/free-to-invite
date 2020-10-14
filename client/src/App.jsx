import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Navbar from './components/navbar';
// import Main from './components/main';
import Login from './components/login';

const App = () => {
    return (
        <Router>
            <Container>
                <Menu />
                <Main>
                    <Switch>
                        <Navbar />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Main>
            </Container>
        </Router>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    width: 100%;
`;
const Main = styled.div`
    flex: auto;
`;
