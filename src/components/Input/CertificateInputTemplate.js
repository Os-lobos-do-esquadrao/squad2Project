import styled from 'styled-components';

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

  span {
    margin: 0 5px 0;
    margin-left: auto;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 400px;
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 20px;
  background: #ffffff;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  padding: 8px 0 8px 10px;
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const DropdownContentText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 20px 0 0;
  text-align: justify;
`;

export const DropdownContextLink = styled.a`
  padding: 10px;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  color: #000000;
  text-decoration: none;
  cursor: pointer;
`;

export const BoxCertificateInput = styled.div`
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ theme }) => `2px solid ${theme.border}`};
  border-radius: 4px;
  width: 100%;
  height: 45px;
  display: block;
  font-family: 'Nunito', sans-serif;
  margin: 4px 0 0 0;
  position: relative;
  display: flex;
`;

export const CertificateInput = styled.input`
  min-width: 50px;
  min-height: 25px;
  border: none;
  width: 95%;
  margin: auto 0;
  background: none;
  text-indent: 10px;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  color: ${({ theme }) => theme.textHeader};
  &:focus {
    outline: none;
  }
`;

export const ButtonMore = styled.div`
  margin: 20px 0 0;

  width: 85px;
  height: 40px;
  margin-left: auto;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  color: ${({ theme }) => theme.buttonText};
  font-family: 'Nunito', sans-serif;
  text-align: center;
  cursor: pointer;

  p {
    margin: 0 5px 0 5px;
  }
`;

export const ButtonHeart = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: none;
  margin-right: 15px;

  border: none;

  &:active :first-child {
    -webkit-transform: scale(0.8); /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: scale(0.8); /* IE 9 */
    transform: scale(0.8);
    align-items: center;
    justify-content: center;
  }
  /* border: 1px solid red; */
`;
