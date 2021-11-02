// * React * //
import React from 'react';
// * Template * //
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

export const DropDown = ({ certificateList, theme }) => (
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
            {element[1] && <Heart color={'red'} fill={'red'} />}
          </HeartBox>
        </DropdownContextLink>
      ))}
    </DropdownContent>
  </Dropdown>
);
