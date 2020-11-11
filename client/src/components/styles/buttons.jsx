import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    background: ${({ bgColor }) => bgColor};

    border: 0px;
    outline-style: none;
    outline-style: none;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #adadad;
    }
`;
