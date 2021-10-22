import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BodyBackground, FormBackground } from './assets/base';

import Header from './components/Header';
import FirstTab from './components/FirstTab';
import SecondTab from './components/SecondTab';
import ThirdTab from './components/ThirdTab';

const App = () => {
  return (
    <>
      {
        <Router>
          <BodyBackground>
            <FormBackground>
              <Header />
              <Switch>
                <Route exact path="/">
                  <FirstTab />
                </Route>
                <Route path="/social">
                  <SecondTab />
                </Route>
                <Route path="/certificates">
                  <ThirdTab />
                </Route>
                <Route path="/representation">
                  <ThirdTab />
                </Route>
              </Switch>
            </FormBackground>
          </BodyBackground>
        </Router>
      }
    </>
  );
};
export default App;
