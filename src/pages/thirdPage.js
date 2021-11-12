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
import { DefaultInput, CertificateBox } from '../components/Input';
// * Function * //
import { moreCertificate } from '../functions/thirdPage';
import { NavValidation } from '../functions/validations';
// * Icon * //
import { Check } from 'react-feather';

const ThirdPage = ({ infosForms, setInfosForms, setPage, setShow }) => {
  const validations = useContext(Context);
  // * States * //
  const [certificate, setCertificate] = useState('');
  const [heart, setHeart] = useState(false);
  const [certificateList, setList] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduation, setGraduation] = useState('');
  const [error, validateField, requiredValidation] = useErros(
    {
      certificate,
      teamName,
      graduation,
      institution,
    },
    validations
  );

  // * Functions * //
  const moreFunction = () => {
    if (certificate !== '') {
      let aux = moreCertificate(certificate, certificateList, heart);
      if (aux) {
        setList(aux);
        setCertificate('');
        heart && setHeart(!heart);
      } else {
        setShow(true);
      }
    }
  };

  // * Effect * //
  useEffect(() => {
    if (NavValidation(infosForms)) {
      infosForms.github === undefined && setPage(1);
    } else {
      setPage(0);
    }
  }, []);

  // * Return * //
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setPage(3);
        setInfosForms({
          ...infosForms,
          certificateList,
          teamName,
          institution,
          graduation,
        });
      }}
    >
      <CertificateBox
        certificate={certificate}
        setCertificate={setCertificate}
        setHeart={setHeart}
        heart={heart}
        certificateList={certificateList}
        moreCertificate={moreFunction}
      />
      <DefaultInput
        id="TeamName"
        setValue={setTeamName}
        placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        value={teamName}
        text="Team Name *"
        required={true}
        error={error.teamName}
        validateField={validateField}
        name={'teamName'}
        requiredValidation={requiredValidation}
      />
      <DefaultInput
        id="Institution"
        setValue={setInstitution}
        placeholder="Universidade Federal da Paraíba"
        value={institution}
        text="Institution *"
        required={true}
        error={error.institution}
        validateField={validateField}
        name={'institution'}
        requiredValidation={requiredValidation}
      />
      <DefaultInput
        id="Graduation"
        setValue={setGraduation}
        placeholder="Ciências da Computação"
        value={graduation}
        text="Graduation *"
        required={true}
        error={error.graduation}
        validateField={validateField}
        name={'graduation'}
        requiredValidation={requiredValidation}
      />
      <Button disabled={JSON.stringify(error).includes(false)}>
        {' '}
        <Check size={20} /> <p>Finish</p>
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ThirdPage);
