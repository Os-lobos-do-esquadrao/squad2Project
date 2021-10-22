import React from 'react';
import { BoxInput, LabelText, InputText, Button } from '../../assets/base';

const SecondTab = () => {
  return (
    <form action="#">
      <BoxInput>
        <LabelText for="Linkedin">Linkedin</LabelText>
        <InputText
          id="Linkedin"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        />
      </BoxInput>{' '}
      <BoxInput>
        <LabelText for="Github">Github *</LabelText>
        <InputText
          id="Github"
          placeholder="https://github.com/foobar"
          required
        />
      </BoxInput>
      <Button>Next</Button>
    </form>
  );
};

export default React.memo(SecondTab);
