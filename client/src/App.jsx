import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Header from './components/header';
// import Main from './components/main';
import Login from './components/login';
import Member from './components/member';
import Article from './components/article';
import NewArticle from './components/newArticle';
import MyArticle from './components/myArticle';

const App = () => {
    return (
        <Container>
            <Router>
                <Header />
                <Main>
                    <Menu />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/member" component={Member} />
                        <Route path="/article" component={Article} />
                        <Route path="/newarticle" component={NewArticle} />
                        <Route path="/myarticle" component={MyArticle} />
                    </Switch>
                </Main>
            </Router>
        </Container>
    );
};

export default App;
const Container = styled.div`
    height: 100%;
`;
const Main = styled.div`
    max-width: 1920px;
    display: flex;
    height: calc(100% - 80px);
`;
