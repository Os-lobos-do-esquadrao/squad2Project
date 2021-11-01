// * React * //
import React, { useState } from 'react';
// * Component * //
import { BodyBackground, FormBackground } from './components/Base/BaseTemplate';
import Header from './components/Header';
import AlertPopup from './components/Alert';
// * GlobalStyle * //
import { GlobalStyle } from './assets/GlobalStyle';
// * Page * //
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';

const App = () => {
  // * State * //
  const [page, setPage] = useState(0);
  const [showAlert, setShow] = useState(false);

  const pages = [
    <FirstPage setPage={setPage} />,
    <SecondPage setPage={setPage} />,
    <ThirdPage setShow={setShow} setPage={setPage} />,
    <FourthPage setPage={setPage} />,
  ];

  // * Return * //
  return (
    <>
      <GlobalStyle />
      <BodyBackground>
        <FormBackground invisible={showAlert}>
          <Header setPage={setPage} page={page} />

          {pages[page]}
        </FormBackground>
        {showAlert && <AlertPopup setShow={setShow} />}
      </BodyBackground>
    </>
  );
};

export default App;
