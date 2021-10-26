import React from 'react';
import {
  BoxCheckbox,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  LabelCheckbox,
} from './CheckboxTemplate';

export const Checkbox = ({ className, checked, setCheck }) => (
  <BoxCheckbox>
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        checked={checked}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
        required
      />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <LabelCheckbox>I accept the terms and privacy</LabelCheckbox>
  </BoxCheckbox>
);
