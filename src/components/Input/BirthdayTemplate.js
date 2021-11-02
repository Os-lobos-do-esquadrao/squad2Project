import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BirthdayBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const BirthdayTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  margin-bottom: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.label};
  text-align: justify;
`;

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const BoxInputNumber = styled.div`
  display: inline-block;
  width: 20%;
  text-align: justify;

  @media (max-width: ${baseWidth.sm}) {
    width: 45%;
    margin: 0 0 8px 0;
  }
`;

export const InputNumber = styled.input.attrs({ type: 'number' })`
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ theme }) => `2px solid ${theme.border}`};
  color: ${({ theme }) => theme.textHeader};
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  text-indent: 10px;
  display: block;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  margin: 4px 0 0 0;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;
