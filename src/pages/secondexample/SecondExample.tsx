import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tab1 } from '../roommatelist/Tab1';
import { Tab2 } from '../roommatelist/Tab2';
import { Tab3 } from '../roommatelist/Tab3';
import { RoommateCard1 } from '../roommatelist/components/RoommateCard1';
import { GoToGroup } from '../roommatelist/components/GoToGroup';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }
//   const ColorFab = styled(MUIButton)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText('#27334B'),
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#27334B',
//     '&:hover': {
//       backgroundColor: '#27334B',
//     },
//     width: '20px',
//     height: '35px',
//     borderRadius: '20px'
//   }));
// function CustomTabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//             <Typography>{children}</Typography>
//         )}
//       </div>
//     );
//   }
// function a11yProps(index: number) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }
export const SecondExample = () => {
  return(
    <div></div>
  )
//     const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const getContentBasedOnTab = () => {
//     switch (value) {
//       case 0:
//         return (
//           <div>
//             <span className="font-['700']">이컴공</span>님을 위한
//             <div>추천 결과입니다.</div>
//           </div>
//         );
//       case 1:
//         return (
//           <div>
//             <span className="font-['700']">전체 목록</span>
//             <div className='text-ms'>이컴공님이 거주하는 건물의</div>
//             <div className='text-ms'>기숙사생들을 모두 볼 수 있어요!</div>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <span className="font-['700']">이컴공</span>님이
//             <div>찜하신 목록입니다.</div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };
//     return (
//         <div>
//     <div className="flex flex-row items-center justify-evenly">
//         <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="roomie" width="80px" />
//         <div className="text-2xl ">{getContentBasedOnTab()}</div>
//       </div>
//             <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', borderBottom: 1, borderColor: 'divider',}}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//             <Tab label="추천 룸메이트" {...a11yProps(0)} sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}}/>
//             <Tab label="전체 목록" {...a11yProps(1)}sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}} />
//             <Tab label="찜 목록" {...a11yProps(2)}sx={{fontSize: '15px', fontWeight:'bold',fontFamily:'Pretendard'}} />

//         </Tabs>
//         </Box>
//         <CustomTabPanel value={value} index={0}>
//         <GoToGroup />
//         <div className="flex flex-row justify-between items-center mt-4">
//         <div className="font-['700'] text-2xl">📍 추천 룸메이트</div>
//         <ColorFab>
//           <ResetIcon />
//         </ColorFab>
//       </div>
//         <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto p-2 mt-4 gap-2 ">
//             <RoommateCard1
//                 name={"아수스"}
//                 dept={"물리학과"}
//                 year={19}
//                 mbti={"비공개"}
//                 age={"비공개"}
//                 animal={'/penguin.png'}
//                 color={'cyan'}
//             />
//             <RoommateCard1
//                 name={"칸타타"}
//                 dept={"국문학과"}
//                 year={23}
//                 mbti={"ENFJ"}
//                 age={"비공개"}
//                 animal={'/quokka.png'}
//                 color={'yellow'}
//             />
//             <RoommateCard1
//                 name={"머쉬룸"}
//                 dept={"약학과"}
//                 year={20}
//                 mbti={"ISFP"}
//                 age={"비공개"}
//                 animal={'/quokka.png'}
//                 color={'yellow'}
//             />
//             <RoommateCard1
//                 name={"졸라맨"}
//                 dept={"화학과"}
//                 year={22}
//                 mbti={"비공개"}
//                 age={"21"}
//                 animal={'/penguin.png'}
//                 color={'cyan'}
//             />
//             <RoommateCard1
//                 name={"칸타타"}
//                 dept={"영화과"}
//                 year={20}
//                 mbti={"ENFJ"}
//                 age={"24"}
//                 animal={'/quokka.png'}
//                 color={'yellow'}
//             />
//             <RoommateCard1
//                 name={"볼로네"}
//                 dept={"의학부"}
//                 year={16}
//                 mbti={"INTJ"}
//                 age={"비공개"}
//                 animal={'/wolf.png'}
//                 color={'gray'}
//             />
//       </div>
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={1}>
//             <Tab2 />
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={2}>
//             <Tab3 />
//         </CustomTabPanel>
// </div>
//     )
}