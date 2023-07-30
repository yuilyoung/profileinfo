import { useState, useEffect } from 'react';
import styled2 from 'styled-components';
import './Component.css';
import ProfileDefaultImage from './Image/ProfilePicture.jpeg';
import ProfileProps from '../modules/props';

import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { TextField, Theme } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled, alpha } from '@mui/material/styles';

export interface ThemeProps extends Theme {
  theme: Theme;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th, &:last-child tr': {
    border: 1,
    bordercolor: theme.palette.common.white,
  },
}));

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ProfileInfoBlock = styled2.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
`;

const btnStyle = {
  color: 'white',
  background: 'teal',
  padding: '.375rem .95rem',
  border: '1px solid teal',
  borderRadius: '.25rem',
  fontSize: '1rem',
  lineHeight: 1.5,
  marginLeft: 120,
  marginBottom: 40,
};

const btnStylePos = {
  marginLeft: 120,
};

const ProfileInfo = (profile: ProfileProps) => {
  const { profileImage, region, name, hobby } = profile;
  return (
    <ProfileInfoBlock>
      <Container maxWidth='sm'>
        {/* <div className="contents"> */}
        {/* <h1>ProfileInfo</h1> */}
        <h3>프로필 사진</h3>
        <img className='imageContent' src={ProfileDefaultImage} alt='' />
        <input type='file' />
        <div className='outer-div'>
          <TableHead>
            <TableRow>
              <StyledTableCell>지역</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  123
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          {/* <textarea className="textArea"></textarea> */}
          <TextField
            className='textArea'
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
          />
        </div>
        <div className='outer-div'>
          <TableHead>
            <TableRow>
              <StyledTableCell>별명</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <textarea className="textArea"></textarea> */}
          <TextField
            className='textArea'
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
          />
        </div>
        <div className='outer-div'>
          <TableHead>
            <TableRow>
              <StyledTableCell>관심사</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <textarea className="textArea"></textarea> */}
          <TextField
            className='textArea'
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
          />
        </div>
        <Button variant='outlined'>적용</Button>
        {/* <button style={btnStyle} onClick={()=>alert("add")}>적용</button> */}
        <Button variant='outlined' style={btnStylePos}>
          취소
        </Button>
        {/* <button style={btnStyle} onClick={()=>alert("cancel")}>취소</button> */}
        {/* </div> */}
      </Container>
    </ProfileInfoBlock>
  );
};

export default ProfileInfo;
