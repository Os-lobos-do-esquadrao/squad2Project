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
import { DefaultInput } from '../components/Input';
// * Function * //
import { NavValidation } from '../functions/validations';
// * Icon * //
import { ChevronRight } from 'react-feather';

const SecondPage = ({ infosForms, setInfosForms, setPage }) => {
  const validations = useContext(Context);
  // * States * //
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [error, validateField, requiredValidation] = useErros(
    {
      linkedin,
      github,
    },
    validations
  );

  // * Effect * //
  useEffect(() => {
    if (NavValidation(infosForms)) {
      setLinkedin(infosForms.linkedin);
      setGithub(infosForms.github);
    } else {
      setPage(0);
    }
  }, []);

  // * Return * //
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setPage(2);
        setInfosForms({ ...infosForms, linkedin, github });
      }}
    >
      <DefaultInput
        id="Linkedin"
        setValue={setLinkedin}
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        value={linkedin}
        text="Linkedin"
        required={false}
        error={error.linkedin}
        validateField={validateField}
        name={'linkedin'}
      />
      <DefaultInput
        id="Github"
        setValue={setGithub}
        placeholder="https://github.com/foobar"
        value={github}
        text="Github *"
        required={true}
        error={error.github}
        validateField={validateField}
        name={'github'}
        requiredValidation={requiredValidation}
      />
      <Button disabled={JSON.stringify(error).includes(false)}>
        <p>Next</p>
        <ChevronRight size={20} />
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
