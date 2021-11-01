import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BoxEmailPhone = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${baseWidth.sm}) {
    display: block;
    width: 100%;
  }
`;

export const BoxEmail = styled.div`
  display: inline-block;
  margin: 0 10px 0 0;
  width: 65%;
  @media (max-width: ${baseWidth.sm}) {
    display: block;
    width: 100%;
  }
`;

export const BoxPhone = styled.div`
  margin-left: auto;
  display: inline-block;
  width: 30%;
  @media (max-width: ${baseWidth.sm}) {
    margin: 24px 0px 0px 0px;
    display: block;
    width: 100%;
  }
`;
