// * React * //
import React, { useEffect } from 'react';
// * Redux * //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
// * API * //
import api from '../api/api';
// * Template * //
import {
  TableBox,
  Table,
  Th,
  Td,
  P,
  TextContent,
  HeartBox,
  PCertificate,
  TdField,
} from '../components/Table/TableTemplate';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Icon * //
import { ChevronRight, Heart } from 'react-feather';

const FourthPage = ({ infosForms, setPage, reset }) => {
  useEffect(() => {
    api.addData(infosForms);
  });
  return (
    <TableBox>
      <Table>
        <thead>
          <tr>
            <Th>Fields</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TdField>Full Name</TdField>
            <Td>
              <P>{infosForms.fullName}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Nickname</TdField>
            <Td>
              <P>{infosForms.nickName}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Email</TdField>
            <Td>
              <P>{infosForms.email}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Phone</TdField>
            <Td>
              <P>{infosForms.phone}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Birthday</TdField>
            <Td>
              <P>{infosForms.birthday}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Linkedin</TdField>
            <Td>
              <P>{infosForms.linkedin}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Github</TdField>
            <Td>
              <P>{infosForms.github}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Cerficates</TdField>
            <Td>
              {infosForms.certificateList.map((certificate, index) => {
                return (
                  <TextContent key={index}>
                    <PCertificate>{certificate[0]}</PCertificate>
                    <HeartBox>
                      {certificate[1] && <Heart color={'red'} fill={'red'} />}
                    </HeartBox>
                  </TextContent>
                );
              })}
            </Td>
          </tr>
          <tr>
            <TdField>Team Name</TdField>
            <Td>
              <P>{infosForms.teamName}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Institution</TdField>
            <Td>
              <P>{infosForms.institution}</P>
            </Td>
          </tr>
          <tr>
            <TdField>Graduation</TdField>
            <Td>
              <P>{infosForms.graduation}</P>
            </Td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={() => {
          reset();
          setPage(0);
        }}
      >
        OK
        <ChevronRight size={20} />
      </Button>
    </TableBox>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FourthPage);
