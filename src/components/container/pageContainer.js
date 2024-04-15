import React from 'react';
import { Paper} from '@lib'
const PageContainer = ({ color, children }) => {
  const paperStyle = {
    background: color ? color : null
  };

  return (
    <Paper variant="elevation" elevation={2} className="p-2 m-1" style={paperStyle}>
      {children}
    </Paper>
  );
};

export default PageContainer;
