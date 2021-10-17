//REACT
import React, { useEffect, useState } from 'react';
import { BoxInput, LabelText, InputText, Button } from '../base/BaseElements';
import {
  BoxEmailPhone,
  BoxEmail,
  BoxPhone,
  BirthdayTitle,
  BoxInputNumber,
  InputNumber,
  BoxCheckbox,
  Checkbox,
  LabelCheckbox,
} from './FirstTabElements';

const FirstTab = () => {
  const [state, setState] = useState({
    day: '',
    month: '',
    year: '',
    age: '',
    phone: '',
  });

  useEffect(() => {
    if (state.day && state.month && state.year) {
      setAge(`${state.year}/${state.month}/${state.day}`);
    }
  }, [state.day, state.month, state.year]);

  const handleDay = (e) => {
    setState({ ...state, day: e.target.value });
  };

  const handleMonth = (e) => {
    setState({ ...state, month: e.target.value });
  };

  const handleYear = (e) => {
    setState({ ...state, year: e.target.value });
  };

  const phoneMask = (e) => {
    let phone_aux = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    let phone = `(${phone_aux[1]}) ${phone_aux[2]}-${phone_aux[3]}`;

    setState({ ...state, phone: phone });
  };

  function setAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    console.log(m);
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 0 && age <= 110) {
      setState({ ...state, age });
    } else {
      setState({ ...state, age: 'Invalid Age' });
    }
  }

  return (
    <form action="#">
      <BoxInput>
        <LabelText for="FullName">Full Name *</LabelText>
        <InputText id="FullName" placeholder="Foo Bar" required />
      </BoxInput>

      <BoxInput>
        <LabelText for="Nickname">Nickname</LabelText>
        <InputText id="Nickname" placeholder="Juanito" required />
      </BoxInput>

      <BoxInput>
        <BoxEmailPhone>
          <BoxEmail>
            <LabelText for="Email">Email *</LabelText>
            <InputText id="Email" placeholder="foo@bar.com" required />
          </BoxEmail>
          <BoxPhone>
            <LabelText for="Phone">Phone</LabelText>
            <InputText
              onChange={(e) => phoneMask(e)}
              value={state.phone}
              id="Phone"
              placeholder="(83) 00000-0000"
              required
            />
          </BoxPhone>
        </BoxEmailPhone>
      </BoxInput>

      <BirthdayTitle>Birthday *</BirthdayTitle>

      <BoxInputNumber>
        <LabelText for="Day">Day</LabelText>
        <InputNumber
          value={state.day}
          onChange={(e) => handleDay(e)}
          id="Day"
          placeholder="01"
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Month">Month</LabelText>
        <InputNumber
          value={state.month}
          onChange={(e) => handleMonth(e)}
          id="Month"
          placeholder="01"
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Year">Year</LabelText>
        <InputNumber
          value={state.year}
          onChange={(e) => handleYear(e)}
          id="Year"
          placeholder="1910"
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Age">Age</LabelText>
        <InputText value={state.age} id="Age" disabled />
      </BoxInputNumber>

      <BoxCheckbox>
        <Checkbox id="aprove" />
        <LabelCheckbox for="aprove">
          I accept the terms and privacy
        </LabelCheckbox>
      </BoxCheckbox>
      <Button>Next</Button>
    </form>
  );
};
export default FirstTab;
