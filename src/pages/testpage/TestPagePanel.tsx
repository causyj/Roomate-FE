import React, { useState } from 'react';
import { AnswerCard } from "./components/AnswerCard";
import { DescriptiveQuestion } from './DescriptiveQuestion';
const questions = [
  '전 날, 알람을 여러 개 맞추고 잔 당신, 다음 날 아침 상황은?',
  ' 알람을 여러 개 맞추',
  '전 날, 알람을 여러 개 맞추고',
  '추고 잔 당신, 다음 날 아침 상황은?',
  ' ',
  // 다음 질문들...
];

export function TestPagePanel() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextPage = () => {
    // 다음 페이지로 이동
    if (questionIndex < questions.length-1 ) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
        return <DescriptiveQuestion />;
    }
  };

  return (
    <div>
      
      {questionIndex === questions.length -1 ?  <DescriptiveQuestion /> 
      :<div>
        <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ width: '150px' }} />
      </div>
      <div className="font-['500'] mt-4 text-center">해당하는 대답을 선택해 주세요!</div>
      <div className="font-['600'] text-3xl mt-4 text-center">Q.{questionIndex + 1}</div>
      <div className="font-['600'] text-xl text-center mt-1 mb-8">{questions[questionIndex]}</div>
      <div>
        <AnswerCard AnsweCardText="한 번에 바로 일어난다." />
        <AnswerCard AnsweCardText="한 번에 바로 일어난다." />
        <AnswerCard AnsweCardText="한 번에 바로 일어난다." />
        
      </div>
      <div className="font-['700'] flex items-center justify-between mb-20 mt-12">
        <div className="text-white">dfffffsdf</div>
        <div className="text-3xl text-center">{`${questionIndex + 1}/${questions.length-1}`}</div>
        <div className="flex flex-row">
          <div className="text-2xl text-primary-logo" onClick={handleNextPage}>
            next {'>'}
          </div>
        </div>
      </div>
      </div>
      }
    </div>
  );
}
