// * React * //
import React, { useState } from 'react';
// * Router * //
import { useHistory } from 'react-router';
// * Component * //
import { Form } from '../components/Base';
import { DefaultInput, CertificateBox } from '../components/Input';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Icon * //
import { Check } from 'react-feather';

const ThirdPage = ({ OnSubmit, setUrl }) => {
  let history = useHistory();
  const [showAlert, setShow] = useState(false);
  const [certificate, setCertificate] = useState('');
  const [heart, setHeart] = useState(false);

  const [certificateList, setList] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduation, setGraduation] = useState('');

  const moreCertificate = () => {
    console.log('entros');
    if (certificate !== '') {
      if (certificateList.length < 5) {
        let aux = certificateList;
        heart
          ? (aux = sortList(aux, [certificate, heart]))
          : aux.push([certificate, heart]);
        setList(aux);
        setCertificate('');
        heart && setHeart(!heart);
      } else {
        setShow(!showAlert);
      }
    }
  };

  const sortList = (list, newElement) => {
    let check = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i][1]) {
        check = i + 1;
      }
    }

    check ? list.splice(check, 0, newElement) : list.splice(0, 0, newElement);
    return list;
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        OnSubmit({ certificateList, teamName, institution, graduation });
        history.push('/representation');
      }}
    >
      <CertificateBox
        certificate={certificate}
        setCertificate={setCertificate}
        setHeart={setHeart}
        heart={heart}
        certificateList={certificateList}
        moreCertificate={moreCertificate}
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

export default ThirdPage;
