import React, { useState } from 'react';
import { SQLInjectionValidation } from '../functions/validations';

function useErros(fields, validations) {
  const [erros, setErros] = useState(createInitialState(fields));

  function firstValidation(e) {
    const { name, value } = e.target;
    const newState = { ...erros };
    newState[name].valid = SQLInjectionValidation(value);
    newState[name].message = newState[name]['valid']
      ? ''
      : 'Invalid Characters';
    setErros(newState);
    return newState[name].valid;
  }

  function requiredValidation(e) {
    const { name } = e.target;
    const newState = { ...erros };
    newState[name].valid = false;
    newState[name].message = 'Required Field';
    setErros(newState);
  }

  function validateField(e) {
    const valid = firstValidation(e);
    if (!valid) {
      return false;
    }
    const { name, value } = e.target;
    const newState = { ...erros };
    console.log(validations);
    console.log(name);
    newState[name].valid = validations[name](value);
    newState[name].message = newState[name]['valid']
      ? ''
      : 'Invalid ' + name.charAt(0).toUpperCase() + name.slice(1);
    setErros(newState);
  }

  return [erros, validateField, requiredValidation];
}

function createInitialState(fields) {
  const initialState = {};
  for (let field in fields) {
    initialState[field] = { valid: true, message: '' };
  }
  return initialState;
}

export default useErros;
