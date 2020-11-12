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
        <Container>
            <Header />
            <Router>
                <Body>
                    <Menu />
                    <Main>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/member" component={Member} />
                            <Route path="/article" component={Article} />
                            <Route path="/newarticle" component={NewArticle} />
                            <Route path="/myarticle" component={MyArticle} />
                            {/* <Route path="/myarticle" component={Board} /> */}
                        </Switch>
                    </Main>
                </Body>
            </Router>
        </Container>
    );
};

export default App;
const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

const Body = styled.div`
    max-width: 1920px;
    display: flex;
    margin-top: 80px;
`;
const Main = styled.div`
    width: calc(100% - 280px);
    margin-left: 280px;
`;
