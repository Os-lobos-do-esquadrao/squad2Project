import styled from 'styled-components';

export const BodyBackground = styled.div`
  background: #eceef2;

  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const FormBackground = styled.div`
  width: 617px;
  height: 763px;
  background: #ffffff;
  border-radius: 20px;
  /* margin-left: 30%; */
  padding: 56px 50px;
`;

//! Parte dos Inputs Genericos

export const LabelText = styled.label`
  /* font-size: 14px;
  line-height: 16px;
  display: flex;
  font-family: 'Nunito', sans-serif;
  color: #767676;
  width: 100px;*/
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #767676;
`;

export const BoxInput = styled.div`
  margin: 0px 0px 28px 0px;
`;

export const InputText = styled.input`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  text-indent: 10px;
  display: block;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  margin: 4px 0 0 0;
  /* 48px */
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  display: flex;
  font-family: 'Nunito', sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0px 12px;
  line-height: 18px;
  width: 81px;
  height: 40px;
  background: #074ee8;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  margin: 41px 0 0px 426px;
  cursor: pointer;
`;
