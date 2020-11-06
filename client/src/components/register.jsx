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

        const formValue = {
            name,
            email,
            password,
            password2,
        };
        const formManager = new SubmitRegister(formValue);

        formManager.validate().postToServer();
        // formManager.postToServer();
    };

    const validateName = (e, validateType) => {
        const inputValue = e.target.value;
        const formValidater = new SubmitRegister(inputValue);

        switch (validateType) {
            case 'name':
                formValidater.validateName()
                    ? setInputBorderColorName('green')
                    : setInputBorderColorName('red');

                setName(inputValue);
                break;
            case 'email':
                formValidater.validateEmail()
                    ? setInputBorderColorEmail('green')
                    : setInputBorderColorEmail('red');

                setEmail(inputValue);
                break;
            case 'password':
                formValidater.validatePassword()
                    ? setInputBorderColorPassword('green')
                    : setInputBorderColorPassword('red');

                setPassword(inputValue);
                break;
            case 'password2':
                password === inputValue
                    ? setInputBorderColorPassword2('green')
                    : setInputBorderColorPassword2('red');
                setPassword2(inputValue);
                break;
            default:
                console.log('請輸入驗證表單類型');
                break;
        }
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
                                onChange={(e) => validateName(e, 'name')}
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
                                onChange={(e) => validateName(e, 'email')}
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
                                onChange={(e) => validateName(e, 'password')}
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
                                onChange={(e) => validateName(e, 'password2')}
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
