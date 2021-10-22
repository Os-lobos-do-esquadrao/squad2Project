import React from 'react';
import styled from 'styled-components';

export const BoxEmailPhone = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxEmail = styled.div`
  display: inline-block;
  margin: 0 10px 0 0;
  width: 65%;
  /* width: 330px; */
`;

export const BoxPhone = styled.div`
  margin-left: auto;
  display: inline-block;
  width: 30%;
`;

export const BirthdayBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const BirthdayTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  margin-bottom: 14px;
  line-height: 16px;
  color: #767676;
  text-align: justify;
`;

export const BoxInputNumber = styled.div`
  display: inline-block;
  width: 23.5%;
  text-align: justify;
  :not(:first-child):not(:last-child) {
    margin: 0 2% 0 0;
  }
`;

export const InputNumber = styled.input.attrs({ type: 'number' })`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  text-indent: 10px;
  display: block;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BoxCheckbox = styled.label`
  margin-top: 41px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
`;

export const LabelCheckbox = styled.span`
  position: static;
  /* width: 214px; */
  /* width: 100%; */
  height: 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #111111;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.checked ? '#074ee8' : '#aaaaaa')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    {console.log(props)}
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
