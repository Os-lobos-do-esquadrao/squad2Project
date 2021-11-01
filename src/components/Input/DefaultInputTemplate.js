import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BoxInput = styled.div`
  margin: 0px 0px 48px 0px;
  width: 100%;
  @media (max-width: ${baseWidth.sm}) {
    margin: 0px 0px 24px 0px;
  }
`;

export const Label = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #767676;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  text-indent: 10px;
  display: block;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  margin: 4px 0 0 0;
`;
