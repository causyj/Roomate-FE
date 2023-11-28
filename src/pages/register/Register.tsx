import { useState } from "react";
import { RegisterTextField } from "./components/RegisterTextField";
// import { RegisterButton } from "./components/RegisterButton";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from "../../components/common";
import { RegisterButton } from "../../components/common";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
export function Register() {
    const [email, setEmail] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [code, setCode] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordcheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState('');
    const handleEmailConfirm = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/mailConfirm', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
              }),
            });
      
            if (response.ok) {
              // 서버에서 인증 코드를 반환한 경우
              const data = await response.text();
              if(data != ''){
                setAuthCode(data);
              }
              console.log({authCode});
            } else {
              // 서버에서 에러가 발생한 경우
              console.error('Error during mailConfirm1:', response.statusText);
            }
          } catch (error) {
            console.error('Error during mailConfirm2:', error);
          }
        };
    const handleSubmit = async (e: React.FormEvent) => {}
    const handleEmailChange = (value:string) => {
        setEmail(value);
    };
    const handleCodeChange = (value:string) => {
        setCode(value)
    };
    const handleIdChange = (value:string) => {
        setId(value)
    };
    const handlePasswordChange = (value:string) => {
        setPassword(value)
    };
    const handlePasswordcheckChange = (value:string) => {
        setPasswordcheck(value)
    };
    const handleNicknameChange = (value:string) => {
        setNickname(value)
    };
    const handleGenderChange = (event: SelectChangeEvent<string>) => {
        setGender(event.target.value);
    };
    const isCauEmail = email.includes('@cau.ac.kr');
    return (
        <div className="flex flex-col items-center justify-center font-['700'] mb-16 ">
            <div className="text-2xl mt-12  text-primary-logo">회원가입</div>
            <div className="mt-4">Aniroomie에 오신 것을 환영합니다!</div>
            <div className="flex flex-col mt-4">
                <div >
                    {isCauEmail ? 
                        <div className="flex felx-row gap-2">
                            <RegisterTextField
                                error={false}
                                label="학교 이메일"
                                value={email}
                                onChange={handleEmailChange}
                                helperText=""
                            /> 
                            <RegisterButton onClick={(e) => handleEmailConfirm(e)}>인증받기</RegisterButton>
                        </div>

                    :
                    <div className="flex felx-row gap-2">
                        <RegisterTextField
                            error={true}
                            label="학교 이메일"
                            value={email}
                            onChange={handleEmailChange}
                            helperText="@cau.ac.kr 형식이어야 합니다."
                            />
                        <RegisterButton onClick={() => {}}>인증받기</RegisterButton>
                        
                    </div>
                    }
                   
                </div>
                {/* <div className="font-['500'] text-xs ml-2 text-red-600">이메일 형식이 @cau.ac.kr이 아닙니다.</div> */}
                {/* <div className="flex felx-row gap-2 mb-3">
                    <RegisterTextField
                        label="인증코드 입력"
                        value={code}
                        onChange={handleCodeChange}
                    />
                     <RegisterButton onClick={(e) => handleSubmit(e)}>로그인</RegisterButton>
                </div>
                <div className="flex felx-row gap-2 mb-3">
                    <RegisterTextField
                        label="아이디 입력"
                        value={id}
                        onChange={handleIdChange}
                    />
                      <RegisterButton onClick={(e) => handleSubmit(e)}>로그인</RegisterButton>
                </div>
                <div className="flex felx-row gap-2 mb-3">
                    <RegisterTextField
                        label="비밀번호 입력"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                     <RegisterButton onClick={(e) => handleSubmit(e)}>로그인</RegisterButton>
                </div>
                <div className="flex felx-row gap-2 mb-3">
                    <RegisterTextField
                        label="비밀번호 확인"
                        value={passwordcheck}
                        onChange={handlePasswordcheckChange}
                    />
                      <RegisterButton onClick={(e) => handleSubmit(e)}>로그인</RegisterButton>
                </div>
                <div className="flex felx-row gap-2 mb-3">
                    <RegisterTextField
                        label="닉네임 입력"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                      <RegisterButton onClick={(e) => handleSubmit(e)}>로그인</RegisterButton>
                </div> */}
                <div className="flex felx-row gap-2 p-1 justify-evenly items-center mb-4">
                    <div className="font-['700'] text-xl">성별</div>        
                    <FormControl sx={{ width: '200px',borderRadius: '50%' }}>
                        <InputLabel id="demo-simple-select-label" >성별</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            label="Age"
                            onChange={handleGenderChange}
                            sx={{
                                borderRadius: '10px',
                                height : '50px',
                            }}
                            
                        >
                            <MenuItem value={'female'}>여성</MenuItem>
                            <MenuItem value={'male'}>남성</MenuItem>
                        </Select>
                        </FormControl>
                
                    </div>
                </div>
    
               
                <Button onClick={(e) => handleSubmit(e)}>회원가입 하기</Button>
                
            </div>
         
    )
}