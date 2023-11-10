import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AnimalDictionary } from '../animaldict/AnimalDictionary';
import { TypeResult } from '../typeresult/TypeResult';
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

export const ResultHome = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
    <div>
        <div className="flex items-center justify-center mb-4">
                <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '150px'}}/>
        </div>
        <div className="font-['700']">
          <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', borderBottom: 1, borderColor: 'divider',}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="나의 생활 유형" {...a11yProps(0)} sx={{marginRight:'50px' ,fontSize: '17px', fontWeight:'bold',fontFamily:'Pretendard'}}/>
              <Tab label="동물 사전" {...a11yProps(1)}sx={{fontSize: '17px', fontWeight:'bold',fontFamily:'Pretendard'}} />
              
            </Tabs>
          </Box>
        </div>
        <CustomTabPanel value={value} index={0}>
          <TypeResult />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AnimalDictionary />
        </CustomTabPanel>
        
    </div>
    )
}