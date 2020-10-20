import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Navbar from './components/navbar';
// import Main from './components/main';
import Login from './components/login';
import Member from './components/member';

const App = () => {
    return (
        <Router>
            <Container>
                <Menu />
                <Main>
                    <Switch>
                        <Navbar />
                        <Route path="/login" component={Login} />
                        <Route path="/member" component={Member} />
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
