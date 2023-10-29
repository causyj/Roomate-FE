import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/HomeRounded";
import Chat from '@mui/icons-material/ChatRounded';
import People from '@mui/icons-material/PeopleRounded'
import Notice from '@mui/icons-material/NotificationsRounded';
import { Paper } from "@mui/material";


const BottomNavbar = (): React.ReactElement => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper style={{ position: 'fixed', bottom: 0, width: '100%'} } >
    
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);    
        }}
        >
        <BottomNavigationAction 
            label="Home"
            href='/' 
            icon={<Home />}
        />
        <BottomNavigationAction 
            label="Chat"
            icon={<Chat />}
            href='/chat' 
        />
        <BottomNavigationAction 
            label="Roomate"
            href='/roomatelist' 
            icon={<People />}
        />
        <BottomNavigationAction 
            label="Notice"
            href='/notice' 
            icon={<Notice/>}
        />
        </BottomNavigation>
        </Paper>
  );
};

export default BottomNavbar;