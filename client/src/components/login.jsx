import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Axios from 'axios';

import { Modal } from './styles/modals';
import { Input } from './styles/inputs';
import { Button } from './styles/buttons';
import BackDrop from './commom/backDrop';

import { getUserAuth, postUserAuth } from '../lib/api/auth';
import { userCheckedLoginStatus } from '../store/slices/users';

const Login = (props) => {
    // const Login = ({ login, setLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function fetchLoginStatus(props) {
        const {
            data: { loggedIn },
        } = await getUserAuth();
        props.userCheckedLoginStatus(loggedIn);
    }

    useEffect(() => {
        fetchLoginStatus(props);
    }, []);

    const handleSubmit = async (e) => {
        //TODO 前端未寫表單驗證
        e.preventDefault();
        const {
            data: { auth, token },
        } = await postUserAuth({ email, password });
        if (!auth) {
            alert('登入失敗');
        } else {
            alert('登入成功');
            localStorage.setItem('token', token);
        }
        props.userCheckedLoginStatus(auth);
    };

    const visitAPITest = () => {
        Axios.get('http://localhost:3000/api/test', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        }).then((res) => {
            console.log(res);
        });
    };

    const LogonComponent = (
        <>
            <Modal>
                <Title>登入帳號</Title>
                <Form onSubmit={handleSubmit}>
                    <FormRow>
                        <Input
                            type="text"
                            placeholder="電子郵件"
                            width="100%"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <Input
                            type="password"
                            placeholder="密碼"
                            width="100%"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormRow>
                    <Button type="submit" bgColor="#8a8a8a">
                        立即登入
                    </Button>
                </Form>
                <button onClick={visitAPITest}>JsonWebToken</button>
            </Modal>
            <BackDrop setFunction={props.setLogin} />
        </>
    );
    return props.login ? LogonComponent : null;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Title = styled.h2`
    width: 100%;
    padding: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: 800;
`;

const Form = styled.form`
    width: 400px;
    margin: auto;
    margin-bottom: 50px;
`;

const FormRow = styled.div`
    margin-bottom: 20px;
`;
