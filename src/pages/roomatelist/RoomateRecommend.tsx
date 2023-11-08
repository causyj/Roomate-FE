import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <Typography>{children}</Typography>
        )}
      </div>
    );
  }
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export function RoomateRecommend() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
        <div>
            <div className="flex flex-row items-center justify-evenly">
                <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="roomie" width="80px"  />
                <div className="text-2xl ">
                    <span className="font-['700']">모글리</span>님의
                    <div>매칭결과입니다.</div>
                </div>
            </div>
            <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', borderBottom: 1, borderColor: 'divider',}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="추천 룸메이트" {...a11yProps(0)} sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard' }}/>
            <Tab label="전체 목록" {...a11yProps(1)}sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}} />
            <Tab label="찜 목록" {...a11yProps(2)}sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}} />
            
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <Tab1 />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Tab2 />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          sdfsdf
        </CustomTabPanel>
        </div>
    )
}