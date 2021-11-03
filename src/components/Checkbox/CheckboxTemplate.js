import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BoxCheckbox = styled.label`
  margin-top: 41px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  @media (max-width: ${baseWidth.sm}) {
    margin-top: 20px;
  }
`;

export const LabelCheckbox = styled.span`
  position: static;
  height: 18px;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.textHeader};
  filter: ${({ theme }) => `drop-shadow(0px 4px 4px ${theme.shadow})`};
  @media (max-width: ${baseWidth.sm}) {
    font-size: 15px;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  filter: ${({ theme }) => `drop-shadow(0px 4px 4px ${theme.shadow})`}; ;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${({ checked, theme }) =>
    checked ? theme.primary : theme.border};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
  @media (max-width: ${baseWidth.sm}) {
    width: 20px;
    height: 20px;
  }
`;
