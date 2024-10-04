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

const AnotherButton = (props) => {
  return (
    <IconButton
      variant="contained" 
      style={{ 
        width: '7rem',
        height: '3rem',
        borderRadius: '4px',
        backgroundColor: '#1e88e5', // Flat blue color
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
        transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        textTransform: 'uppercase',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1565c0'} // Darker blue on hover
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e88e5'} // Original color on leave
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'} // Scale down on click
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} // Scale up when click released
      {...props}
    >
      {props.children}
    </IconButton>
  );
}

export default Button;
