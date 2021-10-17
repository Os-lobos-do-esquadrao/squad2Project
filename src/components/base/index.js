import React from 'react';
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
              <NavItem style={{ boxShadow: 'inset 0px -3px 0px #074ee8' }}>
                <NavLink style={{ color: '#074ee8' }}>Basic</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Social</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Certificates</NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </header>
        <main>
          <FirstTab />
          {/* <SecondTab /> */}
          {/* <ThirdTab /> */}
        </main>
      </FormBackground>
    </BodyBackground>
  );
}

export default Base;
