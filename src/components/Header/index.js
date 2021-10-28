// * React * //
import React, { useEffect, useState } from 'react';
// * Template * //
import { Title, Nav, NavList, NavItem, NavLink } from './HeaderTemplate';

const Header = ({ page, setPage }) => {
  const [state, setState] = useState({
    activatedBase: true,
    activatedSocial: false,
    activatedCertificates: false,
  });

  const [show, setShow] = useState(false);

  const configUrl = (newUrl) => {
    if (newUrl !== 3) {
      show && setShow(!show);
      let activatedBase = newUrl === 0;
      let activatedSocial = newUrl === 1;
      let activatedCertificates = newUrl === 2;
      setState({
        ...state,
        activatedBase,
        activatedSocial,
        activatedCertificates,
      });
    } else {
      setShow(!show);
    }
  };

  const changeForm = (activatedNav) => {
    setPage(activatedNav);
    configUrl(activatedNav);
  };

  useEffect(() => {
    configUrl(page);
  }, [page]);

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
            <NavLink onClick={(e) => changeForm(0)} activated={page === 0}>
              Basic
            </NavLink>
          </NavItem>
          <NavItem activated={page === 1}>
            <NavLink onClick={(e) => changeForm(1)} activated={page === 1}>
              Social
            </NavLink>
          </NavItem>
          <NavItem activated={page === 2}>
            <NavLink onClick={(e) => changeForm(2)} activated={page === 2}>
              Certificates
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </header>
  );
};

export default Header;
