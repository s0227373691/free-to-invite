import styled from 'styled-components';

const BaseInput = styled.input`
    width: 100%;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export default BaseInput;
