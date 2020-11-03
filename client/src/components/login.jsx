import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import BackDrop from './commom/backDrop';

Axios.defaults.withCredentials = true;
const Login = ({ login, setLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3000/api/auth')
            .then((res) => {
                if (res.data.loggedIn) setLoginStatus(true);
            })
            .catch((err) => console.error(err.message));
    }, []);

    const handleSubmit = (e) => {
        //TODO 前端未寫表單驗證
        Axios.post('http://localhost:3000/api/auth', {
            email: 'tester1@gmail.com',
            password: 'tester1',
        })
            .then((res) => {
                const { auth, token } = res.data;

                if (!auth) {
                    setLoginStatus(false);
                } else {
                    alert('登入成功');
                    localStorage.setItem('token', token);
                    setLoginStatus(true);
                }
            })
            .catch((err) => {
                alert('登入失敗');
                setLoginStatus(false);
                console.error(err.message);
            });
        e.preventDefault();
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

    return login ? (
        <div>
            <Modal>
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <p>電子郵件</p>
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value="tester1@gmail.com"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>密碼</p>
                            <input
                                type="password"
                                minLength="5"
                                onChange={(e) => setPassword(e.target.value)}
                                value="tester1"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">submit</button>
                </form>
                {loginStatus && (
                    <button onClick={visitAPITest}>JsonWebToken</button>
                )}
            </Modal>
            <BackDrop setFunction={setLogin} />
        </div>
    ) : null;
};

export default Login;

const Modal = styled.section`
    width: 500px;
    padding: 25px;
    border-radius: 10px;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: calc(50% - 250px);
    background-color: white;
`;
