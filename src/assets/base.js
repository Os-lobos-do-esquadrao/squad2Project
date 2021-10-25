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

export const Form = styled.form`
  height: 600px;
  position: relative;
  /* opacity: ${({ alert }) => alert && 0.3}; */
  pointer-events: ${({ alert }) => alert && 'none'};
`;

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
  margin: 0px 0px 48px 0px;
  width: 100%;
`;

export const InputText = styled.input`
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

export const Button = styled.button.attrs({ type: 'submit' })`
  position: absolute;
  display: flex;
  /* display: inline-block; */
  font-family: 'Nunito', sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0px 12px;
  width: 85px;
  height: 42px;
  background: #074ee8;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  bottom: 0;
  right: 0;
  cursor: pointer;

  p {
    margin-right: auto;
  }
`;
