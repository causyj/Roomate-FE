import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';
import { Tab3 } from './Tab3';
import { Avatar, Stack } from '@mui/material';
import { ANIMAL_DATA } from '../../constants';
import { AnimalType } from '../../interface/AnimalType';

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
export const RoommateRecommendPanel = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getContentBasedOnTab = () => {
    switch (value) {
      case 0:
        return (
          <div>
            <span className="font-['700']">김푸앙</span>님을 위한
            <div>추천 결과입니다.</div>
          </div>
        );
      case 1:
        return (
          <div>
            <span className="font-['700']">전체 목록</span>
            <div className='text-ms'>김푸앙님이 거주하는 건물의</div>
            <div className='text-ms'>기숙사생들을 모두 볼 수 있어요!</div>
          </div>
        );
      case 2:
        return (
          <div>
            <span className="font-['700']">김푸앙</span>님이
            <div>찜하신 목록입니다.</div>
          </div>
        );
      default:
        return null;
    }
  };
    return (
        <div>
    <div className="flex flex-row items-center justify-evenly">
    {/* <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" sx={{bgcolor:ANIMAL_DATA[animal as AnimalType['animal']].color, width: 70, height: 70}} src={process.env.PUBLIC_URL + animal} />
        </Stack> */}
        <div className="text-2xl ">{getContentBasedOnTab()}</div>
      </div>
            <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', borderBottom: 1, borderColor: 'divider', }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="추천 룸메이트" {...a11yProps(0)} sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}}/>
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
        <CustomTabPanel value={value} index={2}>
            <Tab3 />
        </CustomTabPanel>
</div>
    )
}