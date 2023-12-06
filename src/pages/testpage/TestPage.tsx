import { useEffect, useState } from "react"
import { Button } from "../../components/common"
import { TestPagePanel } from "./TestPagePanel"
import { useNavigate } from "react-router-dom"

const Intro1 = ({ onClick }: { onClick: () => void }) => {
  return(
     <div className="mt-[-80px]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',padding:'20px' }}>
         <div className="flex flex-col  justify-center  ">
          <div className="font-['700'] text-3xl mb-4">
              <div>어서오세요!</div>
              <div>처음이신가요?</div>
          </div>
          <div className="flex flex-wrap text-lg">
              <div>나와 맞는 룸메이트를 찾기 위해 먼저</div>
              <div className="font-['600']">나의 생활유형</div>
              <div>을 알아야해요!</div>
          </div>
          <div className='flex justify-end items-end mt-48 mb-4 mr-2' style={{position:'relative'}}>
              <img src={process.env.PUBLIC_URL + '/cloud.png'} alt="TalkBaloon" style={{width : '180px', position:'absolute' }}/>
              <div className="flex flex-col items-center mb-20 mr-5 font-['700'] text-xl" style={{position : 'absolute'}}>
                  <div className="mb-2">루미랑</div>
                  <div className="mb-2">테스트 하러갈래?</div>
              </div>
          </div>
          <div className="mt-[-20px]">
              <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="Roomie" style={{width : '150px'}} />
          </div>
          <div onClick={onClick} className="flex items-center justify-center mt-4">
              <Button>생활유형 테스트 하러 가기</Button>
          </div>
      </div>   
    </div>      
  )
}
const Intro2 = ({ onClick }: { onClick: () => void }) => {
  return(
    <div className="mt-[-80px]" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',padding:'20px' }}>
         <div className="w-full  flex flex-col justify-center">
          <div className="flex flex-col text-xl">
          <div>
              <span className="font-bold ">3분정도</span> 소요되는
          </div>
          생활유형 테스트를 통해 
          <div>
              <span className="font-bold">김푸앙님</span>에게 딱 맞는 
          </div>
          콘텐츠를 제공해드릴게요! 
          <div className="mt-4 text-lg">
            테스트는 중간에 나가면 
            
          </div>
          <div><span className="font-bold text-lg">저장이 안되니, </span>주의해주세요!</div>
          <span className="font-bold mt-4">꼭! 솔직하게 대답해주세요 :) </span>
          </div>
          <div className="p-10">
              <img src={process.env.PUBLIC_URL + '/test.png'} alt="testpaper"/>
          </div>
          <div onClick={onClick}className="flex items-center justify-center ">
          <Button>시작하기</Button> 
          </div>
      </div>
    </div>
     
      
  )
}

export function TestPage() {
  const [step, setStep] = useState(0);
  const [isFirst, setIsFirst] = useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setIsFirst(data);
        } else {
          console.error('Failed to fetch initial card data: ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch initial card data: ', error);
      }
    };
  
    fetchData(); // Call the async function
  }, []); 

  const handleButtonClick= () =>{
    setStep(step+1);
  }
    return (
    <div>
         {!isFirst ? 
         <div>
            {step === 0 && <Intro1 onClick={handleButtonClick} />}
            {step === 1 && <Intro2 onClick={handleButtonClick}/>}
            {step === 2 && <TestPagePanel />}
         </div>
         :
         <div>
             {step === 0 && <Intro2 onClick={handleButtonClick}/>}
             {step === 1 && <TestPagePanel />}
         </div>
         }
    </div>
    )
}