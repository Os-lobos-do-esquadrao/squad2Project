// * React * //
import React, { useState } from 'react';
// * Router * //
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
// * Component * //
import { BodyBackground, FormBackground } from './components/Base';
import Header from './components/Header';
// * Page * //
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';

const App = () => {
  // let history = useHistory();

  const [state, setState] = useState([]);
  const [url, setUrl] = useState('/');
  const [firstPage, setFirtstPage] = useState();
  const [secondPage, setSecondPage] = useState();
  const [thirdPage, setThirdPage] = useState();

  const OnSubmit = (values) => {
    let aux = state;
    aux = [...aux, values];
    // console.log(aux);
    setState(aux);
  };

  // console.log(state);

  const changeUrl = (newUrL) => {
    console.log(newUrL);
    setUrl(newUrL);
  };

  return (
    <>
      {
        <Router>
          <BodyBackground>
            <FormBackground>
              <Header url={url} setUrl={changeUrl} />
              <Switch>
                <Route exact path="/">
                  <FirstPage OnSubmit={OnSubmit} setUrl={changeUrl} />
                </Route>
                <Route path="/social">
                  <SecondPage OnSubmit={OnSubmit} setUrl={changeUrl} />
                </Route>
                <Route path="/certificates">
                  <ThirdPage OnSubmit={OnSubmit} setUrl={changeUrl} />
                </Route>
                <Route path="/representation">
                  <FourthPage
                    values={state}
                    setState={setState}
                    setUrl={changeUrl}
                  />
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
