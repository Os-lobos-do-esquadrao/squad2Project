import React, { useState } from 'react';
import {
  Form,
  BoxInput,
  LabelText,
  InputText,
  Button,
} from '../../assets/base';
import { ChevronRight } from 'react-feather';

const SecondTab = () => {
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log({ linkedin, github });
  };

  return (
    <Form
      onSubmit={(e) => {
        submit(e);
      }}
    >
      <BoxInput>
        <LabelText for="Linkedin">Linkedin</LabelText>
        <InputText
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          id="Linkedin"
          placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        />
      </BoxInput>{' '}
      <BoxInput>
        <LabelText for="Github">Github *</LabelText>
        <InputText
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          id="Github"
          placeholder="https://github.com/foobar"
          required
        />
      </BoxInput>
      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

export default React.memo(SecondTab);
