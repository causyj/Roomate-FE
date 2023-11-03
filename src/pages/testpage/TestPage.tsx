import { useState } from "react"
import { Button } from "../../components/common"
import { TestPageLayout } from "./TestPageLayout"

const Intro1 = ({ onClick }: { onClick: () => void }) => {
  return(
      <div className="flex flex-col ">
          <div className=" text-3xl mb-6">
              <div>어서오세요!</div>
              <div>처음이신가요?</div>
          </div>
          <div className="flex flex-wrap text-l">
              <div>나와 맞는 룸메이트를 찾기 위해 먼저</div>
              <div className="font-['600']">나의 생활유형</div>
              <div>을 알아야해요!</div>
          </div>
          <div className='flex justify-end items-end mt-56 mb-4' style={{position:'relative'}}>
              <img src={process.env.PUBLIC_URL + '/cloud.png'} alt="TalkBaloon" style={{width : '200px', position:'absolute' }}/>
              <div className="flex flex-col items-center mb-24 pr-8 font-['700'] text-xl" style={{position : 'absolute'}}>
                  <div className="mb-2">루미랑</div>
                  <div >테스트 하러갈래?</div>
              </div>
          </div>
          <div>
              <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="Roomie" style={{width : '180px'}} />
          </div>
          <div onClick={onClick} className="flex items-center justify-center mt-8">
              <Button buttonText="생활유형 테스트 하러 가기" />
          </div>
      </div>         
  )
}
const Intro2 = ({ onClick }: { onClick: () => void }) => {
  return(
      <div>
          <div className="mt-16 text-xl">
          <div>
              <span className="font-bold">5분정도</span> 소요되는
          </div>
          생활유형 테스트를 통해 
          <div>
              <span className="font-bold">모글리님</span>에게 딱 맞는 
          </div>
          콘텐츠를 제공해드릴게요! 
          <div className="mt-4">
              테스트는 <span className="font-bold">한 번만 </span>제공되니, 
          </div>
          <span className="font-bold">꼭! 솔직하게 대답해주세요 :) </span>
          </div>
          <div className="p-12 mt-8">
              <img src={process.env.PUBLIC_URL + '/test.png'} alt="testpaper"/>
          </div>
          <div onClick={onClick}className="flex items-center justify-center mt-8">
                  <Button buttonText="시작하기" />
          </div>
      </div>
      
  )
}
const Test = () => {
  return (
    <div>
      <TestPageLayout />
    </div>
  )
}

export function TestPage() {
  const [step, setStep] = useState(0);
  const handleButtonClick= () =>{
    setStep(step+1);
  }
    return (
       <div>
         {step === 0 && <Intro1 onClick={handleButtonClick} />}
         {step === 1 && <Intro2 onClick={handleButtonClick}/>}
         {step === 2 && <Test />}
         
       </div>
    )
}