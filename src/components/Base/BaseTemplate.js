import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const BodyBackground = styled.div`
  background: ${({ theme }) => theme.body};

  display: flex;
  align-self: center;
  justify-content: center;
  float: none;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (min-width: ${baseWidth.lg}) {
    padding-top: 4%;
    height: 100%;
  }

  @media (max-width: ${baseWidth.lg}) and (min-width: ${baseWidth.md}) {
    height: 100%;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  @media (max-width: ${baseWidth.md}) and (min-width: ${baseWidth.sm}) {
    height: 100%;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  @media (max-width: ${baseWidth.sm}) {
    width: 100%;
    height: 100%;
  }
`;

export const FormBackground = styled.div`
  width: 617px;
  height: 763px;
  background: ${({ theme }) => theme.form};
  border-radius: 20px;
  padding: 56px 50px;
  opacity: ${({ invisible }) => invisible && 0.3};
  pointer-events: ${({ invisible }) => invisible && 'none'};

  @media (max-width: ${baseWidth.sm}) {
    width: 90%;
    height: 100%;
    padding: 20px 50px 0;
  }
`;

export const Form = styled.form`
  height: 600px;
  position: relative;

  @media (max-width: ${baseWidth.sm}) {
    height: 680px;
  }
`;
