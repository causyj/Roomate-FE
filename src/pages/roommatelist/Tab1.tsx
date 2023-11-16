import React, { useState } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { RoommateCard1 } from "./components/RoommateCard1";
import { Card73 } from "./components/Card73";
import { Card43 } from "./components/Card43";

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

export const Tab1 = () => {
  const initialCardInfo = [
    { name: "모글리", dept: "영어학과", year: 23, mbti: "INSJ", age: "21", animal: '/cat.png', color: 'purple' },
    { name: "깐풍기", dept: "정치외교학과", year: 21, mbti: "INFP", age: "21", animal: '/polarBear.png', color: 'green' },
    { name: "울랄라", dept: "간호학부", year: 19, mbti: "ESTJ", age: "비공개", animal: '/rabbit.png', color: 'orange' },
    { name: "팔보채", dept: "산업보안학과", year: 21, mbti: "ENFP", age: "22", animal: "/cat.png", color: 'purple' },
  ];

  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  const handleResetClick = () => {
    // reset 버튼을 클릭할 때마다 새로운 카드 정보로 업데이트
    setCardInfo([
      { name: "우당탕", dept: "AI학과", year: 23, mbti: "ESFJ", age: "20", animal: '/cat.png', color: 'purple' },
      { name: "내가짱", dept: "글로벌금융학과", year: 21, mbti: "ENTP", age: "비공개", animal: '/arcticFox.png', color: 'pink' },
      { name: "우분투", dept: "SW학부", year: 23, mbti: "INFJ", age: "비공개", animal: '/arcticFox.png', color: 'pink' },
      { name: "단무지", dept: "경제학과", year: 20, mbti: "ESFP", age: "24", animal: "/cat.png", color: 'purple' },
    ]);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="font-['700'] text-2xl">📍 추천 룸메이트</div>
        <ColorFab onClick={handleResetClick}>
          <ResetIcon />
        </ColorFab>
      </div>
      <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto p-2 mt-4 gap-2 ">
                 <Card73 />
                <Card43 />
        {cardInfo.map((card, index) => (
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
        ))}
      </div>
    </div>
  );
};
