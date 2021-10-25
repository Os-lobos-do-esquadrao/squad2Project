import React, { useState } from 'react';

import {
  Form,
  BoxInput,
  LabelText,
  InputText,
  Button,
} from '../../assets/base';
import {
  BoxCertificateInput,
  CertificateInput,
  Dropdown,
  DropdownTitle,
  DropdownContent,
  DropdownContentText,
  DropdownContextLink,
  HeartBox,
  ButtonMore,
  ButtonHeart,
  Alert,
  AlertError,
  CloseAlert,
} from './ThirdTabElements';

import { Plus, ChevronRight, ChevronDown, Check, Heart } from 'react-feather';

const ThirdTab = () => {
  const [a, b] = useState(false);
  const [certificate, setCertificate] = useState('');
  const [heart, setHeart] = useState(false);
  const [certificateList, setList] = useState([]);

  const moreCertificate = () => {
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
        b(!a);
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

    console.log(check);

    check ? list.splice(check, 0, newElement) : list.splice(0, 0, newElement);
    console.log(list);
    return list;
  };

  const alert = () => {
    return (
      <Alert>
        <AlertError />
        <p>A maximum of 5 certificates</p>
        <CloseAlert onClick={() => b(!a)}>OK</CloseAlert>
      </Alert>
    );
  };

  return (
    <Form alert={a}>
      <div>
        <LabelText for="Certificates">Certificates*</LabelText>
        <BoxCertificateInput>
          <CertificateInput
            id="Certificates"
            value={certificate}
            placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
            onChange={(e) => {
              let certificate = e.target.value;
              setCertificate(certificate);
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
            <Dropdown>
              <DropdownTitle>
                <p>Certificates List</p>
                <span>
                  <ChevronDown size={20} />
                </span>
              </DropdownTitle>

              <DropdownContent>
                {certificateList.map((certificate, index) => (
                  <DropdownContextLink
                    key={index}
                    target="_blank"
                    href={certificate[0]}
                  >
                    <DropdownContentText>{certificate[0]}</DropdownContentText>
                    <HeartBox>
                      <Heart
                        color={certificate[1] ? 'red' : 'white'}
                        fill={certificate[1] ? 'red' : 'white'}
                      />
                    </HeartBox>
                  </DropdownContextLink>
                ))}
              </DropdownContent>
            </Dropdown>
          )}

          <ButtonMore type="button" onClick={() => moreCertificate()}>
            <Plus size={20} />
            <p>More</p>
            <ChevronRight size={20} />
          </ButtonMore>
        </div>
      </div>
      <BoxInput>
        <LabelText for="TeamName">Team Name *</LabelText>
        <InputText id="TeamName" placeholder="Juanito" required />
      </BoxInput>{' '}
      <BoxInput>
        <LabelText for="Institution">Institution *</LabelText>
        <InputText
          id="Institution"
          placeholder="Universidade Federal da Paraíba"
          required
        />
      </BoxInput>{' '}
      <BoxInput>
        <LabelText for="Graduation">Graduation *</LabelText>
        <InputText
          id="Graduation"
          placeholder="Ciências da Computação"
          required
        />
      </BoxInput>
      <Button>
        {' '}
        <Check size={20} /> <p>Finish</p>
      </Button>
      {a && alert()}
    </Form>
  );
};

export default React.memo(ThirdTab);
