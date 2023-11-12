import { Link } from "react-router-dom";
import { LoginTextField } from "./components/LoginTextField";
import Person from '@mui/icons-material/PermIdentity';
import Password from '@mui/icons-material/LockOpen'
import { Button } from "../../components/common";
export function Login() {
    return (
        <div className="flex flex-col font-['700']">
            <Link to='/register' className="text-lg items-end justift-end ml-auto"> 
                회원가입
            </Link>
            <div className="flex flex-col justify-center items-center mt-4">
                <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="monkey" style={{width : '70px'}}/>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="monkey" style={{width : '200px'}}/>
            </div>
            <div className="p-5">
            Aniroomie에서 나의 룸메이트도 찾고 나의 기숙사 생활 유형도 알아보세요 !
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
                 <LoginTextField text="아이디" icon={<Person/>}/>
                 <LoginTextField text="비밀번호" icon={<Password/>}/>
            </div>
            
                <Link to="/" className="flex justify-center items-center mt-20">
                 <Button buttonText="로그인" />
                </Link>
               
           
            
        </div>
    )
}