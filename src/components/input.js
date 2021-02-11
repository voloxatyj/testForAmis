import styled from 'styled-components';

export const Input = styled.input`
  width: 230px;
  height: 36px;
  padding: 0 15px;
  border-radius: 50px;
  margin-top: 5px;
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

  &.sign-up {
    background: ${(props) => {
      if (props?.about) {
        return 'rgba(255, 102, 131, 0.2)';
      } else return 'rgba(243, 243, 250, 1)';
    }};
    border: 2px solid
      ${(props) => {
        if (!props?.value) {
          return 'transparent';
        } else if (props?.value?.length > 1 && !props?.about?.length) {
          return 'green';
        } else {
          return 'red';
        }
      }};
  }

  &.sign-in {
    background: ${(props) => {
      if (props?.about) {
        return 'rgba(255, 102, 131, 0.2)';
      } else return 'rgba(243, 243, 250, 1)';
    }};
    border: 2px solid
      ${(props) => {
        if (!props?.about) {
          return 'transparent';
        } else {
          return 'red';
        }
      }};
  }
`;
