import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from '../../components/common';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
      fontFamily: ['Pretendard'],
     
    },
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #27334b',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: ['Pretendard'],
      '&:focus': {
        borderRadius: 8,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
export function Optional({ onClick }: { onClick: () => void }) {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (
        <div className="flex flex-col font-['700']">
            <div className=" text-2xl items-center justify-start mt-8">
                <div>추가로 표시되고 싶은 항목을 선택해주세요 (선택사항) </div>
            </div>

            <div className="mt-4 p-4">
                <div>
                    <div>학과</div>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <MenuItem value={10}>소프트웨어학부</MenuItem>
                        <MenuItem value={20}>간호학부</MenuItem>
                        <MenuItem value={30}>미디어학부</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                <div className='mt-8'>
                    <div>학번</div>
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <MenuItem value={10}>21학번</MenuItem>
                        <MenuItem value={20}>22학번</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                <div className='flex flex-row justify-between'>
                <div className='mt-8 flex flex-col'>
                    <div>나이</div>
                    <div>
                    <FormControl sx={{ minWidth: 120 }} >
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <MenuItem value={10}>21학번</MenuItem>
                        <MenuItem value={20}>22학번</MenuItem>
                        </Select>
                    </FormControl>


                    </div>
                </div>
                <div className='mt-8 flex flex-col'>
                    <div>MBTI</div>
                    <div>
                    <FormControl sx={{ minWidth: 120 }} >
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        >
                        <MenuItem value={10}>21학번</MenuItem>
                        <MenuItem value={20}>22학번</MenuItem>
                        </Select>
                    </FormControl>

                    
                    </div>
                    
                
                </div>
                </div>
                
            </div>
            <div className='flex flex-row gap-4  mt-4 justify-center'>
                        <PanoramaFishEyeIcon sx={{ color:'#27334B', width:'16px'}}/>
                        <CircleIcon sx={{ color:'#27334B', width:'16px'}}/>
            </div>
            <div onClick={onClick} className='text-center mt-4'>
                {/* <Button buttonText={'저장하기'}/> */}
            </div>
             {/* <div className="flex justify-center items-center mt-20">
           <ColorButton variant="contained" onClick={handleSubmit}>로그인</ColorButton>
           </div> */}
                
        </div>
    )
}