import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: black;
  background-color: #ffffff;
  width: 443px;
  height: 160px;
  position: absolute;
  top: 30%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-family: Nunito, sans-serif;
  box-sizing: border-box;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  opacity: 1;
  pointer-events: auto;
  p {
    opacity: 1;
  }
  @media (max-width: ${baseWidth.sm}) {
    width: 80%;
  }
`;

export const AlertError = styled.p`
  color: black;
  font-weight: 600;
  font-family: Inter, sans-serif;
  opacity: 1;
`;

export const CloseAlert = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background-color: blue;
  width: 57px;
  height: 25px;
  border-radius: 4px;
  padding: 0px 12px;
  cursor: pointer;
  opacity: 1;
`;
