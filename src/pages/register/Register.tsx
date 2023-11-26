import { useState } from "react";
import { RegisterTextField } from "./components/RegisterTextField";
import { RegisterButton } from "./components/RegisterButton";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from "../../components/common";
export function Register() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordcheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [gender, setGender] = useState('');
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
    return (
        <div className="flex flex-col items-center justify-center font-['700']">
            <div className="text-xl mt-4">회원가입</div>
            <div className="mt-4">Aniroomie에 오신 것을 환영합니다!</div>
            <div className="flex flex-col mt-4">
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="학교 이메일"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <RegisterButton text="인증받기"/>
                </div>
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="인증코드 입력"
                        value={code}
                        onChange={handleCodeChange}
                    />
                    <RegisterButton text="확인"/>
                </div>
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="아이디 입력"
                        value={id}
                        onChange={handleIdChange}
                    />
                    <RegisterButton text="중복확인"/>
                </div>
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="비밀번호 입력"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <RegisterButton text="확인"/>
                </div>
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="비밀번호 확인"
                        value={passwordcheck}
                        onChange={handlePasswordcheckChange}
                    />
                    <RegisterButton text="중복확인"/>
                </div>
                <div className="flex felx-row gap-2 p-1">
                    <RegisterTextField
                        label="닉네임 입력"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                    <RegisterButton text="중복확인"/>
                </div>
                <div className="flex felx-row gap-2 p-1 justify-evenly items-center">
                    <div className="font-['700'] text-xl">성별</div>
                    <div className="font-['700']">
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
                            }}
                            
                        >
                            <MenuItem value={'female'}>여성</MenuItem>
                            <MenuItem value={'male'}>남성</MenuItem>
                        </Select>
                        </FormControl>
                   
                    </div>
                </div>
                <div className="mb-12 mt-4">
                    <Button buttonText="회원가입 하기"/>
                </div>
            </div>
            
        </div>
    )
}