//REACT
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Form,
  BoxInput,
  LabelText,
  InputText,
  Button,
} from '../../assets/base';
import {
  BoxEmailPhone,
  BoxEmail,
  BoxPhone,
  BirthdayBox,
  BirthdayTitle,
  BoxInputNumber,
  InputNumber,
  BoxCheckbox,
  Checkbox,
  LabelCheckbox,
} from './FirstTabElements';

import { ChevronRight } from 'react-feather';

const FirstTab = () => {
  let history = useHistory();
  const [state, setState] = useState({
    day: '',
    month: '',
    year: '',
    age: '',
    phone: '',
  });
  const [check, setCheck] = useState(false);
  // useEffect(() => {
  //   if (state.day && state.month && state.year) {
  //     setAge(`${state.year}/${state.month}/${state.day}`);
  //   }
  // }, [state.day, state.month, state.year]);

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

  function setAge() {
    if (state.day && state.month && state.year) {
      let dateString = `${state.year}/${state.month}/${state.day}`;
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age >= 0 && age <= 110) {
        setState({ ...state, age });
      } else {
        setState({ ...state, age: 'Invalid Age' });
      }
    }
  }

  return (
    <Form onSubmit={() => history.push('/social')}>
      <BoxInput>
        <LabelText for="FullName">Full Name *</LabelText>
        <InputText id="FullName" placeholder="Foo Bar" required />
      </BoxInput>

      <BoxInput>
        <LabelText for="Nickname">Nickname</LabelText>
        <InputText id="Nickname" placeholder="Juanito" />
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
            />
          </BoxPhone>
        </BoxEmailPhone>
      </BoxInput>

      <BirthdayBox>
        <BirthdayTitle>Birthday *</BirthdayTitle>

        <BoxInputNumber>
          <LabelText for="Day">Day</LabelText>
          <InputNumber
            value={state.day}
            onChange={(e) => handleDay(e)}
            onBlur={() => setAge()}
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
            onBlur={() => setAge()}
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
            onBlur={() => setAge()}
            id="Year"
            placeholder="1911"
            required
          />
        </BoxInputNumber>

        <BoxInputNumber>
          <LabelText for="Age">Age</LabelText>
          <InputText value={state.age} id="Age" disabled />
        </BoxInputNumber>
      </BirthdayBox>

      <BoxCheckbox>
        <Checkbox
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
        />
        <LabelCheckbox>I accept the terms and privacy</LabelCheckbox>
      </BoxCheckbox>

      {/* <BoxCheckbox>
        <Checkbox id="aprove" required />
        <LabelCheckbox for="aprove">
          I accept the terms and privacy
        </LabelCheckbox>
      </BoxCheckbox> */}

      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};
export default React.memo(FirstTab);
