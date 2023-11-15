import * as React from 'react';
import { RoommateRecommendPanel } from './RoommateRecommendPanel';
import { RoommateOption } from './RoommateOption';
import { Optional } from './Optional';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Button } from '../../components/common';
import { Loading } from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
const Intro1 = ({ onClick }: { onClick: () => void }) => {
  return(
      <div className="flex flex-col items-center mt-8">
        <div className='flex flex-row gap-4 mb-8'>
          <CircleIcon sx={{ color:'#27334B', width:'20px'}}/>
          <PanoramaFishEyeIcon sx={{ color:'#27334B', width:'20px'}}/>
        </div>
          <div className="text-3xl font-['700']" >축하합니다!</div>
          
              <div className="text-xl font-['300'] mt-6">룸메이트 추천을 위한</div>
              <div className="text-xl font-['300']">모든 과정이 끝났습니다</div>
         
          <div className="mt-8">
              <img src={process.env.PUBLIC_URL + '/congratulation.png'} alt="monkey" style={{width : '200px'}}/>
          </div>
          <div onClick={onClick} className='w-1/3 text-center mt-4'>
                <Button buttonText={'→'}/>
            </div>
      </div>
  )
}
export const Intro2 = ({ onClick }: { onClick: () => void })  => {
  return (
      <div className="flex flex-col items-center justify-center font-['700']">
          <div className="px-8 text-xl">더 많은 사용자의 유입을 위해, 기숙사 합격통보 날의 일주일 뒤부터 매칭을 시작합니다</div>
          <div className="mt-8 mb-4">
              <img src={process.env.PUBLIC_URL + '/calendar.png'} alt="monkey" style={{width : '200px'}}/>
          </div>
          <div>
              매칭이 시작되면 알림으로 알려드릴게요 :)
          </div>
   
      </div>
  )
}
export function RoommateRecommend() {
    const [step, setStep] = React.useState(0);
    const [loading, setLoading] = useState(true);
      const handleButtonClick= () =>{
        setStep(step+1);
      }
    
    return (
      <div>
         {step === 0 && <RoommateOption onClick={handleButtonClick} />}
         {step === 1 && <Optional onClick={handleButtonClick}/>}
         {step === 2 && <Intro1 onClick={handleButtonClick}/>} 
         {/* 원래 이 페이지여야 하지만, 우선 제외 
         {step === 3 && <Intro2 onClick={handleButtonClick}/>}  
         */} 
         {step === 3 && <RoommateRecommendPanel />} 
         
      </div>
  )
}
