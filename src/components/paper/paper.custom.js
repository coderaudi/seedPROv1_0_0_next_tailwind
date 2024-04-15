import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: 120,
  margin:'0px 10px 10px 30px'
}));

export default function CustomPaper() {
  return (
    
      <DemoPaper square>square corners</DemoPaper>
  );
}