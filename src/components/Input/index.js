// * React * //
import React from 'react';
// * Component * //
import { BoxInput, Label, Input } from './DefaultInputTemplate';
import { BoxEmailPhone, BoxEmail, BoxPhone } from './EmailPhoneTemplate';
import {
  BirthdayBox,
  BirthdayTitle,
  BoxInputNumber,
  InputNumber,
} from './BirthdayTemplate';
import {
  BoxCertificateInput,
  CertificateInput,
  ButtonHeart,
  ButtonMore,
} from './CertificateInputTemplate';
import { DropDown } from '../Dropdown/';
// * Icon * //
import { Plus, ChevronRight, ChevronDown, Heart } from 'react-feather';
export const DefaultInput = ({
  id,
  placeholder,
  text,
  value,
  setValue,
  required,
}) => (
  <BoxInput>
    <Label for={id}>{text}</Label>
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  </BoxInput>
);

export const EmailPhoneInput = ({ email, setEmail, phone, phoneMask }) => (
  <BoxInput>
    <BoxEmailPhone>
      <BoxEmail>
        <Label for="Email">Email *</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="Email"
          type="email"
          placeholder="foo@bar.com"
          required
        />
      </BoxEmail>
      <BoxPhone>
        <Label for="Phone">Phone</Label>
        <Input
          onChange={(e) => phoneMask(e)}
          value={phone}
          id="Phone"
          placeholder="(83) 00000-0000"
        />
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
}) => (
  <BirthdayBox>
    <BirthdayTitle>Birthday *</BirthdayTitle>

    <BoxInputNumber>
      <Label for="Day">Day</Label>
      <InputNumber
        value={day}
        onChange={(e) => setDay(e.target.value)}
        onBlur={() => setAge()}
        id="Day"
        placeholder="01"
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
        required
      />
    </BoxInputNumber>

    <BoxInputNumber>
      <Label for="Age">Age</Label>
      <Input value={age} id="Age" disabled />
    </BoxInputNumber>
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
    <Label for="Certificates">Certificates*</Label>
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
          fill={heart ? 'red' : 'white'}
        />
      </ButtonHeart>
    </BoxCertificateInput>

    <div style={{ display: 'flex', marginBottom: '30px' }}>
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
