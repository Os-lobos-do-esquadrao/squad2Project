import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BoxInput = styled.div`
  margin: ${({ error }) => (error ? '0px 0px 26px 0px' : '0px 0px 48px 0px')};
  width: 100%;
  @media (max-width: ${baseWidth.sm}) {
    margin: ${({ error }) => (error ? '0px 0px 2px 0px' : '0px 0px 24px 0px')};
  }
`;

export const Label = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.label};
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ theme, error }) =>
    `2px solid ${error ? theme.danger : theme.border}`};
  color: ${({ theme }) => theme.textHeader};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  text-indent: 10px;
  display: block;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  margin: 4px 0 0 0;
  &:focus {
    outline: none;
  }
`;
