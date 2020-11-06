import React, { useState } from 'react';
import styled from 'styled-components';

import BackDrop from './commom/backDrop';

import SubmitRegister from '../lib/class/submitRegister';

const Register = ({ register, setRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [inputBorderColorName, setInputBorderColorName] = useState('black');
    const [inputBorderColorEmail, setInputBorderColorEmail] = useState('black');
    const [inputBorderColorPassword, setInputBorderColorPassword] = useState(
        'black'
    );
    const [inputBorderColorPassword2, setInputBorderColorPassword2] = useState(
        'black'
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        // 確認所有 <input /> border為綠色
        const inputBorderColors = [
            inputBorderColorName,
            inputBorderColorEmail,
            inputBorderColorPassword,
            inputBorderColorPassword2,
        ];
        const result = inputBorderColors.every((item) => item === 'green');
        if (!result) return alert('Fail to submit');

        // 再次驗證表單
        const formValue = {
            name,
            email,
            password,
        };
        const formValidater = new SubmitRegister(formValue);

        formValidater.validateAll().postToServer();
    };

    const validateName = (e) => {
        const inputValue = e.target.value;
        const formValidater = new SubmitRegister({ name: inputValue });

        formValidater.validateName()
            ? setInputBorderColorName('green')
            : setInputBorderColorName('red');

        setName(inputValue);
    };

    const validateEmail = (e) => {
        const inputValue = e.target.value;
        const formValidater = new SubmitRegister({ email: inputValue });

        formValidater.validateEmail()
            ? setInputBorderColorEmail('green')
            : setInputBorderColorEmail('red');

        setEmail(inputValue);
    };

    const validatePassword = (e) => {
        const inputValue = e.target.value;
        const formValidater = new SubmitRegister({ password: inputValue });

        formValidater.validatePassword()
            ? setInputBorderColorPassword('green')
            : setInputBorderColorPassword('red');

        setPassword(inputValue);
    };

    const validatePassword2 = (e) => {
        const inputValue = e.target.value;
        password === inputValue
            ? setInputBorderColorPassword2('green')
            : setInputBorderColorPassword2('red');

        setPassword2(inputValue);
    };

    return register ? (
        <div>
            <Modal>
                <h2>register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <p>使用者名稱</p>
                            <Input
                                type="text"
                                onChange={validateName}
                                style={{ borderColor: inputBorderColorName }}
                                autoFocus
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>電子信箱</p>
                            <Input
                                type="email"
                                onChange={validateEmail}
                                style={{ borderColor: inputBorderColorEmail }}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>密碼</p>
                            <Input
                                type="password"
                                onChange={validatePassword}
                                style={{
                                    borderColor: inputBorderColorPassword,
                                }}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>確認密碼</p>
                            <Input
                                type="password"
                                onChange={validatePassword2}
                                style={{
                                    borderColor: inputBorderColorPassword2,
                                }}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </Modal>
            <BackDrop setFunction={setRegister} />
        </div>
    ) : null;
};

export default Register;

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

const Input = styled.input`
    border: 2px solid black;
`;
