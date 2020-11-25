import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// 元件
import Header from './components/header';
import Board from './components/board';
import Login from './components/login';
import Member from './components/member';
import Article from './components/article';
import NewArticle from './components/newArticle';
import MyArticle from './components/myArticle';
// 內部函式
import { getUserAuth } from './lib/api/auth';
import { userCheckedLoginStatus } from './store/slices/users';

const fetchUserStatus = async (props) => {
    const { data } = await getUserAuth();
    props.userCheckedLoginStatus(data);
};

const App = (props) => {
    useEffect(() => {
        fetchUserStatus(props);
    }, []);
    return (
        <Router>
            <Header />
            {/* <Main>
                <Container>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/member" component={Member} />
                        <Route path="/article" component={Article} />
                        <Route path="/newarticle" component={NewArticle} />
                        <Route path="/myarticle" component={MyArticle} />
                        <Route path="/:board" component={Board} />
                        <Route path="/:board/:subboard" component={Board} />
                        {/* <Route path="/:board/:subboard/:id" component={Board} /> 
                    </Switch>
                </Container>
            </Main> */}
        </Router>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Main = styled.div`
    display: flex;
    width: '100%';
`;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background: gray;
`;
