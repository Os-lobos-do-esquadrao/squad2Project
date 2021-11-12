import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const Button = styled.button.attrs({ type: 'submit' })`
  position: absolute;
  display: flex;
  font-family: 'Nunito', sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0px 12px;
  width: 85px;
  height: 42px;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.buttonText};
  bottom: 0;
  right: 0;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  p {
    margin-right: auto;
  }
`;
