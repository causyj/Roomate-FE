import { useState } from "react";
import { RegisterTextField } from "./components/RegisterTextField";
import { PasswordTextField } from "./components/RegisterTextField";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from "../../components/common";
import { RegisterButton } from "../../components/common";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
export function Register() {
    const [email, setEmail] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [code, setCode] = useState('');
    const [isCodeEqual, setIsCodeEqual] = useState(false);
    const [id, setId] = useState('');
    const [isIdDuplicate, setIsIdDuplicate] = useState(false);
    const [isIdDuplicateButton, setIsIdDuplicateButton] = useState(0);
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordcheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
    const [isNicknameDuplicateButton, setIsNicknameDuplicateButton] = useState(0);
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
    const handleCodeCompare = async (e: React.FormEvent) => {
        if(code === authCode){
            setIsCodeEqual(true);
        }else{
            setIsCodeEqual(false);
        }
        }
    const handleIdDuplicate = async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/auth/id/${id}/exists`, {
                  method: 'GET',
                  headers: {
                    
                  },
                });
          
                if (response.ok) {
                  // 서버에서 인증 코드를 반환한 경우
                  const data = await response.text();
                  
                // 중복이면 : true  사용가능하면 : false
                   if(data =='true'){
                    setIsIdDuplicate(true)
                   }else{
                    setIsIdDuplicate(false)
                    setIsIdDuplicateButton(1)
                   }
                  
                } else {
                  // 서버에서 에러가 발생한 경우
                  console.error('Error during mailConfirm1:', response.statusText);
                }
              } catch (error) {
                console.error('Error during mailConfirm2:', error);
              }
            };  
    const handleNicknameDuplicate = async (e: React.FormEvent) => {
                e.preventDefault();
                try {
                    const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/auth/nickname/${nickname}/exists`, {
                      method: 'GET',
                      headers: {

                      },
                    });
              
                    if (response.ok) {
                      // 서버에서 인증 코드를 반환한 경우
                      const data = await response.text();
                      
                    // 중복이면 : true  사용가능하면 : false
                       if(data =='true'){
                        setIsNicknameDuplicate(true)
                       }else{
                        setIsNicknameDuplicate(false)
                        setIsNicknameDuplicateButton(1)
                       }
                      console.log(data);
                    } else {
                      // 서버에서 에러가 발생한 경우
                      console.error('Error during mailConfirm1:', response.statusText);
                    }
                  } catch (error) {
                    console.error('Error during mailConfirm2:', error);
                  }
                };
    const handleSubmit = async (e: React.FormEvent) => {
    }
    const handleEmailChange = (value:string) => {
        setEmail(value);

    };
    const handleCodeChange = (value:string) => {
        setCode(value)
        console.log(code);
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
        console.log(event.target.value);
    };
    const isCauEmail = email.includes('@cau.ac.kr');
    const Idduplicate = isIdDuplicateButton ? "사용 가능한 아이디입니다." : " "
    const Nicknameduplicate = isNicknameDuplicateButton ? "사용 가능한 닉네임입니다." : " "
    return (
        <div className="flex flex-col items-center justify-center font-['700'] mt-[-40px]">
            <div className="text-2xl text-primary-logo">회원가입</div>
            <div className="">Aniroomie에 오신 것을 환영합니다!</div>
            <div className="flex flex-col mt-3">
                {/* 이메일 인증 */}
                <div > 
                    {isCauEmail ? 
                        <div className="flex felx-row gap-2">
                            <RegisterTextField
                                error={false}
                                label="학교 이메일"
                                value={email}
                                onChange={handleEmailChange}
                                helperText=" "
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
                {/* 인증코드  */}
                 <div className="flex felx-row gap-2">
                    <RegisterTextField
                                error={false}
                                label="인증코드 입력"
                                value={code}
                                onChange={handleCodeChange}
                                helperText=""
                    /> 
    
                    {isCodeEqual == true ? 
                    <div className="flex flex-col items-center text-center mx-auto ">
                      <CheckIcon sx={{color : 'green', width:'35px', height:'35px'}}/>
                      <div className="font-['600'] text-xs">확인되었습니다.</div>
                </div>
                    :
                     <RegisterButton onClick={(e) => handleCodeCompare(e)}>확인</RegisterButton>
                }
                    
                </div>
                <div className="font-['400'] text-xs text-gray-400 p-1 ml-2 mb-1">1분 내에 인증코드가 오지 않으면 인증받기를 다시 눌러주세요</div>
                {/* 아이디 */}
                <div className="flex felx-row gap-2">
                     {isIdDuplicate ?
                     <RegisterTextField
                     error={true}
                     label="아이디 입력"
                     value={id}
                     onChange={handleIdChange}
                     helperText="이미 존재하는 아이디입니다."
                        />  
                        : 
                    <RegisterTextField
                     error={false}
                     label="아이디 입력"
                     value={id}
                     onChange={handleIdChange}
                     helperText={Idduplicate}
                        /> 
                    }
                      
                      <RegisterButton onClick={(e) => handleIdDuplicate(e)}>중복확인</RegisterButton>
                </div>
                {/* 비밀번호 */}
                <div className="flex felx-row gap-2 mb-3 mt-1">
                    <PasswordTextField
                                error={false}
                                label="비밀번호 입력"
                                value={password}
                                onChange={handlePasswordChange}
                                helperText=""
                    /> 
                </div>
                {/* 비밀번호 확인 */}
                <div >
                     {password === passwordcheck ?
                    <div className="flex felx-row gap-2">
                        <PasswordTextField
                    error={false}
                    label="비밀번호 확인"
                    value={passwordcheck}
                    onChange={handlePasswordcheckChange}
                    helperText=" "
        /> 
                    
                    </div>
                     :
                     <div className="flex felx-row gap-2" >
                        <PasswordTextField
                                error={true}
                                label="비밀번호 확인"
                                value={passwordcheck}
                                onChange={handlePasswordcheckChange}
                                helperText="비밀번호가 같지 않습니다."
                    /> 
                   
                     </div>
                      }
    
                     
                </div>
                {/* 닉네임*/}
                <div className="flex felx-row gap-2">
                {isNicknameDuplicate ?
                     <RegisterTextField
                     error={true}
                     label="닉네임 입력"
                     value={nickname}
                     onChange={handleNicknameChange}
                     helperText="이미 존재하는 닉네임입니다."
                        />  
                        : 
                    <RegisterTextField
                     error={false}
                     label="닉네임 입력"
                     value={nickname}
                     onChange={handleNicknameChange}
                     helperText={Nicknameduplicate}
                        /> 
                    }
                      <RegisterButton onClick={(e) => handleNicknameDuplicate(e)}>중복확인</RegisterButton>
                </div> 
                {/* 성별*/}
                <div className="flex felx-row gap-2 p-1 justify-evenly items-center mb-1">
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
                                height : '48px',
                            }}
                            
                        >
                            <MenuItem value={'F'}>여성</MenuItem>
                            <MenuItem value={'M'}>남성</MenuItem>
                        </Select>
                        </FormControl>
                
                    </div>
                </div>
                <Button onClick={(e) => handleSubmit(e)}>회원가입 하기</Button>
                
            </div>
         
    )
}