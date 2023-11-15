import * as React from 'react';
import Typography from '@mui/material/Typography';
import { RoommateRecommendPanel } from './RoommateRecommendPanel';
import { RoommateOption } from './RoommateOption';


export function RoommateRecommend() {
    const [step, setStep] = React.useState(0);
      const handleButtonClick= () =>{
        setStep(step+1);
      }
    
    return (
      <div>
         {step === 0 && <RoommateOption onClick={handleButtonClick} />}
         {/* {step === 1 && <Intro2 onClick={handleButtonClick}/>}
         {step === 2 && <TestPageLayout />} */} 
        <RoommateRecommendPanel />
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