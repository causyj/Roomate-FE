// AnswerCard.tsx
import React from 'react';

interface AnswerCardProps {
  index: number;
  AnswerCardText: string;
  onClick?: (index: number) => void;  // onClick의 매개변수로 index 추가

}

export const AnswerCard= ({ index, AnswerCardText, onClick } : AnswerCardProps) => {
  return (
    <div>
      <button
        className="w-72 h-20 border-2 border-stone-500 rounded-lg duration-500 hover:bg-primary-logo hover:text-white text-primary-bg  flex items-center justify-center text-center p-8 text-['900'] text-xl mb-2 font-bold"
        onClick={() => onClick && onClick(index)}  // key를 매개변수로 전달
      >
        {AnswerCardText}
      </button>
    </div>
  );
};
