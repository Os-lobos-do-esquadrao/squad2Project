import styled from 'styled-components';
import { baseWidth } from '../UI/variables';

export const TableBox = styled.div`
  position: relative;
  height: 700px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Table = styled.table`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  border-collapse: collapse;
  font-size: 16px;
  line-height: 22.5px;
  margin: 25px 0;
  text-align: left;
`;

export const Th = styled.th`
  padding: 10px 15px;
  position: relative;
  text-align: left;
  border-bottom: 1px solid #ddd;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.textHeader};
`;

export const Td = styled.td`
  padding: 10px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  font-family: 'Nunito', sans-serif;
  font-style: italic;
  color: ${({ theme }) => theme.textHeader};
  @media (max-width: ${baseWidth.sm}) {
    max-width: 400px;
  }
`;

export const TdField = styled.td`
  padding: 10px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  font-family: 'Nunito', sans-serif;
  font-style: italic;
  color: ${({ theme }) => theme.textHeader};
  @media (max-width: ${baseWidth.sm}) {
    width: 30%;
  }
`;

export const P = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 400px;
  text-align: left;

  font-family: 'Nunito', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.textHeader};

  @media (max-width: ${baseWidth.sm}) {
    width: 50%;
  }
`;

export const PCertificate = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 400px;
  font-family: 'Nunito', sans-serif;

  @media (max-width: ${baseWidth.sm}) {
    width: 84%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  color: ${({ theme }) => theme.textHeader};
  @media (max-width: ${baseWidth.sm}) {
    width: 50%;
  }
`;

export const HeartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
