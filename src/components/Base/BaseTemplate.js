import styled from 'styled-components';

export const BodyBackground = styled.div`
  background: #eceef2;

  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  align-self: center;
  justify-content: center;
`;

export const FormBackground = styled.div`
  width: 617px;
  height: 763px;
  background: #ffffff;
  border-radius: 20px;
  /* margin-left: 30%; */
  padding: 56px 50px;
  opacity: ${({ invisible }) => invisible && 0.3};
  pointer-events: ${({ invisible }) => invisible && 'none'};
`;

export const Form = styled.form`
  height: 600px;
  position: relative;
  /* ; */
`;
