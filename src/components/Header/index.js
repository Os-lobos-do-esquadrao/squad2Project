// * React * //
import React, { useEffect, useState } from 'react';
// * Template * //
import {
  Content,
  IconButton,
  Title,
  Nav,
  NavList,
  NavItem,
  NavLink,
} from './HeaderTemplate';
// * Icon * //
import { Sun, Moon } from 'react-feather';

const Header = ({ page, setPage, theme, setTheme }) => {
  // * State * //
  const [show, setShow] = useState(false);

  // * Function * //
  const changeForm = (activatedNav) => {
    setPage(activatedNav);
  };

  // * useEffect * //
  useEffect(() => {
    if (page !== 3) {
      setShow(false);
    } else {
      setShow(!show);
    }
  }, [page]);

  // * Return * //
  return (
    <header>
      <div>
        {' '}
        <Content>
          <Title>{show ? 'Registered Data' : 'Team Sign Up'}</Title>
          <IconButton onClick={() => setTheme(!theme)}>
            {theme ? (
              <Moon size={28} fill="white" />
            ) : (
              <Sun color="yellow" fill="yellow" size={28} />
            )}
          </IconButton>
        </Content>
      </div>
      <Nav show={show}>
        <NavList>
          <NavItem activated={page === 0}>
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
                changeForm(0);
              }}
              activated={page === 0}
            >
              Basic
            </NavLink>
          </NavItem>
          <NavItem activated={page === 1}>
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
                changeForm(1);
              }}
              activated={page === 1}
            >
              Social
            </NavLink>
          </NavItem>
          <NavItem activated={page === 2}>
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
                changeForm(2);
              }}
              activated={page === 2}
            >
              Certificates
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </header>
  );
};

export default Header;
