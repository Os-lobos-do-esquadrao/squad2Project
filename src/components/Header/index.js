// * React * //
import React, { useEffect, useState } from 'react';
// * Template * //
import { Title, Nav, NavList, NavItem, NavLink } from './HeaderTemplate';

const Header = ({ page, setPage }) => {
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
        <div>
          <Title>{show ? 'Registered Data' : 'Team Sign Up'}</Title>
        </div>
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
