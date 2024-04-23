import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Typography } from '@lib';
import Link from 'next/link';

function Breadcrumb({ items }) {



  return (
    <Breadcrumbs
      sx={{
        fontSize: 12,
      }}
      separator={">"} aria-label="breadcrumb">
      {items.map((item, index) => {
        const { text, href } = item;
        if (href) {
          return (
            <Link key={index} underline="hover" color="inherit" href={href} >
              {text}
            </Link>
          );
        } else {
          return (
            <Typography variant='caption' key={index} color="text.primary">
              {text}
            </Typography>
          );
        }
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
