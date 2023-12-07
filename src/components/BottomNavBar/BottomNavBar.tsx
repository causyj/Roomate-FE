import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/HomeRounded";
import Chat from '@mui/icons-material/ChatRounded';
import People from '@mui/icons-material/PeopleRounded'
import Notice from '@mui/icons-material/NotificationsRounded';
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BottomNavbar = (): React.ReactElement => {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setValue(0);
        break;
      case '/chat':
        setValue(1);
        break;
      case '/roommatelist':
        setValue(2);
        break;
      case '/notice':
        setValue(3);
        break;
      default:
        break;
    }
  }, [location.pathname]);
  if (location.pathname === '/home') {
    return (
      <Paper style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', zIndex: 50000 , marginLeft:'-205px'}}>
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
          icon={<Notice />}
        />
      </BottomNavigation>
    </Paper>
    );
  }
  return (
    <Paper style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', zIndex: 50000 }}>
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
          icon={<Notice />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
