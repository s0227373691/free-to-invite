import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import BackDrop from "./commom/backDrop";

const Register = ({ register, setRegister }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = (e) => {
        //TODO 前端未寫表單驗證
        Axios.post("http://localhost:3000/api/users", {
            name: "tester1",
            email: "tester1@gmail.com",
            password: "tester1",
        })
            .then((res) => {
                alert("註冊成功!!");
                console.log(res.data);
            })
            .catch((err) => {
                alert("註冊失敗!!");
                console.error(err.message);
            });
        e.preventDefault();
    };

    return register ? (
        <div>
            <Modal>
                <h2>register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <p>使用者名稱</p>
                            <input
                                type="text"
                                minLength="3"
                                onChange={(e) => setName(e.target.value)}
                                value="tester1"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>電子信箱</p>
                            <input
                                type="email"
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
                    <div>
                        <label>
                            <p>確認密碼</p>
                            <input
                                type="password"
                                minLength="5"
                                onChange={(e) => setPassword2(e.target.value)}
                                value="tester1"
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
