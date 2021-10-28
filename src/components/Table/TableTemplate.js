import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 16px;
  line-height: 22.5px;
  margin: 25px 0;
  text-align: left;
  width: 555px;
`;

export const Th = styled.th`
  padding: 10px 15px;
  position: relative;
  font-family: 'Nunito', sans-serif;
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Td = styled(Th)``;

export const P = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 400px;
  font-family: 'Nunito', sans-serif;
`;
