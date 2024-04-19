import React from 'react';
import { Card} from '@lib'
const CardContainer = ({ color, children }) => {
  const paperStyle = {
    background: color ? color : null
  };

  return (
    <Card  variant='elevation'>
      {children}
    </Card>
  );
};

export default CardContainer;
