import styled from 'styled-components';

export const Input = styled.input`
  width: 230px;
  height: 36px;
  padding: 0 15px;
  border-radius: 50px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

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
