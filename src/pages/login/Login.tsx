import { Link } from "react-router-dom";
import { LoginTextField } from "./components/LoginTextField";
import Person from '@mui/icons-material/PermIdentity';
import Password from '@mui/icons-material/LockOpen'
import { Button } from "../../components/common";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login  = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isFirst, setIsFirst] = useState(false); 
     

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("sdfs")

        try {
          const response = await fetch('http://ANIroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/login', {
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
           
            navigate('/home');
            
            
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
        <div className="flex flex-col w-full h-full font-['700'] itmes-center justify-center">
            
            <div className="flex flex-col justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="monkey" style={{width : '70px'}}/>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="monkey" style={{width : '200px'}}/>
            </div>
            <div className="p-4 text-m text-center mx-auto">
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
            <div className="flex justify-center items-center mt-20">
             {/* <ColorButton variant="contained" onClick={handleSubmit}>로그인</ColorButton> */}
             <Button onClick={(e) => handleSubmit(e)}>로그인</Button>
        

           </div>
           <div className="flex items-center text-sm text-center mx-auto ml-auto mt-2">
            아직 계정이 없으신가요? 
            <span className="ml-2 text-primary-logo">
              <Link to='/register' className="text-lg text-center mx-auto ml-auto mt-4 "> 
                   회원가입
              </Link>
            </span>
           </div>
           

        </div>
    )
}