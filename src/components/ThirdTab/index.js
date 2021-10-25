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
} from './ThirdTabElements';

import { Plus, ChevronRight, ChevronDown, Check, Heart } from 'react-feather';

const ThirdTab = () => {
  const [heart, setHeart] = useState(false);
  return (
    <Form>
      <div>
        <LabelText for="Certificates">Certificates*</LabelText>
        <BoxCertificateInput>
          <CertificateInput
            id="Certificates"
            placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
          />
          <ButtonHeart onClick={() => setHeart(!heart)}>
            <Heart
              size={30}
              color={heart ? 'red' : 'grey'}
              fill={heart ? 'red' : 'white'}
            />
          </ButtonHeart>
        </BoxCertificateInput>
        {/* <InputText
          type="text"
          id="Certificates"
          placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
        /> */}

        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <Dropdown>
            <DropdownTitle>
              <p>Certificates List</p>
              <span>
                <ChevronDown size={20} />
              </span>
            </DropdownTitle>

            <DropdownContent>
              <DropdownContextLink>
                <DropdownContentText>
                  http://www.linkedin.com/in/foo-bar-3a0560104/
                </DropdownContentText>
                <HeartBox>
                  <Heart color="red" fill="red" />
                </HeartBox>
              </DropdownContextLink>
              <DropdownContextLink>
                <DropdownContentText>
                  http://www.linkedin.com/in/foo-bar-3a0560104/
                </DropdownContentText>
                <HeartBox>
                  <Heart color="white" fill="white" />
                </HeartBox>
              </DropdownContextLink>
            </DropdownContent>
          </Dropdown>
          <ButtonMore type="button">
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
    </Form>
  );
};

export default React.memo(ThirdTab);
