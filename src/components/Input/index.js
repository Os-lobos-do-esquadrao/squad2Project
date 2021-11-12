// * React * //
import React from 'react';
// * Template * //
import { BoxInput, Label, Input } from './DefaultInputTemplate';
import { BoxEmailPhone, BoxEmail, BoxPhone } from './EmailPhoneTemplate';
import {
  BirthdayBox,
  BirthdayTitle,
  BoxInputNumber,
  InputNumber,
  BoxInputs,
} from './BirthdayTemplate';
import {
  BoxCertificateInput,
  CertificateInput,
  ButtonHeart,
  ButtonMore,
} from './CertificateInputTemplate';
import { ErrorBox, ErrorSpan } from '../Error/ErrorTemplate';
// * Component * //
import { DropDown } from '../Dropdown/';
// * Icon * //
import {
  Plus,
  ChevronRight,
  Heart,
  AlertTriangle,
  AlertCircle,
} from 'react-feather';

export const DefaultInput = ({
  id,
  placeholder,
  text,
  value,
  setValue,
  required,
  name,
  error,
  validateField,
  requiredValidation = function () {},
}) => {
  return (
    <BoxInput error={!error.valid}>
      <Label for={id}>{text}</Label>
      <Input
        error={!error.valid}
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (required) {
            if (e.target.value !== '') {
              validateField(e);
            } else {
              requiredValidation(e);
            }
          } else {
            validateField(e);
          }
        }}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      {!error.valid && (
        <ErrorBox>
          <AlertCircle /> <ErrorSpan> {error.message}</ErrorSpan>
        </ErrorBox>
      )}
    </BoxInput>
  );
};

export const EmailPhoneInput = ({
  email,
  setEmail,
  phone,
  phoneMask,
  phoneName,
  emailName,
  errorPhone,
  errorEmail,
  validateField,
  requiredValidation,
}) => (
  <BoxInput error={!errorPhone.valid || !errorEmail.valid}>
    <BoxEmailPhone>
      <BoxEmail>
        <Label for="Email">Email *</Label>
        <Input
          error={!errorEmail.valid}
          value={email}
          name={emailName}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => {
            if (e.target.value !== '') {
              validateField(e);
            } else {
              requiredValidation(e);
            }
          }}
          id="Email"
          type="email"
          placeholder="foo@bar.com"
          required
        />
        {!errorEmail.valid && (
          <ErrorBox>
            <AlertCircle /> <ErrorSpan> {errorEmail.message}</ErrorSpan>
          </ErrorBox>
        )}
      </BoxEmail>

      <BoxPhone>
        <Label for="Phone">Phone</Label>
        <Input
          error={!errorPhone.valid}
          value={phone}
          name={phoneName}
          onChange={(e) => phoneMask(e)}
          onBlur={(e) => {
            if (e.target.value !== '') {
              validateField(e);
            }
          }}
          id="Phone"
          placeholder="(83) 00000-0000"
        />
        {!errorPhone.valid && (
          <ErrorBox>
            <AlertCircle /> <ErrorSpan> {errorPhone.message}</ErrorSpan>
          </ErrorBox>
        )}
      </BoxPhone>
    </BoxEmailPhone>
  </BoxInput>
);

export const BirthdayInput = ({
  day,
  month,
  year,
  age,
  setDay,
  setMonth,
  setYear,
  setAge,
  dayName,
  monthName,
  yearName,
  errorBirthday,
  validateField,
  requiredValidation,
}) => (
  <BirthdayBox>
    <BirthdayTitle>Birthday *</BirthdayTitle>
    <BoxInputs>
      <BoxInputNumber>
        <Label for="Day">Day</Label>
        <InputNumber
          value={day}
          onChange={(e) => setDay(e.target.value)}
          onBlur={(e) => {
            setAge();
            // validateField(`${e.target.value}/${month}/${year}`);
          }}
          id="Day"
          placeholder="01"
          min="01"
          max="31"
          name={dayName}
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <Label for="Month">Month</Label>
        <InputNumber
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          onBlur={() => setAge()}
          id="Month"
          placeholder="01"
          min="01"
          max="12"
          name={monthName}
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <Label for="Year">Year</Label>
        <InputNumber
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onBlur={() => setAge()}
          id="Year"
          placeholder="1911"
          min="1911"
          max="2021"
          name={yearName}
          required
        />
      </BoxInputNumber>

      <BoxInputNumber>
        <Label for="Age">Age</Label>
        <Input value={age} id="Age" disabled />
      </BoxInputNumber>
    </BoxInputs>
    {!errorBirthday.valid && (
      <ErrorBox>
        <AlertCircle /> <ErrorSpan> {errorBirthday.message}</ErrorSpan>
      </ErrorBox>
    )}
  </BirthdayBox>
);

export const CertificateBox = ({
  certificate,
  setCertificate,
  setHeart,
  heart,
  certificateList,
  moreCertificate,
}) => (
  <div>
    <Label for="Certificates">Certificates</Label>
    <BoxCertificateInput>
      <CertificateInput
        id="Certificates"
        value={certificate}
        placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
        onChange={(e) => {
          setCertificate(e.target.value);
        }}
      />
      <ButtonHeart onClick={() => setHeart(!heart)}>
        <Heart
          size={30}
          color={heart ? 'red' : 'grey'}
          fill={heart ? 'red' : 'grey'}
        />
      </ButtonHeart>
    </BoxCertificateInput>

    <div style={{ display: 'flex', marginBottom: '35px' }}>
      {certificateList.length !== 0 && (
        <DropDown certificateList={certificateList} />
      )}

      <ButtonMore type="button" onClick={() => moreCertificate()}>
        <Plus size={20} />
        <p>More</p>
        <ChevronRight size={20} />
      </ButtonMore>
    </div>
  </div>
);
