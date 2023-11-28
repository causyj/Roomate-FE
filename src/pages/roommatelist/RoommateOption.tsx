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
export function RoommateOption({ onClick }: { onClick: () => void }) {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (
        <div className="flex flex-col font-['700']">
            <div className=" text-2xl items-center justify-start mt-8">
                <div>보다 정확한 추천을 위해,</div>
                <div>아래의 내용을 입력해주세요!</div>
            </div>

            <div className="mt-12">
                <div>
                    <div className='mb-4'>거주하게 될 기숙사 *</div>
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
                        <MenuItem value={10}>블루미르홀 308관</MenuItem>
                        <MenuItem value={20}>블루미르홀 309관</MenuItem>
                        <MenuItem value={30}>퓨처하우스</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                <div className='mt-8'>
                    <div className='mb-4'>호실 인원 *</div>
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
                          <MenuItem value={10}>2인실</MenuItem>
                          <MenuItem value={20}>4인실</MenuItem>
                          </Select>
                      </FormControl>
                      </Box>
                    <div className='flex flex-row gap-4  mt-12 justify-center'>
                      <CircleIcon sx={{ color:'#27334B', width:'16px'}}/>
                      <PanoramaFishEyeIcon sx={{ color:'#27334B', width:'16px'}}/>
                    </div>
                   
                    <div onClick={onClick} className="flex items-center justify-center mt-4">
                     {/* <Button buttonText='저장하기'/> */}
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}