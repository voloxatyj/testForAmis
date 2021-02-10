import styled from 'styled-components';

export const Button = styled.button`
  width: 230px;
  height: 48px;
  border-radius: 50px;
  border: none;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
}

  &:focus {
    outline: none;
  }

  & a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
`;
