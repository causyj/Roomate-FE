import { useEffect, useState } from 'react';
import { AnswerCard } from "./components/AnswerCard";
import { DescriptiveQuestion } from './DescriptiveQuestion';
import { TEST_LIST } from '../../constants';
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

  useEffect(() => {
    console.log(`저장한 답변 ${selectedAnswer}`);
  }, [selectedAnswer]); // selectedAnswer가 변경될 때만 실행

  const handleAnswerSelect = ({ index }: answerProps) => {
    // 선택한 답변을 상태에 저장
    setSelectedAnswer(index+1);
  };

  const handleNextPage = () => {
    // 다음 페이지로 이동
    if (questionIndex < TEST_LIST.length - 1) {
      let nextQuestionIndex;
      //questionIndex+1 : 질문 번호
      //selectedAnswer : 답변 번호
      switch (questionIndex+1) {
        case 1:
          if (selectedAnswer === 1) {
            nextQuestionIndex = 5;
          } else {
            // 다른 조건에 따라 처리
            nextQuestionIndex = questionIndex + 1;
          }
          break;
        // 다른 특정한 case에 대한 처리 추가 가능

        default:
          nextQuestionIndex = questionIndex + 1;
          break;
      }

      setQuestionIndex(nextQuestionIndex);
      setSelectedAnswer(0); // 선택한 답변 초기화
    } else {
      return <DescriptiveQuestion />;
    }
  };


  return (
    <div>
      
      {questionIndex === TEST_LIST.length -1 ?  <DescriptiveQuestion /> 
      :<div>
        <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ width: '150px' }} />
      </div>
      <div className="font-['500'] mt-4 text-center">해당하는 대답을 선택해 주세요!</div>
      <div className="font-['600'] text-3xl mt-4 text-center">Q.{questionIndex + 1}</div>
      <div className="font-['600'] text-xl text-center mt-1 mb-8">{TEST_LIST[questionIndex].question}</div>
      <div>
      {(TEST_LIST[questionIndex].answer).map((answer, index) => (
    <AnswerCard index={index} AnswerCardText={answer} onClick={() => handleAnswerSelect({index})} />
  ))}
</div>
      <div className="font-['700'] flex items-center justify-between mb-20 mt-12">
        <div className="text-white">dfffffsdf</div>
        <div className="text-3xl text-center">{`${questionIndex + 1}/${TEST_LIST.length-1}`}</div>
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
