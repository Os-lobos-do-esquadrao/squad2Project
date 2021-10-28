// * React * //
import React from 'react';
// * Template * //
import { Alert, AlertError, CloseAlert } from './AlertElement';

const AlertPopup = ({ setShow }) => (
  <Alert>
    <AlertError> Error: </AlertError>
    <p>A maximum of 5 certificates</p>
    <CloseAlert onClick={() => setShow(false)}>OK</CloseAlert>
  </Alert>
);

export default AlertPopup;
