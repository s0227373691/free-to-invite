import React, { useState } from 'react';
import styled from 'styled-components';

import BackDrop from './commom/backDrop';

import SubmitRegister from '../lib/class/submitRegister';

const Register = ({ register, setRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [inputNameBorderColor, setInputNameBorderColor] = useState('black');

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

    const validateName = (e) => {
        const name = e.target.value;
        setName(name);
        const formManager = new SubmitRegister({ name });
        formManager.validateName().isvalidateName
            ? setInputNameBorderColor('green')
            : setInputNameBorderColor('red');
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
                                borderColor={inputNameBorderColor}
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
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>密碼</p>
                            <Input
                                type="password"
                                minLength="5"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>確認密碼</p>
                            <Input
                                type="password"
                                minLength="5"
                                onChange={(e) => setPassword2(e.target.value)}
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
    border: 2px solid;
    border-color: ${(borderColor) => borderColor};
    /* &:valid {
        border: 2px solid green;
    }
    &:invalid {
        border: 2px solid red;
    } */
`;
