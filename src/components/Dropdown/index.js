// * React * //
import React from 'react';
// * Component * //
import {
  DropdownTitle,
  DropdownContent,
  Dropdown,
  DropdownContentText,
  DropdownContextLink,
  HeartBox,
} from './DropdownTemplate';
// * Icon * //
import { Plus, ChevronRight, ChevronDown, Heart } from 'react-feather';

export const DropDown = ({ certificateList }) => (
  <Dropdown>
    <DropdownTitle>
      <p>Certificates List</p>
      <span>
        <ChevronDown size={20} />
      </span>
    </DropdownTitle>

    <DropdownContent>
      {certificateList.map((element, index) => (
        <DropdownContextLink key={index} target="_blank" href={element[0]}>
          <DropdownContentText>{element[0]}</DropdownContentText>
          <HeartBox>
            <Heart
              color={element[1] ? 'red' : 'white'}
              fill={element[1] ? 'red' : 'white'}
            />
          </HeartBox>
        </DropdownContextLink>
      ))}
    </DropdownContent>
  </Dropdown>
);
