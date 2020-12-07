import styled from 'styled-components';

export const Input = styled.input`
    width: ${({ width }) => width};
    padding: 8px;
    font-size: 14px;
    border: 1px solid;
    border-radius: 5px;
`;

export const InputClearDefault = styled.input`
    width: 100%;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`;
