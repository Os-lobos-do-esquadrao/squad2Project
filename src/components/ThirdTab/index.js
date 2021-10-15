import React from 'react';
import { BoxInput, LabelText, InputText, Button } from '../base/BaseElements';
import {
  Dropdown,
  DropdownTitle,
  DropdownContent,
  DropdownContentText,
  DropdownContextLink,
  ButtonMore,
} from './ThirdTabElements';

const ThirdTab = () => {
  return (
    <form action="#">
      <div>
        <LabelText for="Certificates">Certificates*</LabelText>
        <InputText
          type="text"
          id="Certificates"
          placeholder="http://www.linkedin.com/in/foo-bar-3a0560104/"
        />
        <div style={{ display: 'flex' }}>
          <Dropdown>
            <DropdownTitle>Certificates List</DropdownTitle>
            <DropdownContent>
              <DropdownContextLink>
                <DropdownContentText>Certificado</DropdownContentText>
              </DropdownContextLink>
            </DropdownContent>
          </Dropdown>
          <ButtonMore type="button">More</ButtonMore>
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
      <Button type="submit">Finish</Button>
    </form>
  );
};

export default ThirdTab;
