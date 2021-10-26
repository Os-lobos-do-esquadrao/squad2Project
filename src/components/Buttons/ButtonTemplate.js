import styled from 'styled-components';

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
