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
            <InputText id="Phone" placeholder="(83) 00000-0000" required />
          </BoxPhone>
        </BoxEmailPhone>
      </BoxInput>

      <BirthdayTitle>Birthday *</BirthdayTitle>

      <BoxInputNumber>
        <LabelText for="Day">Day</LabelText>
        <InputNumber id="Day" placeholder="01" required />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Month">Month</LabelText>
        <InputNumber id="Month" placeholder="01" required />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Year">Year</LabelText>
        <InputNumber id="Year" placeholder="1910" required />
      </BoxInputNumber>

      <BoxInputNumber>
        <LabelText for="Age">Age</LabelText>
        <InputNumber id="Age" disabled />
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
