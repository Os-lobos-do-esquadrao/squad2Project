import React from 'react';
import {
  Form,
  BoxInput,
  LabelText,
  InputText,
  Button,
} from '../../assets/base';

const SecondTab = () => {
  return (
    <Form action="#">
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
    </Form>
  );
};

export default React.memo(SecondTab);
