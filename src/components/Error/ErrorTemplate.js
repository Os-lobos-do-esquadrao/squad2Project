import styled from 'styled-components';

export const ErrorBox = styled.p`
  color: ${({ theme }) => theme.danger};
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

export const ErrorSpan = styled.span`
  margin-left: 4px;
  font-style: italic;
`;
