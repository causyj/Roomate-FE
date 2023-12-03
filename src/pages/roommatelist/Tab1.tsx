import React, { useEffect, useState } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard1 } from "./components/RoommateCard1";
import { Card73 } from "./components/Card73";
import { Card43 } from "./components/Card43";
import { GoToGroup } from './components/GoToGroup';
import ReplayIcon from '@mui/icons-material/Replay';
import { ANIMAL_DATA } from '../../constants';
import { AnimalType } from '../../interface/AnimalType';

const ColorFab = styled(MUIButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#27334B'),
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#27334B',
  '&:hover': {
    backgroundColor: '#27334B',
  },
  width: '20px',
  height: '35px',
  borderRadius: '20px'
}));
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
  const [cardData, setCardData] = useState<CardDataProps | null>(null);

  const handleResetClick = () => {
    // reset 버튼을 클릭할 때마다 새로운 카드 정보로 업데이트
    
  };

  useEffect(() => {
    const fetchNickname = async () =>{
        try{
            const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/card`,{
            method: 'GET',
             credentials: 'include',
            });

      // Check if login is successful, then redirect to StarPage
      if (response.ok) {
        console.log("ok");
        const data = await response.json();
        console.log(data);
        setCardData(data);
        console.log(cardData);
      }else{
        console.error('Failed to fetch nickname : ',response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch nickname : ', error);
    }
  };
      fetchNickname();
},[]);
  return (
    <div>
      
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="font-['700'] text-2xl ">📍 추천 룸메이트</div>
        <ColorFab onClick={handleResetClick}>
          <ResetIcon />
        </ColorFab>
      </div>
      <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto overflow-y-hidden p-1 gap-2 ">
      {cardData &&
          Object.keys(cardData).map((key) => (
            <RoommateCard1
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
                 {/* <Card73 />
                <Card43 /> */}
        {/* {cardInfo.map((card, index) => (
          <RoommateCard1
            key={index}
            name={card.name}
            dept={card.dept}
            year={card.year}
            mbti={card.mbti}
            age={card.age}
            animal={card.animal}
            color={card.color}
          />
        ))} */}
      </div>
      
      <GoToGroup />
    </div>
  );
};
