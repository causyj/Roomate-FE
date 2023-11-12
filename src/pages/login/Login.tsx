import { Link } from "react-router-dom";
import { LoginTextField } from "./components/LoginTextField";
import Person from '@mui/icons-material/PermIdentity';
export function Login() {
    return (
        <div className="flex flex-col ">
            <Link to='/register'> 
                회원가입
            </Link>
            <div>
                <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="monkey" style={{width : '50px'}}/>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="monkey" style={{width : '300px'}}/>
            </div>
            <div>
            Aniroomie에서 나의 룸메이트도 찾고 나의 기숙사 생활 유형도 알아보세요 !
            </div>
            <LoginTextField text="아이디" icon={<Person/>}/>
            
        </div>
    )
}