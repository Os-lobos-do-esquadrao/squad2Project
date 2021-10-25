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

  const phoneMask = (e) => {
    let phone_aux = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    let phone = `(${phone_aux[1]}) ${phone_aux[2]}-${phone_aux[3]}`;
    setPhone(phone);
  };

  function setAge() {
    if (birthday.day && birthday.month && birthday.year) {
      let dateString = `${birthday.year}/${birthday.month}/${birthday.day}`;
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age >= 0 && age <= 110) {
        setBirthday({ ...birthday, age });
      } else {
        setBirthday({ ...birthday, age: 'Invalid Age' });
      }
    }
  }

  const submit = (e) => {
    e.preventDefault();
    console.log({ fullName, nickName, email, phone, birthday });
  };

  return (
    <Form
      onSubmit={(e) => {
        submit(e);
      }}
    >
      <BoxInput>
        <LabelText for="FullName">Full Name *</LabelText>
        <InputText
          value={fullName}
          onChange={(e) => setName(e.target.value)}
          id="FullName"
          placeholder="Foo Bar"
          required
        />
      </BoxInput>

      <BoxInput>
        <LabelText for="Nickname">Nickname</LabelText>
        <InputText
          value={nickName}
          onChange={(e) => setNickname(e.target.value)}
          id="Nickname"
          placeholder="Juanito"
        />
      </BoxInput>

      <BoxInput>
        <BoxEmailPhone>
          <BoxEmail>
            <LabelText for="Email">Email *</LabelText>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="Email"
              type="email"
              placeholder="foo@bar.com"
              required
            />
          </BoxEmail>
          <BoxPhone>
            <LabelText for="Phone">Phone</LabelText>
            <InputText
              onChange={(e) => phoneMask(e)}
              value={phone}
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
            value={birthday.day}
            onChange={(e) => setBirthday({ ...birthday, day: e.target.value })}
            onBlur={() => setAge()}
            id="Day"
            placeholder="01"
            required
          />
        </BoxInputNumber>

        <BoxInputNumber>
          <LabelText for="Month">Month</LabelText>
          <InputNumber
            value={birthday.month}
            onChange={(e) =>
              setBirthday({ ...birthday, month: e.target.value })
            }
            onBlur={() => setAge()}
            id="Month"
            placeholder="01"
            required
          />
        </BoxInputNumber>

        <BoxInputNumber>
          <LabelText for="Year">Year</LabelText>
          <InputNumber
            value={birthday.year}
            onChange={(e) => setBirthday({ ...birthday, year: e.target.value })}
            onBlur={() => setAge()}
            id="Year"
            placeholder="1911"
            required
          />
        </BoxInputNumber>

        <BoxInputNumber>
          <LabelText for="Age">Age</LabelText>
          <InputText value={birthday.age} id="Age" disabled />
        </BoxInputNumber>
      </BirthdayBox>

      <BoxCheckbox>
        <Checkbox
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
          required
        />
        <LabelCheckbox>I accept the terms and privacy</LabelCheckbox>
      </BoxCheckbox>

      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};
export default React.memo(FirstTab);
