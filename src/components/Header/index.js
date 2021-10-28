// * React * //
import React, { useEffect, useState } from 'react';
// * Router * //
import { useHistory, useLocation } from 'react-router';
// * Template * //
import { Title, Nav, NavList, NavItem, NavLink } from './HeaderTemplate';

const Header = ({ url, setUrl }) => {
  let history = useHistory();

  const [state, setState] = useState({
    activatedBase: true,
    activatedSocial: false,
    activatedCertificates: false,
  });

  const [show, setShow] = useState(false);

  const configUrl = (newUrl) => {
    if (newUrl !== '/representation') {
      show && setShow(!show);
      let activatedBase = newUrl === '/';
      let activatedSocial = newUrl === '/social';
      let activatedCertificates = newUrl === '/certificates';
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
    setUrl(activatedNav);
    configUrl(activatedNav);
  };

  useEffect(() => {
    configUrl(url);
    history.push(url);
  }, [url]);

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
          <NavItem activated={state.activatedBase}>
            <NavLink
              onClick={(e) => changeForm('/')}
              to="/"
              activated={state.activatedBase}
            >
              Basic
            </NavLink>
          </NavItem>
          <NavItem activated={state.activatedSocial}>
            <NavLink
              onClick={(e) => changeForm('/social')}
              to="/social"
              activated={state.activatedSocial}
            >
              Social
            </NavLink>
          </NavItem>
          <NavItem activated={state.activatedCertificates}>
            <NavLink
              onClick={(e) => changeForm('/certificates')}
              to="/certificates"
              activated={state.activatedCertificates}
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
