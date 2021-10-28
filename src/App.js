// * React * //
import React, { useState } from 'react';
// * Component * //
import { BodyBackground, FormBackground } from './components/Base';
import Header from './components/Header';
// * Page * //
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';
import FourthPage from './pages/fourthPage';

const App = () => {
  const [page, setPage] = useState(0);

  return (
    <BodyBackground>
      <FormBackground>
        <Header setPage={setPage} page={page} />

        {page === 0 && <FirstPage setPage={setPage} />}
        {page === 1 && <SecondPage setPage={setPage} />}
        {page === 2 && <ThirdPage setPage={setPage} />}
        {page === 3 && <FourthPage setPage={setPage} />}
      </FormBackground>
    </BodyBackground>
  );
};

export default App;
