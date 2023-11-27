import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tab1 } from './Tab1';

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
export const Group = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


    return (
        <div>
    <div className="flex flex-row items-center justify-evenly gap-4">
        <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="roomie" width="80px" />
        <div className="flex flex-col justify-center items-center">
            <span className="font-['700'] text-2xl">기숙사 내 모임목록</span>
            <div className='text-ms'>기숙사 내의 모임을 둘러보세요!</div>
            <div className='text-ms'>원하는 모임을 만들수도 있어요</div>
  
        </div>
      </div>
            <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', borderBottom: 1, borderColor: 'divider', width:'100%'}}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="모임 추천" {...a11yProps(0)} sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard',marginRight:'30px'}}/>
                <Tab label="전체 목록" {...a11yProps(1)}sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}} />
              </Tabs>
            </Box>
        <CustomTabPanel value={value} index={0}>
          <Tab1/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div></div>
        </CustomTabPanel>
  
</div>
    )
}