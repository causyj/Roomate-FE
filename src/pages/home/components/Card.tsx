import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  text: string;
  description1: string;
  description2: string;
  link:string;
}

export const Card: React.FC<CardProps> = ({ image, text, description1, description2, link }) => {
  const [showExtraContent, setShowExtraContent] = useState(false);

  const toggleExtraContent = () => {
    setShowExtraContent(!showExtraContent);
  };

  return (
    <div className="flex flex-row">
      <div
        className={`h-60 w-[200px]  rounded-2xl bg-primary-ivory shadow-2xl flex flex-col p-3 justify-center items-center text-center  ${
          showExtraContent ? 'cursor-pointer' : ''
        }`}
        onClick={toggleExtraContent}
      >
        <img src={process.env.PUBLIC_URL + `/${image}.png`} alt="logo" style={{ width: '65px' }} />
        <div className="font-['700'] text-3xl text-primary-bg mt-2">{text}</div>
        <div className="font-['700'] text-sm text-primary-gray mt-4 ">{description1}</div>
        <div className="font-['700'] text-sm text-primary-gray ">{description2}</div>
      </div>
      {showExtraContent && (
        <Link to={`${link}`}>
            <div className="h-60 w-20 z-1 rounded-r-2xl bg-primary-logo shadow-2xl flex flex-col p-3 justify-center items-end text-center ml-[-20px]">
                <ArrowForwardIosIcon sx={{width:'35px', height:'35px', color:'white'}}/>
            </div>
        </Link>
        
      )}
    </div>
  );
};
