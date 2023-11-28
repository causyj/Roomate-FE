import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ReactNode } from 'react';

interface LoginTextFieldProps {
    text: string;
    icon: ReactNode;
    value: string;
    onChange: (value: string) => void;
}
export const LoginTextField: React.FC<LoginTextFieldProps> = ({ text, icon, value, onChange }) =>{
    return (
        <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      {icon && <span style={{ color: 'action.active', marginRight: '8px', marginBottom: '4px' }}>{icon}</span>}
        <TextField 
         id={`input-with-sx-${text.toLowerCase()}`} // Unique ID for each text field
         label={text}
         variant="standard"
         sx={{ width: '200px'}}
         value={value}
         onChange={(e) => onChange(e.target.value)}
         />
      </Box>
        </div>
    )
}