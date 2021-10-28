// * React * //
import React, { useState, useEffect } from 'react';
// * REDUX * //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
// * Component * //
import { Table, Th, Td, P } from '../components/Table/TableTemplate';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Icon * //
import { ChevronRight } from 'react-feather';

const FourthPage = ({ setUrl, infosForms, reset }) => {
  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <Table>
        <thead>
          <tr>
            <Th>Fields</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Full Name</Td>
            <Td>
              <P>{infosForms.fullName}</P>
            </Td>
          </tr>
          <tr>
            <Td>Nickname</Td>
            <Td>
              <P>{infosForms.nickName}</P>
            </Td>
          </tr>
          <tr>
            <Td>Email</Td>
            <Td>
              <P>{infosForms.email}</P>
            </Td>
          </tr>
          <tr>
            <Td>Phone</Td>
            <Td>
              <P>{infosForms.phone}</P>
            </Td>
          </tr>
          <tr>
            <Td>Birthday</Td>
            <Td>
              <P>{infosForms.birthday}</P>
            </Td>
          </tr>
          <tr>
            <Td>Linkedin</Td>
            <Td>
              <P>{infosForms.linkedin}</P>
            </Td>
          </tr>
          <tr>
            <Td>Github</Td>
            <Td>
              <P>{infosForms.github}</P>
            </Td>
          </tr>
          <tr>
            <Td>Cerficates</Td>
            <Td>
              <P>{infosForms.certificates}</P>
            </Td>
          </tr>
          <tr>
            <Td>Team Name</Td>
            <Td>
              <P>{infosForms.teamName}</P>
            </Td>
          </tr>
          <tr>
            <Td>Institution</Td>
            <Td>
              <P>{infosForms.institution}</P>
            </Td>
          </tr>
          <tr>
            <Td>Graduation</Td>
            <Td>
              <P>{infosForms.graduation}</P>
            </Td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={() => {
          reset();
          setUrl('/');
        }}
      >
        OK
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({ infosForms: state.infosForms });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FourthPage);
