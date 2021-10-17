import styled from 'styled-components';

export const BoxEmailPhone = styled.div`
  margin: 0px 0px 24px 0px;
`;

export const BoxEmail = styled.div`
  display: inline-block;
  margin: 0 10px 0 0;
  width: 60%;
`;

export const BoxPhone = styled.div`
  display: inline-block;
  width: 33.64%;
`;

export const BirthdayTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  margin-bottom: 14px;
  line-height: 16px;
  color: #767676;
`;

export const BoxInputNumber = styled.div`
  display: inline-block;
  width: 21%;
  margin: 0 20px 0 0;
`;

export const InputNumber = styled.input.attrs({ type: 'number' })`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  text-indent: 10px;
  display: block;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  width: 100%;
`;

export const BoxCheckbox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 250px;
  height: 28px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: static;
  width: 20px;
  height: 20px;
  background: #074ee8;
  border: 2px solid #074ee8;
  border-radius: 2px;
  margin: 0 8px 0 0;
`;

export const LabelCheckbox = styled.label`
  position: static;
  width: 214px;
  height: 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #111;
`;
