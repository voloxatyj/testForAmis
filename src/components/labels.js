import styled from 'styled-components';

export const LabelFN = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 0px;

  &::before {
    content: 'Full Name';
    font-size: 12px;
    padding: 0 15px;
  }
`;

export const LabelEmail = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 0px;

  &::before {
    content: 'Email';
    font-size: 12px;
    padding: 0 15px;
  }
`;

export const LabelPassword = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 0px;

  &::before {
    content: 'Password';
    font-size: 12px;
    padding: 0 15px;
  }
`;

export const LabelConfirmPassword = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  font-size: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 0px;

  &::before {
    content: 'Repeat password';
    font-size: 12px;
    padding: 0 15px;
  }
`;
