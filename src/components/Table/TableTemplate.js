import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const TableBox = styled.div`
  position: relative;
  height: 700px;
`;

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
  color: ${({ theme }) => theme.textHeader};
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 10px 15px;
  position: relative;
  font-family: 'Nunito', sans-serif;
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textHeader};
  font-style: italic;
`;

export const P = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 400px;
  color: ${({ theme }) => theme.textHeader};
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  @media (max-width: ${baseWidth.sm}) {
    width: 80%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  color: ${({ theme }) => theme.textHeader};
  @media (max-width: ${baseWidth.sm}) {
    width: 35%;
  }
`;

export const HeartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
