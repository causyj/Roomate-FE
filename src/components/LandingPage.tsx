import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const timeout = () => {
    return setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  useEffect(() => {
    const timeoutId = timeout();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 

  return (
    <div className="w-full min-w-[380px] h-full min-h-[700px] mt-[-80px]  bg-primary-logo flex flex-col items-center justify-center">
      {/* <div className='flex flex-row mb-12'> 
          <div className="font-['700'] text-2xl text-white">반가워요</div>
          <WavingHandIcon sx={{color : '#FFE928', marginTop:'5px'}}/>
      </div>  */}
      <img src={process.env.PUBLIC_URL + '/landing.png'} alt="logo" style={{width : '50%'}}/>
    </div>
  );
};
