import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { ReactNode } from 'react';
export const LoginTextField = ({ text, icon }: { text: string; icon: ReactNode }) =>{
    return (
        <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      {icon && <span style={{ color: 'action.active', marginRight: '8px', marginBottom: '4px' }}>{icon}</span>}
        <TextField id="input-with-sx" label={text} variant="standard" />
      </Box>
        </div>
    )
}