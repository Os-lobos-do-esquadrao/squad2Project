// * React * //
import React, { useState } from 'react';
// * Router * //
import { useHistory } from 'react-router';
// * Component * //
import { Form } from '../components/Base';
import { DefaultInput } from '../components/Input';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Icon * //
import { ChevronRight } from 'react-feather';

const SecondPage = ({ OnSubmit, setUrl }) => {
  let history = useHistory();
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        OnSubmit({ linkedin, github });
        setUrl('/certificates');
      }}
    >
      <DefaultInput
        id="Linkedin"
        setValue={setLinkedin}
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        value={linkedin}
        text="Linkedin"
        required={false}
      />
      <DefaultInput
        id="Github"
        setValue={setGithub}
        placeholder="https://github.com/foobar"
        value={github}
        text="Github *"
        required={true}
      />
      <Button>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

export default SecondPage;
