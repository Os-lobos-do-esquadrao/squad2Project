import styled from 'styled-components';

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

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
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
  background: ${(props) => (props.checked ? '#074ee8' : '#aaaaaa')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;
