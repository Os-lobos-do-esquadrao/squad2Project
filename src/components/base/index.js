import React, { useEffect, useState } from 'react';
import {
  BodyBackground,
  FormBackground,
  Title,
  Nav,
  NavList,
  NavItem,
  NavLink,
} from './BaseElements';

import FirstTab from '../FirstTab';
import SecondTab from '../SecondTab';
import ThirdTab from '../ThirdTab';

function Base() {
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

  return (
    <BodyBackground>
      <FormBackground>
        <header>
          <div>
            {' '}
            <div>
              <Title>Team Sign Up</Title>
            </div>
          </div>
          <Nav>
            <NavList>
              <NavItem
                onClick={() => changeForm('b')}
                Activated={state.activatedBase}
              >
                <NavLink Activated={state.activatedBase}>Basic</NavLink>
              </NavItem>
              <NavItem
                onClick={() => changeForm('s')}
                Activated={state.activatedSocial}
              >
                <NavLink Activated={state.activatedSocial}>Social</NavLink>
              </NavItem>
              <NavItem
                onClick={() => changeForm('c')}
                Activated={state.activatedCertificates}
              >
                <NavLink Activated={state.activatedCertificates}>
                  Certificates
                </NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </header>
        <main>
          {state.activatedBase && <FirstTab />}

          {state.activatedSocial && <SecondTab />}

          {state.activatedCertificates && <ThirdTab />}
        </main>
      </FormBackground>
    </BodyBackground>
  );
}

export default Base;
