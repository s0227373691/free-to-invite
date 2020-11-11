import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from './styles/modals';
import { Input } from './styles/inputs';
import { Button } from './styles/buttons';
import BackDrop from './commom/backDrop';

import SubmitRegister from '../lib/class/submitRegister';

const Register = ({ register, setRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const borderColor = { border: '1px solid grey' };
    const [nameInputStyle, setNameInputStyle] = useState(borderColor);
    const [emailInputStyle, setEmailInputStyle] = useState(borderColor);
    const [passwordInputStyle, setPasswordInputStyle] = useState(borderColor);
    const [password2InputStyle, setPassword2InputStyle] = useState(borderColor);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 再次驗證表單
        const formValue = {
            name: name,
            email: email,
            password: password,
            setNameInputStyle: setNameInputStyle,
            setEmailInputStyle: setEmailInputStyle,
            setPasswordInputStyle: setPasswordInputStyle,
        };
        const formValidater = new SubmitRegister(formValue);

        formValidater.validateAll().postToServer();
    };

    const handleValidateName = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);

        const formValue = {
            name: inputValue,
            setNameInputStyle: setNameInputStyle,
        };
        const formValidater = new SubmitRegister(formValue);

        formValidater.validateName();
    };

    const handleValidateEmail = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        const formValue = {
            email: inputValue,
            setEmailInputStyle: setEmailInputStyle,
        };
        const formValidater = new SubmitRegister(formValue);

        formValidater.validateEmail();
    };

    const handleValidatePassword = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        setPassword2('');
        setPassword2InputStyle({ border: '1px solid grey' });

        const formValue = {
            password: inputValue,
            setPasswordInputStyle: setPasswordInputStyle,
        };
        const formValidater = new SubmitRegister(formValue);

        formValidater.validatePassword();
    };

    const handleValidatePassword2 = (e) => {
        const inputValue = e.target.value;
        setPassword2(inputValue);

        const inputStyle =
            password === inputValue
                ? { border: '2px solid green' }
                : { border: '2px solid red' };
        setPassword2InputStyle(inputStyle);
    };

    const RegisterComponent = (
        <>
            <Modal>
                <Title>註冊</Title>
                <Form onSubmit={handleSubmit}>
                    <FormRow>
                        <Input
                            type="text"
                            placeholder="使用者名稱"
                            width="100%"
                            value={name}
                            style={nameInputStyle}
                            onChange={handleValidateName}
                            autoFocus
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <Input
                            type="email"
                            placeholder="電子信箱"
                            width="100%"
                            value={email}
                            style={emailInputStyle}
                            onChange={handleValidateEmail}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <Input
                            type="password"
                            placeholder="密碼"
                            width="100%"
                            value={password}
                            style={passwordInputStyle}
                            onChange={handleValidatePassword}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <Input
                            type="password"
                            placeholder="確認密碼"
                            width="100%"
                            value={password2}
                            style={password2InputStyle}
                            onChange={handleValidatePassword2}
                            required
                        />
                    </FormRow>
                    <Button type="submit" bgColor="#8a8a8a">
                        立即註冊
                    </Button>
                </Form>
            </Modal>
            <BackDrop setFunction={setRegister} />
        </>
    );
    return register ? RegisterComponent : null;
};

export default Register;

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
