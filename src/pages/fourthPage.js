// * React * //
import React from 'react';
// * Redux * //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
// * Template * //
import {
  TableBox,
  Table,
  Th,
  Td,
  P,
  TextContent,
  HeartBox,
} from '../components/Table/TableTemplate';
// import { HeartBox } from '../components/Dropdown/DropdownTemplate';
import { Button } from '../components/Buttons/ButtonTemplate';
// * Icon * //
import { ChevronRight, Heart } from 'react-feather';

const FourthPage = ({ infosForms, setPage, reset }) => {
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
              {infosForms.certificateList.map((certificate, index) => {
                return (
                  <TextContent key={index}>
                    <P>{certificate[0]}</P>
                    <HeartBox>
                      <Heart
                        color={certificate[1] ? 'red' : 'white'}
                        fill={certificate[1] ? 'red' : 'white'}
                      />
                    </HeartBox>
                  </TextContent>
                );
              })}
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
