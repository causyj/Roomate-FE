import { useEffect, useState } from 'react';
import { AnswerCard } from "./components/AnswerCard";
import { DescriptiveQuestion } from './DescriptiveQuestion';
import { TEST_LIST } from '../../constants';
import { useNavigate } from 'react-router-dom';
type answerProps = {
  index : number;
}
export function TestPagePanel() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);


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
  useEffect(() => {
    console.log(`저장한 답변 ${selectedAnswer}`);
   
  }, [selectedAnswer]); // selectedAnswer가 변경될 때만 실행

  const handleAnswerSelect = ({ index }: answerProps) => {
    // 선택한 답변을 상태에 저장
    setSelectedAnswer(index+1);

  };

  const handleNextPage = () => {
    
    if (questionIndex < TEST_LIST.length - 1) {
      let nextQuestionIndex : number
      nextQuestionIndex =0;
      //questionIndex+1 : 질문 번호
      //selectedAnswer : 답변 번호
      switch (questionIndex+1) {
        case 1:
          setwakeupScore(selectedAnswer);
          nextQuestionIndex = questionIndex + 1;
          // console.log(wakeupScore);
          break;
          
        case 2:
          // console.log(wakeupScore);
          setbedtimeScore(selectedAnswer)
          if (selectedAnswer <=2) {
            nextQuestionIndex = 2;
            
          } else {
            nextQuestionIndex =3;
    
          }
          break;
         case 3:
          nextQuestionIndex = 5;
          setwakeupSensitivity(selectedAnswer);
          break;
         case 4:
            nextQuestionIndex = 5;
            setwakeupSensitivity(selectedAnswer);
            break;
        case 5 : 
          setcleaningScore(selectedAnswer);
          if (selectedAnswer === 1) {
            nextQuestionIndex = 7;
          }else {
            nextQuestionIndex = 6;
          }
          break;
        case 6:
          setcleaningSensitivity(selectedAnswer)
          nextQuestionIndex = 8;
          break;
        case 7:
            setcleaningSensitivity(selectedAnswer)
            nextQuestionIndex = 8;
            break;
        case 8 :
          setfoodScore(selectedAnswer)
          if (selectedAnswer === 1){
            nextQuestionIndex = 10;
          }else{
            nextQuestionIndex = 9;
          }
          break;
        case 9:
          setfoodSensitivity(selectedAnswer);
          nextQuestionIndex = 11;
          break;
        case 10:
          setfoodSensitivity(selectedAnswer);
          nextQuestionIndex = 11;
          break;
        case 11:
          if (selectedAnswer == 2){
            setcigaretteScore(3);
          }else{
            setcigaretteScore(selectedAnswer);
          }
          nextQuestionIndex = 12;
          break;
        case 12:
          setstudyScore(selectedAnswer);
          if (selectedAnswer === 1){
            nextQuestionIndex = 14;
          }else{
            nextQuestionIndex = 13;
          }
          break;
        case 13: 
         setstudySensitivity(selectedAnswer);
          nextQuestionIndex = 15;
          break;
        case 14: 
          setstudySensitivity(selectedAnswer);
           nextQuestionIndex = 15;
           break;
        case 15:
          setnotebookScore(selectedAnswer);
          nextQuestionIndex = questionIndex + 1;
          break;
        case 16:
          setnotebookSensitivity(selectedAnswer);
            nextQuestionIndex = questionIndex + 1;
            break;
        case 17:
          setalarmScore(selectedAnswer);
          nextQuestionIndex = questionIndex + 1;
          break;
        case 18:
          setalarmSensitivity(selectedAnswer);
            nextQuestionIndex = questionIndex + 1;
            break;
        case 19:
          if (selectedAnswer == 2){
            setlatestudyScore(3);
          }else{
            setlatestudyScore(selectedAnswer);
          }
          nextQuestionIndex = questionIndex + 1;
          break;
        case 20:
          setlatestudySensitivity(selectedAnswer);
          nextQuestionIndex = questionIndex + 1;
          break;
        case 21:
          setsnoringScore(selectedAnswer);
            nextQuestionIndex = questionIndex + 1;
            break;
        case 22:
          setsnoringSensitivity(selectedAnswer);
                nextQuestionIndex = questionIndex + 1;
                break;
         case 23:
          setfriendlyScore(selectedAnswer);
           nextQuestionIndex = questionIndex + 1;
            break;
        case 24:
          setinhomeScore(selectedAnswer);
               nextQuestionIndex = questionIndex + 1;
                break;
        case 25:
          setinhomeSensitivity(selectedAnswer);
          nextQuestionIndex = questionIndex + 1;
          break;
       case 26:
        setcoldOrHot(selectedAnswer-1);
          nextQuestionIndex = questionIndex + 1;
          break;
       case 27:
        if (selectedAnswer == 2){
          setsummerOrWinter(3);
        }else{
          setsummerOrWinter(selectedAnswer);
        }
        break;
                       

        default:
          nextQuestionIndex = questionIndex + 1;
          break;

      }
    console.log(
      `wake ; ${wakeupScore}`,
      `bed : ${bedtimeScore}`,
      `sen : ${wakeupSensitivity}`
    )
      setQuestionIndex(nextQuestionIndex);
      // setSelectedAnswer(0); // 선택한 답변 초기화
    } else {
      return <DescriptiveQuestion />;
    }
    // navigate('/resulthome')
  };


  return (
    <div>
      
      {questionIndex === TEST_LIST.length -1 ?  <DescriptiveQuestion /> 
      :<div>
        <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ width: '150px' }} />
      </div>
      <div className="font-['500'] mt-4 text-center">해당하는 대답을 선택해 주세요!</div>
      <div className="font-['600'] text-3xl mt-4 text-center">Q.{questionIndex+1}</div>
      <div className="font-['600'] text-xl text-center mt-1 mb-8">{TEST_LIST[questionIndex].question}</div>
      <div>
      {(TEST_LIST[questionIndex].answer).map((answer, index) => (
    <AnswerCard 
      index={index} 
      AnswerCardText={answer} 
      onClick={() => handleAnswerSelect({index})
      
    }
        />
  ))}
</div>
      <div className="font-['700'] flex items-center justify-between mb-20 mt-12">
        <div className="text-white">dfffffsdf</div>
        <div className="text-3xl text-center">{`${questionIndex+1}/${TEST_LIST.length-1}`}</div>
        <div className="flex flex-row">
          <div className="text-2xl text-primary-logo" onClick={handleNextPage}>
            next {'>'}
          </div>
        </div>
      </div>
      
        <div className='text-white'>sdfsd</div>
        
      </div>
      }
    </div>
  );
}
