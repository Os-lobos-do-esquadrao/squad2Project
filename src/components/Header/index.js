import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Title, Nav, NavList, NavItem, NavLink } from './HeaderElements';

function Header() {
  let history = useHistory();
  const [actived, setActived] = useState('/');
  const [state, setState] = useState({
    activatedBase: true,
    activatedSocial: false,
    activatedCertificates: false,
  });

  const changeForm = (activatedNav) => {
    let activatedBase = activatedNav === 'b';
    let activatedSocial = activatedNav === 's';
    let activatedCertificates = activatedNav === 'c';
    setState({
      ...state,
      activatedBase,
      activatedSocial,
      activatedCertificates,
    });
  };

  useEffect(() => {
    if (!state.fetched) {
      let activatedBase = actived === '/';
      let activatedSocial = actived === '/social';
      let activatedCertificates = actived === '/certificates';
      setState({
        ...state,
        activatedBase,
        activatedSocial,
        activatedCertificates,
      });
      history.push(actived);
    }
  }, [actived]);

  return (
    <header>
      <div>
        {' '}
        <div>
          <Title>Team Sign Up</Title>
        </div>
      </div>
      <Nav>
        <NavList>
          <NavItem activated={state.activatedBase}>
            <NavLink
              onClick={(e) => changeForm('b')}
              to="/"
              activated={state.activatedBase}
            >
              Basic
            </NavLink>
          </NavItem>
          <NavItem activated={state.activatedSocial}>
            <NavLink
              onClick={(e) => changeForm('s')}
              to="/social"
              activated={state.activatedSocial}
            >
              Social
            </NavLink>
          </NavItem>
          <NavItem activated={state.activatedCertificates}>
            <NavLink
              onClick={(e) => changeForm('c')}
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
}

export default Header;
