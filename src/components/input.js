import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  border: none;
  background: transparent;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.8);
  }

  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.8);
  }

  &:focus {
    outline: none;
  }
`;
