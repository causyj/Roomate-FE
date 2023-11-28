import * as React from 'react';
import { RoommateRecommendPanel } from './RoommateRecommendPanel';
import { RoommateOption } from './RoommateOption';
import { Optional } from './Optional';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Button } from '../../components/common';
import { Loading } from '../../components/Loading';
import { useState } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard1 } from "./components/RoommateCard1";
import { Card73 } from "./components/Card73";
import { Card43 } from "./components/Card43";
const Intro1 = ({ onClick }: { onClick: () => void }) => {
  return(
      <div className="flex flex-col items-center mt-12">
          <div className="text-3xl font-['700']" >축하합니다!</div>
          
              <div className="text-xl font-['300'] mt-6">룸메이트 추천을 위한</div>
              <div className="text-xl font-['300']">모든 과정이 끝났습니다</div>
         
          <div className="mt-8">
              <img src={process.env.PUBLIC_URL + '/congratulation.png'} alt="monkey" style={{width : '200px'}}/>
          </div>
          <div onClick={onClick} className='w-1/3 text-center mt-8'>
                {/* <Button buttonText={'→'}/> */}
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
    const [step, setStep] = React.useState(3);
   
      const handleButtonClick= () =>{
        setStep(step+1);
      }
    //   useEffect(() => {
    //     // 최초 렌더링 시에만 실행되도록 설정
    //     if (step === 0) {
    //         // 여기에 최초 렌더링 시에 실행되어야 하는 로직 추가
    //     }
    // }, [step]);
    return (
      <div>
         {/* {step === 0 && <RoommateOption onClick={handleButtonClick} />}
         {step === 1 && <Optional onClick={handleButtonClick}/>}
         {step === 2 && <Intro1 onClick={handleButtonClick}/>}  */}
         {/* 원래 이 페이지여야 하지만, 우선 제외 
         {step === 3 && <Intro2 onClick={handleButtonClick}/>}  
         */} 
         {step === 3 && <RoommateRecommendPanel />} 
         
      </div>
  )
}
