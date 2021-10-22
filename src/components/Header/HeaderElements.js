import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  /* width: 515px; */
  height: 48px;
  background-color: #ffffff;
  margin: 20px 0px 40px 0px;
  border: 1px solid black;
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

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ Activated }) => (Activated ? '#074ee8' : '#111111')};
  // color: #111111;
  cursor: pointer;
`;
