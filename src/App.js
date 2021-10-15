import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Base from './components/base/index';

const App = ({}) => {
  const [state, setState] = useState({});
  return (
    <Router>
      <Base />
    </Router>
  );
};
export default App;
