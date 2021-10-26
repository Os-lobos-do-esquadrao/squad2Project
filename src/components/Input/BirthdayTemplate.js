import styled from 'styled-components';

export const BirthdayBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const BirthdayTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  margin-bottom: 14px;
  line-height: 16px;
  color: #767676;
  text-align: justify;
`;

export const BoxInputNumber = styled.div`
  display: inline-block;
  width: 23.5%;
  text-align: justify;
  &:not(:first-child):not(:last-child) {
    margin: 0 2% 0 0;
  }
`;

export const InputNumber = styled.input.attrs({ type: 'number' })`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  text-indent: 10px;
  display: block;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
