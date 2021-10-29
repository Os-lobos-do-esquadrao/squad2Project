// * React * //
import React, { useState, useEffect } from 'react';
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
import { navValidation } from '../functions/validations';
// * Icon * //
import { Check } from 'react-feather';

const ThirdPage = ({ infosForms, setInfosForms, setPage, setShow }) => {
  // * States * //
  const [certificate, setCertificate] = useState('');
  const [heart, setHeart] = useState(false);
  const [certificateList, setList] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduation, setGraduation] = useState('');

  // * Functions * //
  const moreFunction = () => {
    let aux = moreCertificate(certificate, certificateList, heart);
    if (aux) {
      setList(aux);
      setCertificate('');
      heart && setHeart(!heart);
    } else {
      setShow(true);
    }
  };

  // * Effect * //
  useEffect(() => {
    if (navValidation(infosForms)) {
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
      />
      <DefaultInput
        id="Institution"
        setValue={setInstitution}
        placeholder="Universidade Federal da Paraíba"
        value={institution}
        text="Institution *"
        required={true}
      />
      <DefaultInput
        id="Graduation"
        setValue={setGraduation}
        placeholder="Ciências da Computação"
        value={graduation}
        text="Graduation *"
        required={true}
      />
      <Button>
        {' '}
        <Check size={20} /> <p>Finish</p>
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ThirdPage);
