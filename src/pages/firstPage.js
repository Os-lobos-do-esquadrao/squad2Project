// * React * //
import React, { useState } from 'react';
// * Router * //
import { useHistory } from 'react-router';
// * Component * //
import { Form } from '../components/Base';
import {
  DefaultInput,
  EmailPhoneInput,
  BirthdayInput,
} from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Function * //
import { phoneMask, calcAge } from '../functions/firstPage';
// * Icon * //
import { ChevronRight } from 'react-feather';

const FirstPage = ({ OnSubmit, setUrl }) => {
  let history = useHistory();
  const [fullName, setName] = useState('');
  const [nickName, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState({
    day: '',
    month: '',
    year: '',
    age: '',
  });
  const [check, setCheck] = useState(false);

  const setAge = () => {
    const day = birthday.day;
    const month = birthday.month;
    const year = birthday.year;
    const age = calcAge(day, month, year);
    setBirthday({
      ...birthday,
      age: age,
    });
  };
  const setMask = (e) => {
    setPhone(phoneMask(e));
  };
  const handleDay = (day) => {
    setBirthday({ ...birthday, day });
  };
  const handleMonth = (month) => {
    setBirthday({ ...birthday, month });
  };
  const handleYear = (year) => {
    setBirthday({ ...birthday, year });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        OnSubmit(fullName, nickName, email, phone, birthday, check);
        setUrl('/social');
      }}
    >
      <DefaultInput
        id="FullName"
        setValue={setName}
        placeholder="Foo Bar"
        value={fullName}
        text="Full Name *"
        required={true}
      />

      <DefaultInput
        id="Nickname"
        setValue={setNickname}
        placeholder="Juanito"
        value={nickName}
        text="Nickname"
        required={false}
      />

      <EmailPhoneInput
        email={email}
        phone={phone}
        setEmail={setEmail}
        phoneMask={setMask}
      />

      <BirthdayInput
        day={birthday.day}
        month={birthday.month}
        year={birthday.year}
        age={birthday.age}
        setDay={handleDay}
        setMonth={handleMonth}
        setYear={handleYear}
        setAge={setAge}
      />

      <Checkbox checked={check} setCheck={setCheck} />

      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

export default FirstPage;
