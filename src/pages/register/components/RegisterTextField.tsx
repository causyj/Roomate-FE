import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

interface RegisterTextFieldProps {
    error : boolean;
    label: string;
    value: string;
    onChange: (value: string) => void;
    helperText: string;
}

export const RegisterTextField: React.FC<RegisterTextFieldProps> = ({ error, label, value, onChange, helperText }) =>{
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
          error = {error}
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
          helperText={helperText}
          
          
        />
      </Box>
        </div>
    )
}

