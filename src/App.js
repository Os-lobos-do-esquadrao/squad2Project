// * React * //
import React, { useState } from 'react';
// * Router * //
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

import { BodyBackground, FormBackground } from './components/Base';
import Header from './components/Header';
// import FirstTab from './components/FirstTab';
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
// import SecondTab from './components/SecondTab';
// import ThirdTab from './components/ThirdTab';

const App = () => {
  let history = useHistory();
  let [state, setState] = useState([]);
  let [firstPage, setFirtstPage] = useState();
  let [secondPage, setSecondPage] = useState();
  let [thirdPage, setThirdPage] = useState();
  const OnSubmit = (values) => {
    let aux = state;
    aux = [...aux, ...values];
    console.log(aux);
    setState(aux);
  };
  console.log(state);

  return (
    <>
      {
        <Router>
          <BodyBackground>
            <FormBackground>
              <Header />
              <Switch>
                <Route exact path="/">
                  {/* <FirstTab /> */}
                  <FirstPage OnSubmit={OnSubmit} />
                </Route>
                <Route path="/social">
                  <SecondPage OnSubmit={OnSubmit} />
                </Route>
                <Route path="/certificates">
                  <ThirdPage OnSubmit={OnSubmit} />
                </Route>
                {/* <Route path="/representation"><ThirdTab /></Route> */}
              </Switch>
            </FormBackground>
          </BodyBackground>
        </Router>
      }
    </>
  );
};
export default App;
