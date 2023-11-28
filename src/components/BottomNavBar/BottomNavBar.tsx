import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/HomeRounded";
import Chat from '@mui/icons-material/ChatRounded';
import People from '@mui/icons-material/PeopleRounded'
import Notice from '@mui/icons-material/NotificationsRounded';
import { Paper } from "@mui/material";
import { useEffect } from "react";
const BottomNavbar = (): React.ReactElement => {
  const [value, setValue] = React.useState(0);
  const pathname = window.location.pathname; 
  useEffect(() => {
    if (pathname === '/home') {
      setValue(0);
    } else if (pathname === '/chat') {
      setValue(1);
    } else if (pathname === '/roomatelist') {
      setValue(2);
    }else if (pathname === '/notice') {
        setValue(3);
      }
  }, [pathname]);
  return (
   
    
    <Paper style={{ position: 'fixed', bottom: 0, width: '100%',  backgroundColor: 'white',zIndex: 1000 } } >
    
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);    
        }}
        >
        <BottomNavigationAction 
            label={<div className="font-['700']">Home</div>}
            icon={<Home />}
            href='/home' 
        />
        <BottomNavigationAction 
            label={<div className="font-['700']">Chat</div>}
            icon={<Chat />}
            href='/chat' 
        />
        <BottomNavigationAction 
            label={<div className="font-['700']">Roomate</div>}
            href='/roommatelist' 
            icon={<People />}
        />
        <BottomNavigationAction 
            label={<div className="font-['700']">Notice</div>}
            href='/notice' 
            icon={<Notice/>}
        />
        </BottomNavigation>
        </Paper>
  );
};

export default BottomNavbar;
