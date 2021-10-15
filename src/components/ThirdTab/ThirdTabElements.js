import styled from 'styled-components';

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownTitle = styled.div`
  margin: 20px 0 5px;
  width: 200px;
  height: 40px;

  background: #ffffff;

  border: 2px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0px 12px;

  display: flex;
  align-items: center;

  font-family: 'Nunito';
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  /* display: none; */
  position: absolute;
  width: 380px;
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 20px;
  background: #ffffff;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  padding: 8px 0 8px 10px;
`;

export const DropdownContentText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 20px 0 0;
`;

export const DropdownContextLink = styled.a`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000000;
  text-decoration: none;
`;

export const ButtonMore = styled.div`
  margin: 20px 35px 0;
  width: 85px;
  height: 40px;
  margin-left: auto;
  background: #074ee8;
  border-radius: 4px;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0px 12px;

  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  cursor: pointer;
`;
