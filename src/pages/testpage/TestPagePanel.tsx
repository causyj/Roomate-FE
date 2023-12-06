import { useEffect, useState } from 'react';
import { AnswerCard } from "./components/AnswerCard";
import { DescriptiveQuestion } from './DescriptiveQuestion';
import { TEST_LIST } from '../../constants';
import { useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Loading } from '../../components/Loading';
type answerProps = {
  index : number;
}
type ProgressProps ={
  done: number;
}

const Progress: React.FC<ProgressProps> = ({ done }) => {
  const [style, setStyle] = useState({} as React.CSSProperties);

  useEffect(() => {
    const newStyle: React.CSSProperties = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, [done]);

  return (
    <div className="bg-slate-200 rounded-3xl relative m-6 h-12 w-72">
    <div
      className="bg-gradient-to-left bg-primary-logo shadow-md rounded-3xl font-['700'] text-white flex items-center justify-center opacity-0 h-full w-0 transition-all duration-2000 ease"
      style={style}
    >{done}%
      </div>
    </div>
  );
};
export function TestPagePanel() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [done, setDone] = useState(0);

const [bedtimeScore, setbedtimeScore] = useState(0);
const [wakeupScore, setwakeupScore] = useState(0);
const [wakeupSensitivity, setwakeupSensitivity] = useState(0);
const [cleaningScore, setcleaningScore] = useState(0);
const [cleaningSensitivity, setcleaningSensitivity] = useState(0);
const [foodScore, setfoodScore] = useState(0);
const [foodSensitivity, setfoodSensitivity] = useState(0);
const [cigaretteScore, setcigaretteScore] = useState(0);
const [studyScore, setstudyScore] = useState(0);
const [studySensitivity, setstudySensitivity] = useState(0);
const [notebookScore, setnotebookScore] = useState(0);
const [notebookSensitivity, setnotebookSensitivity] = useState(0);
const [alarmScore, setalarmScore] = useState(0);
const [alarmSensitivity, setalarmSensitivity] = useState(0);
const [latestudyScore, setlatestudyScore] = useState(0);
const [latestudySensitivity, setlatestudySensitivity] = useState(0);
const [snoringScore, setsnoringScore] = useState(0);
const [snoringSensitivity, setsnoringSensitivity] = useState(0);
const [friendlyScore, setfriendlyScore] = useState(0);
const [inhomeScore, setinhomeScore] = useState(0);
const [inhomeSensitivity, setinhomeSensitivity] = useState(0);
const [coldOrHot, setcoldOrHot] = useState(0);
const [summerOrWinter, setsummerOrWinter] = useState(0);
const navigate = useNavigate();
const [loading, setLoading] = useState(true);

const timeout = () => {
        return setTimeout(() => {
          navigate('/resulthome');
        }, 2000);
      };
      useEffect(() => {
            const timeoutId = timeout();
        
            return () => {
              clearTimeout(timeoutId);
            };
          }, []); 
  useEffect(() => {
    console.log(`저장한 답변 ${selectedAnswer}`);
   
  }, [selectedAnswer]); // selectedAnswer가 변경될 때만 실행

  const handleAnswerSelect = ({ index }: answerProps) => {
    // 선택한 답변을 상태에 저장
    setSelectedAnswer(index+1);

  };

  const handleNextPage = async () => {
      if (questionIndex < TEST_LIST.length - 1) {
        let nextQuestionIndex : number=0;
        //questionIndex+1 : 질문 번호
        //selectedAnswer : 답변 번호
        switch (questionIndex+1) {
          case 1:
            setwakeupScore(selectedAnswer);
            setDone((prevDone) => prevDone + 5);
            nextQuestionIndex = questionIndex + 1;
            
            // console.log(wakeupScore);
            break;
            
          case 2:
            // console.log(wakeupScore);
            setbedtimeScore(selectedAnswer)
            setDone((prevDone) => prevDone + 5);
            if (selectedAnswer <=2) {
              nextQuestionIndex = questionIndex + 1;
              
            } else {
              nextQuestionIndex = questionIndex + 2;
      
            }
            break;
           case 3:
            nextQuestionIndex =  questionIndex + 2;
            setwakeupSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 5);
            break;
           case 4:
              nextQuestionIndex =  questionIndex + 1;
              setwakeupSensitivity(selectedAnswer);
              setDone((prevDone) => prevDone + 5);
              break;
          case 5 : 
            setcleaningScore(selectedAnswer);
            setDone((prevDone) => prevDone + 5);
            if (selectedAnswer === 1) {
              nextQuestionIndex =  questionIndex + 2;
              
            }else {
              nextQuestionIndex =  questionIndex + 1;
            }
            break;
          case 6:
            setcleaningSensitivity(selectedAnswer)
            setDone((prevDone) => prevDone + 5);
            nextQuestionIndex =  questionIndex + 2;
            break;
          case 7:
              setcleaningSensitivity(selectedAnswer)
              setDone((prevDone) => prevDone + 5);
              nextQuestionIndex =  questionIndex + 1;
              break;
          case 8 :
            setfoodScore(selectedAnswer)
            setDone((prevDone) => prevDone + 5);
            if (selectedAnswer === 1){
              nextQuestionIndex =  questionIndex + 2;
            }else{
              nextQuestionIndex =  questionIndex + 1;
            }
            break;
          case 9:
            setfoodSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            nextQuestionIndex = questionIndex + 2;
            break;
          case 10:
            setfoodSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            nextQuestionIndex =  questionIndex + 1;
            break;
          case 11:
            if (selectedAnswer == 2){
              setcigaretteScore(3);
            }else{
              setcigaretteScore(selectedAnswer);
            }
            nextQuestionIndex =  questionIndex + 1;
            setDone((prevDone) => prevDone + 5);
            break;
          case 12:
            setstudyScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            if (selectedAnswer === 1){
              nextQuestionIndex =  questionIndex + 2;
            }else{
              nextQuestionIndex =  questionIndex + 1;
            }
            break;
          case 13: 
           setstudySensitivity(selectedAnswer);
           setDone((prevDone) => prevDone + 4);
            nextQuestionIndex =  questionIndex + 2;
            break;
          case 14: 
            setstudySensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
             nextQuestionIndex =  questionIndex + 1;
             break;
          case 15:
            setnotebookScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            nextQuestionIndex = questionIndex + 1;
            break;
          case 16:
            setnotebookSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
              nextQuestionIndex = questionIndex + 1;
              break;
          case 17:
            setalarmScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            nextQuestionIndex = questionIndex + 1;
            break;
          case 18:
            setalarmSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
              nextQuestionIndex = questionIndex + 1;
              break;
          case 19:
            if (selectedAnswer == 2){
              setlatestudyScore(3);
            }else{
              setlatestudyScore(selectedAnswer);
            }
            nextQuestionIndex = questionIndex + 1;
            setDone((prevDone) => prevDone + 4);
            break;
          case 20:
            setlatestudySensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
            nextQuestionIndex = questionIndex + 1;
            break;
          case 21:
            setsnoringScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
              nextQuestionIndex = questionIndex + 1;
              break;
          case 22:
            setsnoringSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
                  nextQuestionIndex = questionIndex + 1;
                  break;
           case 23:
            setfriendlyScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
             nextQuestionIndex = questionIndex + 1;
              break;
          case 24:
            setinhomeScore(selectedAnswer);
            setDone((prevDone) => prevDone + 4);
                 nextQuestionIndex = questionIndex + 1;
                  break;
          case 25:
            setinhomeSensitivity(selectedAnswer);
            setDone((prevDone) => prevDone + 5);
            nextQuestionIndex = questionIndex + 1;
            break;
         case 26:
          setcoldOrHot(selectedAnswer-1);
          setDone((prevDone) => prevDone + 5);
            nextQuestionIndex = questionIndex + 1;
            break;
         case 27:
          if (selectedAnswer == 2){
            setsummerOrWinter(3);
          }else{
            setsummerOrWinter(selectedAnswer);
          }
          setDone((prevDone) => prevDone + 3);
          break;
                         
  
          default:
            nextQuestionIndex = questionIndex + 1;
            break;
  
        }
    
        setQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(0); // 선택한 답변 초기화
      } else {
        try {
          const response = await fetch('http://ANIroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `bedtimeScore=${bedtimeScore}
                  &wakeupScore=${wakeupScore}
                  &wakeupSensitivity=${wakeupSensitivity}
                  &cleaningScore=${cleaningScore}
                  &cleaningSensitivity=${cleaningSensitivity}
                  &foodScore=${foodScore}
                  &foodSensitivity=${foodSensitivity}
                  &cigaretteScore=${cigaretteScore}
                  &studyScore=${studyScore}
                  &studySensitivity=${studySensitivity}
                  &notebookScore=${notebookScore}
                  &notebookSensitivity=${notebookSensitivity}
                  &alarmScore=${alarmScore}
                  &alarmSensitivity=${alarmSensitivity}
                  &latestudyScore=${latestudyScore}
                  &latestudySensitivity=${latestudySensitivity}
                  &snoringScore=${snoringScore}
                  &snoringSensitivity=${snoringSensitivity}
                  &friendlyScore=${friendlyScore}
                  &inhomeScore=${inhomeScore}
                  &inhomeSensitivity=${inhomeSensitivity}
                  &coldOrHot=${coldOrHot}
                  &summerOrWinter=${summerOrWinter}
                  `,
            credentials: 'include',
          });

          // Handle the response as needed
          console.log(response);

          // Check if login is successful, then redirect to StarPage
          if (response.ok) {
            // navigate('/testpage');
            // navigate('/resulthome')
           <Loading address='/resulthome' firstLine='모글리님의' secondLine='생활 유형을 분석 중이에요'/>
            
              }
        } catch (error) {
          console.error('Error during login:', error);
        }
       
      }
   
    
  };
const handlePrevPage = () => {
    let nextQuestionIndex : number =0;
    //questionIndex+1 : 질문 번호
    //selectedAnswer : 답변 번호
    switch (questionIndex+1) {
      case 1:
        break;
      case 2:
        setbedtimeScore(selectedAnswer)
        setDone((prevDone) => prevDone -5);
        nextQuestionIndex = questionIndex-1;
        break;
      case 3:
        nextQuestionIndex = questionIndex-1;
        setwakeupSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -5);
        break;
      case 4:
          nextQuestionIndex = questionIndex-2;
          setwakeupSensitivity(selectedAnswer);
          setDone((prevDone) => prevDone -5);
          break;
      case 5 : 
        setcleaningScore(selectedAnswer);
        setDone((prevDone) => prevDone -5);
        if(bedtimeScore <=2){
          nextQuestionIndex = questionIndex-2;
        }else{
          nextQuestionIndex = questionIndex-1;
        }
        break;
      case 6:
        setcleaningSensitivity(selectedAnswer)
        setDone((prevDone) => prevDone -5);
        nextQuestionIndex = questionIndex-1;
        break;
      case 7:
          setcleaningSensitivity(selectedAnswer)
          setDone((prevDone) => prevDone -5);
          nextQuestionIndex = questionIndex-2;
          break;
      case 8 :
        setfoodScore(selectedAnswer)
        setDone((prevDone) => prevDone -5);
        if(cleaningScore ==1 ){
          nextQuestionIndex = questionIndex-1;
        }else{
          nextQuestionIndex = questionIndex-2;
        }
        break;
      case 9:
        setfoodSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -5);
        nextQuestionIndex = questionIndex-1;
        break;
      case 10:
        setfoodSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
        nextQuestionIndex = questionIndex-2;
        break;
      case 11:
        setcigaretteScore(selectedAnswer);
        if(foodScore ==1){
          nextQuestionIndex = questionIndex-1;
        }else{
          nextQuestionIndex = questionIndex-2;
        }
        setDone((prevDone) => prevDone -4);
        break;
      case 12:
        setstudyScore(selectedAnswer);
        setDone((prevDone) => prevDone -5);
        nextQuestionIndex = questionIndex-1;
        break;
      case 13: 
       setstudySensitivity(selectedAnswer);
       setDone((prevDone) => prevDone -4);
        nextQuestionIndex = nextQuestionIndex = questionIndex-1;
        break;
      case 14: 
        setstudySensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
         nextQuestionIndex =  questionIndex-2;
         break;
      case 15:
        setnotebookScore(selectedAnswer);
        setDone((prevDone) => prevDone -4);
        if(studyScore==1){
          nextQuestionIndex =  questionIndex-1;
        }else{
          nextQuestionIndex =  questionIndex-2;
        }
        break;
      case 16:
        setnotebookSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
          nextQuestionIndex = questionIndex - 1;
          break;
      case 17:
        setalarmScore(selectedAnswer);
        setDone((prevDone) => prevDone -4);
        nextQuestionIndex = questionIndex- 1;
        break;
      case 18:
        setalarmSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
          nextQuestionIndex = questionIndex - 1;
          break;
      case 19:
        if (selectedAnswer == 2){
          setlatestudyScore(3);
        }else{
          setlatestudyScore(selectedAnswer);
        }
        nextQuestionIndex = questionIndex - 1;
        setDone((prevDone) => prevDone -4);
        break;
      case 20:
        setlatestudySensitivity(selectedAnswer);
        nextQuestionIndex = questionIndex- 1;
        setDone((prevDone) => prevDone -4);
        break;
      case 21:
        setsnoringScore(selectedAnswer);
        setDone((prevDone) => prevDone -4);
          nextQuestionIndex = questionIndex- 1;
          break;
      case 22:
        setsnoringSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
              nextQuestionIndex = questionIndex - 1;
              break;
       case 23:
        setfriendlyScore(selectedAnswer);
        setDone((prevDone) => prevDone -4);
         nextQuestionIndex = questionIndex - 1;
          break;
      case 24:
        setinhomeScore(selectedAnswer);
        setDone((prevDone) => prevDone -4);
             nextQuestionIndex = questionIndex - 1;
              break;
      case 25:
        setinhomeSensitivity(selectedAnswer);
        setDone((prevDone) => prevDone -4);
        nextQuestionIndex = questionIndex- 1;
        break;
     case 26:
      setcoldOrHot(selectedAnswer-1);
      setDone((prevDone) => prevDone -5);
        nextQuestionIndex = questionIndex - 1;
        break;
     case 27:
      if (selectedAnswer == 2){
        setsummerOrWinter(3);
      }else{
        setsummerOrWinter(selectedAnswer);
      }
      setDone((prevDone) => prevDone -5);
      break;setDone((prevDone) => prevDone -4);
                     

      default:
        nextQuestionIndex = questionIndex - 1;
        break;

    }
    setQuestionIndex(nextQuestionIndex);
    setSelectedAnswer(0); // 선택한 답변 초기화
  
}
const isNextButtonDisabled = selectedAnswer === 0;

  return (
    <div className='flex flex-col justify-center items-center  h-screen'>
      
      {questionIndex === 0? 
        <div className='flex flex-col items-center justify-center w-full'>
       
        <div className="font-['500'] text-center ">해당하는 대답을 선택해 주세요!</div>
        <Progress done={done}/>

        <div className="w-full font-['600'] text-lg text-center  mb-6 whitespace-normal max-w-[290px]">{TEST_LIST[questionIndex].question}</div>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className={`text-2xl text-primary-logo ${
                isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }`} onClick={undefined}
              >
                <ArrowBackIosNewIcon sx={{width:'50px', height:'50px', color: 'white'}}/>
          </div>
          
          <div className='flex flex-col w-full items-center justify-center '>
    
            {(TEST_LIST[questionIndex].answer).map((answer, index) => (
    <AnswerCard 
      index={index} 
      AnswerCardText={answer} 
      onClick={() => handleAnswerSelect({index})
      
    }
                />  ))}
          </div>
          <div className={`text-2xl text-primary-logo ${
            isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
             }`} onClick={isNextButtonDisabled ? undefined : handleNextPage}
            >
             <ArrowForwardIosIcon sx={{width:'50px', height:'50px'}}/>
          </div>
        </div>
      
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        
      </div>
      :
     <div>
      {questionIndex === 1 ? 
      <div className=' flex flex-col items-center justify-center w-full'>
       
       <div className="font-['500'] text-center ">해당하는 대답을 선택해 주세요!</div>
       <Progress done={done}/>
       <div className="w-full font-['600'] text-lg text-center  mb-4 whitespace-normal max-w-[290px]">{TEST_LIST[questionIndex].question}</div>
       <div className='flex flex-row items-center justify-between w-full'>
         <div className={`text-2xl text-primary-logo ${
               isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
             }`} onClick={isNextButtonDisabled ? undefined : handlePrevPage}
             >
               <ArrowBackIosNewIcon sx={{width:'50px', height:'50px'}}/>
         </div>
         
         <div className='flex flex-col w-full items-center justify-center '>
   
           {(TEST_LIST[questionIndex].answer).map((answer, index) => (
   <AnswerCard 
     index={index} 
     AnswerCardText={answer} 
     onClick={() => handleAnswerSelect({index})
     
   }
               />  ))}
         </div>
         <div className={`text-2xl text-primary-logo ${
           isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`} onClick={isNextButtonDisabled ? undefined : handleNextPage}
           >
            <ArrowForwardIosIcon sx={{width:'50px', height:'50px'}}/>
         </div>
       </div>
     
       <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        
       
     </div>
     : 
     <div className='flex flex-col items-center justify-center w-full'>
       
       <div className='mt-[-100px]'>
       <div className="font-['500'] text-center ">해당하는 대답을 선택해 주세요!</div>
        <Progress done={done}/>
       </div>
        <div className="w-full font-['600'] text-lg text-center mt-4 mb-6 whitespace-normal max-w-[290px]">{TEST_LIST[questionIndex].question}</div>
        <div className='flex flex-row items-center justify-between w-full'>
          <div className={`text-2xl text-primary-logo ${
                isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }`} onClick={isNextButtonDisabled ? undefined : handlePrevPage}
              >
                <ArrowBackIosNewIcon sx={{width:'50px', height:'50px'}}/>
          </div>
          
          <div className='flex flex-col w-full items-center justify-center '>
    
            {(TEST_LIST[questionIndex].answer).map((answer, index) => (
    <AnswerCard 
      index={index} 
      AnswerCardText={answer} 
      onClick={() => handleAnswerSelect({index})
      
    }
                />  ))}
          </div>
          <div className={`text-2xl text-primary-logo ${
            isNextButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
             }`} onClick={isNextButtonDisabled ? undefined : handleNextPage}
            >
             <ArrowForwardIosIcon sx={{width:'50px', height:'50px'}}/>
          </div>
        </div>
      
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        <div className='text-white'>sdfsd</div>
        
      </div>}
     </div>
      }
    </div>
  );
}
