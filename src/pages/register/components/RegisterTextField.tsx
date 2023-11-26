import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

interface RegisterTextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const RegisterTextField: React.FC<RegisterTextFieldProps> = ({ label, value, onChange }) =>{
    return (
        <div className='flex felx-row'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: '20ch',},
      }}
      noValidate
      autoComplete="off"
    >
         <TextField
          error = {false}
          required
          id={`outlined-required-${label.toLowerCase()}`}
          label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          InputProps={{
            style: {
              borderRadius: "10px",
              height :"50px",
            }
          }}
          
        />
      </Box>
        </div>
    )
}

