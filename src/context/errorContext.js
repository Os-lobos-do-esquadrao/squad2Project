import React, { createContext } from 'react';
import {
  FullNameValidation,
  NickNameValidation,
  EmailValidation,
  PhoneValidation,
  DateValidation,
  GithubValidation,
  LinkedinValidation,
} from '../functions/validations';

const Context = createContext();

function ErrorContextProvider({ children }) {
  const validationsFunctions = {
    fullName: FullNameValidation,
    nickName: NickNameValidation,
    email: EmailValidation,
    phone: PhoneValidation,
    birthday: DateValidation,
    github: GithubValidation,
    linkedin: LinkedinValidation,
    institution: FullNameValidation,
    graduation: FullNameValidation,
    teamName: NickNameValidation,
  };
  return (
    <Context.Provider value={validationsFunctions}>{children}</Context.Provider>
  );
}

export { Context, ErrorContextProvider };
