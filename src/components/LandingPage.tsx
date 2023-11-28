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
    <div className="min-w-[420px] min-h-[1000px] max-h-screen h-screen  bg-primary-logo flex items-center justify-center">
    <img src={process.env.PUBLIC_URL + '/landing.png'} alt="logo" style={{width : '45%'}}/>
</div>
  );
};
