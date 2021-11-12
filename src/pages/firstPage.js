// * React * //
import React, { useState, useEffect, useContext } from 'react';
// * Context * //
import { Context } from '../context/errorContext';
// * Hooks * //
import useErros from '../hooks/useErros';
// * Redux * //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
// * Template * //
import { Button } from '../components/Buttons/ButtonTemplate';
import { Form } from '../components/Base/BaseTemplate';
// * Component * //
import {
  DefaultInput,
  EmailPhoneInput,
  BirthdayInput,
} from '../components/Input';
import { Checkbox } from '../components/Checkbox';
// * Function * //
import { phoneMask, calcAge } from '../functions/firstPage';
import { NavValidation } from '../functions/validations';
// * Icon * //
import { ChevronRight } from 'react-feather';

const FirstPage = ({ infosForms, setInfosForms, setPage }) => {
  const validations = useContext(Context);
  // * States * //
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
  const [error, validateField, requiredValidation] = useErros(
    {
      fullName,
      nickName,
      email,
      phone,
      birthday,
    },
    validations
  );
  console.log(JSON.stringify(error).includes(false));
  // * Functions * //
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
  const Submit = (e) => {
    e.preventDefault();
    let infoData = {
      fullName,
      nickName,
      email,
      phone,
      date: birthday,
      birthday: birthday.day + '/' + birthday.month + '/' + birthday.year,
      check,
    };
    setPage(1);
    if (NavValidation(infosForms)) {
      setInfosForms({
        ...infosForms,
        fullName,
        nickName,
        email,
        phone,
        date: birthday,
        birthday: birthday.day + '/' + birthday.month + '/' + birthday.year,
        check,
      });
    } else {
      setInfosForms(infoData);
    }
  };

  // * Effect * //
  useEffect(() => {
    if (NavValidation(infosForms)) {
      setName(infosForms.fullName);
      setNickname(infosForms.nickName);
      setEmail(infosForms.email);
      setPhone(infosForms.phone);
      const birthday_aux = {
        day: infosForms.date.day,
        month: infosForms.date.month,
        year: infosForms.date.year,
        age: infosForms.date.age,
      };
      setBirthday(birthday_aux);
      setCheck(infosForms.check);
    }
  }, []);

  // * Return * //
  return (
    <Form
      onSubmit={(e) => {
        Submit(e);
      }}
    >
      <DefaultInput
        id="FullName"
        setValue={setName}
        placeholder="Foo Bar"
        value={fullName}
        text="Full Name *"
        required={true}
        name={'fullName'}
        error={error.fullName}
        validateField={validateField}
        requiredValidation={requiredValidation}
      />

      <DefaultInput
        id="Nickname"
        setValue={setNickname}
        placeholder="Juanito"
        value={nickName}
        text="Nickname"
        required={false}
        name={'nickName'}
        error={error.nickName}
        validateField={validateField}
      />

      <EmailPhoneInput
        email={email}
        phone={phone}
        setEmail={setEmail}
        phoneMask={setMask}
        phoneName={'phone'}
        emailName={'email'}
        errorPhone={error.phone}
        errorEmail={error.email}
        validateField={validateField}
        requiredValidation={requiredValidation}
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
        dayName={'day'}
        monthName={'month'}
        yearName={'year'}
        errorBirthday={error.birthday}
        validateField={validateField}
        requiredValidation={requiredValidation}
      />

      <Checkbox data={infosForms.check} checked={check} setCheck={setCheck} />

      <Button disabled={JSON.stringify(error).includes(false)}>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
