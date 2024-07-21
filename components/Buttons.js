import React from 'react';
import IconButton from '@mui/material/IconButton';

const Button = (props) => {
  return (
    <IconButton
      variant="contained" 
      style={{ 
        width: '6rem',
        height: '6rem',
        borderRadius: '50%',
        backgroundColor: 'brown',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
    >
      {props.children}
    </IconButton>
  );
}

export default Button;
