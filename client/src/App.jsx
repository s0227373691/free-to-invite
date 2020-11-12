import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Header from './components/header';
import Board from './components/board';
// import Main from './components/main';
import Login from './components/login';
import Member from './components/member';
import Article from './components/article';
import NewArticle from './components/newArticle';
import MyArticle from './components/myArticle';

const App = () => {
    return (
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
                    {/* <Route path="/myarticle" component={Board} /> */}
                </Switch>
            </Main>
        </Router>
    );
};

export default App;

const Main = styled.div`
    max-width: 1920px;
    display: flex;
`;
