import * as React from 'react';
import { RoommateRecommendPanel } from './RoommateRecommendPanel';
import { RoommateOption } from './RoommateOption';
import { Optional } from './Optional';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Button } from '../../components/common';
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
          <div onClick={onClick} className='w-full text-center mt-4'>
                <Button buttonText={'다음 페이지'}/>
            </div>
      </div>
  )
}
export function RoommateRecommend() {
    const [step, setStep] = React.useState(0);
      const handleButtonClick= () =>{
        setStep(step+1);
      }
    
    return (
      <div>
         {step === 0 && <RoommateOption onClick={handleButtonClick} />}
         {step === 1 && <Optional onClick={handleButtonClick}/>}
         {step === 2 && <Intro1 onClick={handleButtonClick}/>} 
         {/* <RoommateRecommendPanel />  */}
      </div>
  )
}


// const [step, setStep] = useState(0);
//   const handleButtonClick= () =>{
//     setStep(step+1);
//   }
//     return (
//     <div>
//          {step === 0 && <Intro1 onClick={handleButtonClick} />}
//          {step === 1 && <Intro2 onClick={handleButtonClick}/>}
//          {step === 2 && <TestPageLayout />}
//     </div>
//     )