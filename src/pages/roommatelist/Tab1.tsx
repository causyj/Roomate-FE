import { useEffect, useState } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard } from "./components/RoommateCard";
import { GoToGroup } from './components/GoToGroup';

interface CardDataProps {
  [key: string]: {
    nickname: string;
    animal: string;
    dorm:number;
    room:number;
    age: number;
    dept: string;
    stu_num:number;
    mbti: string;
    rhythm : string;
    smoke: string;
    noise: number;
    temperature:number;
    outgoing:number;
    clean:number;
    sleep:number;

    // 추가로 필요한 속성들을 여기에 추가할 수 있습니다.
  };
}
export const Tab1 = () => {
  const [initialCardData, setInitialCardData] = useState([]);
  const [cardData, setCardData] = useState<CardDataProps | null>(null);
  const fetchInitialCardData = async () => {
    try {
      const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/card`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setInitialCardData(data);
        setCardData(data); // 초기 카드 정보 설정
        console.log("1. initial ok");
        console.log(data);
        console.log(cardData);
        console.log(initialCardData);
      } else {
        console.error('Failed to fetch initial card data: ', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch initial card data: ', error);
    }
  };
  const fetchNewCardData = async () => {
    try {
      const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/card/new`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setCardData(data); // 새로운 카드 정보 설정
        console.log("2. new ok");
        console.log(data);
        console.log(cardData);
      } else {
        console.error('Failed to fetch new card data : ', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch new card data : ', error);
    }
  };
  const handleResetClick = () => {
    // reset 버튼을 클릭할 때마다 새로운 카드 정보로 업데이트
    fetchNewCardData();
  }; 
  
  useEffect(() => {
    // 최초 렌더링 시 초기 카드 정보 가져오기
   fetchInitialCardData();
},[]);

 
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className='flex flex-row items-center gap-4'>
        <div className="font-['700'] text-2xl ">📍 추천 룸메이트</div>
        <button className="bg-primary-logo w-[45px] h-[45px] rounded-2xl" onClick={handleResetClick}>
          <ResetIcon sx={{width:'30px', height:'30px', color:'white'}} />
        </button>
        </div>
      </div>
      <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto overflow-y-hidden p-1 gap-2 ">
      {cardData &&
          Object.keys(cardData).map((key) => (
            <RoommateCard
              key={key}
              nickname={cardData[key].nickname}
              animal={cardData[key].animal}
              dorm={cardData[key].dorm}
              room={cardData[key].room}
              age={cardData[key].age}
              dept={cardData[key].dept}
              stu_num={cardData[key].stu_num}
              mbti={cardData[key].mbti}
              rhythm={cardData[key].rhythm}
              smoke={cardData[key].smoke}
              noise={cardData[key].noise}
              temperature={cardData[key].temperature}
              outgoing={cardData[key].outgoing}
              clean={cardData[key].clean}
              sleep={cardData[key].sleep}
            /> 
            
          ))}
      </div>
      
      <GoToGroup />
    </div>
  );
};
