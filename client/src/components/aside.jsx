import React from 'react';
import styled from 'styled-components';

const Aside = () => {
    return <SideBar></SideBar>;
};

const SideBar = styled.aside`
    width: 200px;
    height: 500px;
    flex-shrink: 0;
    background: #3498db;
    position: fixed;
`;
export default Aside;
