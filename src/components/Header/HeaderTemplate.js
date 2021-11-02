import styled from 'styled-components';

export const Title = styled.h1`
  width: 755px;
  height: 24px;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.textHeader};
  font-family: 'Nunito', sans-serif;
`;

export const Nav = styled.nav`
  margin-top: 30px;
  display: ${({ show }) => (show ? 'none' : 'flex')};
  height: 48px;
  margin: 20px 0px 40px 0px;
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
  width: 33.3%;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  box-shadow: ${({ activated, theme }) =>
    activated
      ? `inset 0px -3px 0px ${theme.primary}`
      : `inset 0px -2px 0px ${theme.border}`};
`;

export const NavLink = styled.p`
  text-decoration: none;
  color: ${({ activated, theme }) =>
    activated ? theme.primary : theme.textHeader};
  cursor: pointer;
`;

export const IconButton = styled.button`
  background: none;
  border-radius: 20%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
`;
