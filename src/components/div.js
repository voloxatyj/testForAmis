import styled from 'styled-components';

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 230px;
  height: 36px;
  margin-top: 25px;
  background: rgba(243, 243, 250, 1);
  border: 2px solid transparent;
  border-radius: 50px;

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
