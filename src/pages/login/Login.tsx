import { Link } from "react-router-dom";
import { LoginTextField } from "./components/LoginTextField";
import Person from '@mui/icons-material/PermIdentity';
import Password from '@mui/icons-material/LockOpen'
import { Button } from "../../components/common";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#27334B'),
    backgroundColor: '#27334B',
    fontSize: 20,
    '&:hover': {
      backgroundColor: '#27334B',
    },
    padding: '8px',
    width: '95%',  
    fontFamily: 'Pretendard',
    borderRadius : '10px'
  }));
export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("sdfs")
    
        try {
          const response = await fetch('https://8b08-220-86-187-75.ngrok.io', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&password=${password}`,
            credentials: 'include',
          });
    
          // Handle the response as needed
          console.log(response);
    
          // Check if login is successful, then redirect to StarPage
          if (response.ok) {
            navigate('/textpage');
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
      const handleUsernameChange = (value:string) => {
        setUsername(value);
    };
    const handlePasswordChange = (value:string) => {
        setPassword(value);
    };
    
    return (
        <div className="flex flex-col font-['700']">
            <Link to='/register' className="text-lg items-end justift-end ml-auto"> 
                회원가입
            </Link>
            <div className="flex flex-col justify-center items-center mt-8">
                <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="monkey" style={{width : '70px'}}/>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="monkey" style={{width : '200px'}}/>
            </div>
            <div className="p-4 text-lg ">
                Aniroomie에서 내 룸메이트도 찾고
                <div>나의 기숙사 생활 유형도 알아보세요!</div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
                <div className="mb-4">
                    <LoginTextField 
                        text="아이디" 
                        icon={<Person/>} 
                        value={username} 
                        onChange={handleUsernameChange}/>
                </div>
                    <LoginTextField 
                        text="비밀번호" 
                        icon={<Password/>}
                        value={password}
                        onChange={handlePasswordChange}
                        />
            </div>
           {/* <div className="flex justify-center items-center mt-20">
           <ColorButton variant="contained" onClick={handleSubmit}>로그인</ColorButton>
           </div> */}
                
                <Link to="/testpage" className="flex justify-center items-center mt-20 ">
                 <Button buttonText="로그인"/>
                </Link>
        </div>
    )
}