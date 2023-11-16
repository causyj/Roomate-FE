import React, { useState } from 'react';
import { AnswerCard } from "./components/AnswerCard";
import { DescriptiveQuestion } from './DescriptiveQuestion';
const questions = [
  '주로 몇시에 자?',
  '그럼 주로 몇시에 일어나?',
  '룸메가 늦게 자고 늦게 일어난다면?',
  '방은 얼마나 자주 청소해?',
  '룸메가 청소를 안 한다면? ',//보류
  '음식을 주로 방에서 섭취하는 편이야?' ,
  '룸메가 방에서 자주 음식을 먹는다면?',
  '흡연자야?',
  '공부는 방에서 하는 편이야?',
  '만약 룸메가 방에서는 쉬기만 해. 그럼 눈치보여?',
  '방에서 노트북 많이 사용 해?',
  '룸메이트가 방에서 타자소리나 마우스 소리를 낸다면?',
  '전 날 알람을 여러 개 맞추고 잔 당신, 다음날 아침 상황은?',
  '룸메이트가 알람을 잘 못듣는 사람이면 어때?',
  '늦은 시간까지 공부해야 한다면 …',
  '자려고 하는데 룸메가 노트북이나 스탠드를 사용해서 공부한다면?',
  '이갈이나 코골이 같은 잠버릇 있어?',
  '룸메의 잠버릇에 예민한 편이야?',
  '룸메이트와 친하게 지내고 싶어?',
  '방에 자주 있는 편이야?',
  '자주 외박하는 사람에 대해 어떻게 생각해?',
  '마지막 질문이야! 더위와 추위를 많이 타?',

  '',
  // 다음 질문들...
];
const answers = [
  ['밤 11시 이전.', '밤 12시', '새벽 1시','새벽 2시','새벽 3시 이후'],
  ['오전 5시 이전', '오전 6시~7시', '오전 8시~9시', '오전 10시~11시', '낮 12시 이후'],
  ['크게 상관없어', '조금 힘들 것 같아', '아 정말 안 맞아;;'],
  ['청소? 그런건 사치야…', '적당히 쌓이면 버려.', '쓰레기는 용납 못해!'],
  ['룸메가 청소를 안 한다면?','아…….그건 좀; (깊은 한숨)','윽.. 더러워서 어떻게 같이 살아?'],
  ['응. 자주.','음… 가끔?','아니. 별로.'],
  ['먹고 잘만 치우면 상관없어','좀 그래..','음식은 휴게실에서만 먹었으면 좋겠어!'],
  ['응. ','아니.'],
  ['응. 방에서 하는 편이야.','음… 그때그때 달라.','주로 도서관이나 열람실에서 해.'],
  ['아니? 눈치를 왜 봐?','쉬는데 불편하려나..?','나도 나가서 공부해야 되나 ㅜㅜ?'],
  ['맨날 써','필요할 때만 써','아니~'],
  ['예민하지 않은 편이라 괜찮아','무소음 기기 쓰면 괜찮아','키보드 부숴버려도 돼?'],
  ['한번에 바로 일어난다.','두 세번 만에 일어난다.','룸메가 내 알람에 깰때까지 못 일어난다'],
  ['내가 깨워주지 뭐','쟤 언제 일어나지','폰 부숴버려도 돼?'],
  ['노트북이나 스탠드 사용','휴게실이나 열람실에서 공부'],
  ['오키 열공해~','시험기간이니까 참을게','잠 좀 자자!!!!'],
  ['심해','조금 있어','없어'],
  ['잠들면 웬만한 소리에는 안 깨','너무 심하지만 않으면 참을 수 있어','그것 때문에 잠을 못 자!!!'],
  ['응!','아니'],
  ['나는 집순이/집돌이야','가끔 외출/외박해','방은 잠만 자는 곳이지'],
  ['외로워….','신경 안 써','오예! 1인실 오히려 좋아'],
  ['더위 많이 타','추위 많이 타','둘 다 많이 타','둘 다 안 타'],

  // 다른 질문에 대한 답변 배열들...
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
      {(answers[questionIndex] as string[]).map((answer, index) => (
    <AnswerCard key={index} AnsweCardText={answer} />
  ))}
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
      
        <div className='text-white'>sdfsd</div>
        
      </div>
      }
    </div>
  );
}
