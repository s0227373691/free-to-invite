import React, { Fragment } from 'react';
import styled from 'styled-components';

import BackDrop from './commom/backDrop';

const Login = () => {
    return (
        <Fragment>
            <Modal>login</Modal>
            <BackDrop show={true} />
        </Fragment>
    );
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
