import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const BodyBackground = styled.div`
  background: #eceef2;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const FormBackground = styled.div`
  width: 550px;
  height: 763px;
  background: #ffffff;
  border-radius: 20px;
  margin-left: 30%;
  padding: 56px 50px;
`;

export const Title = styled.h1`
  width: 755px;
  height: 24px;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  font-family: 'Nunito', sans-serif;
`;

export const Nav = styled.nav`
  margin-top: 30px;
  display: flex;
  width: 515px;
  height: 48px;
  background-color: #ffffff;
  margin: 20px 0px 61px 0px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  height: 48px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: inset 0px -2px 0px #aaaaaa; */
  width: 33.3%;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  box-shadow: ${({ Activated }) =>
    Activated ? 'inset 0px -3px 0px #074ee8' : 'inset 0px -2px 0px #aaaaaa'};
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ Activated }) => (Activated ? '#074ee8' : '#111111')};
  // color: #111111;
  cursor: pointer;
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
`;

export const InputText = styled.input`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  width: 93.64%;
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
