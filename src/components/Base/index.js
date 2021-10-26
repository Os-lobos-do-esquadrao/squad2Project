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

export const Cutton = styled.button.attrs({ type: 'submit' })`
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
