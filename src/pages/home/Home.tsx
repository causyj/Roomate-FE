import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <div className='font-bold'>세상에 이런 폰트가 d나오다니 천재인듯</div>
            
            <div className="font-['100']">Hi this is test For eng.ver </div>
            
            <div className="font-['400']">안녕 서비스임7</div>
            <div className="font-['500']">안녕 서비스임7</div>
            <div className="font-['600']">안녕 서비스임7</div>
            <div className="font-['700']">안녕 서비스임7</div>
            <div className="font-['800']">안녕 서비스임7</div>
            <div className="font-['900']">안녕 서비스임7</div>
            
            <div className='flex flex-col'>
            <Link to='/'>
                <div className="font-['100'] ">100-home</div>
            </Link>
            <Link to='/Login'>
                <div className="font-['200'] ">200-login</div>
            </Link>
            <Link to='/Register'>
                <div className="font-['300'] ">300-register</div>
            </Link>
            <Link to='/TestPage'>
                <div className="font-['400']">400-textpage</div>
            </Link>
            <Link to='/ResultHome'>
                <div className="font-['500'] ">500-resulthome</div>
            </Link>
            <Link to='/TypeResult'>
                <div className="font-['500'] ">500-typeresult</div>
            </Link>
            <Link to='/animaldict'>
                <div className="font-['600'] ">600-animaldic</div>
            </Link>
            <Link to='/verify'>
                <div className="font-['700'] ">700-verfiy</div>
            </Link>
            <Link to='/chat'>
                <div className="font-['800'] ">800-chat</div>
            </Link>
            <Link to='/roommateOption'>
                <div className="font-['900'] ">900-roomateOption</div>
            </Link>
            <Link to='/roommatelist'>
                <div className="font-['900'] ">900-roomatelist</div>
            </Link>
            <Link to='/group'>
                <div className="font-['900'] ">900-GroupList</div>
            </Link>
            <Link to='/notice'>
                <div className="font-['900'] ">900-Notice</div>
            </Link>
            
            </div>
        </div>
    )
}