import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const DescriptiveQuestion = () => {
  const [postContent, setPostContent] = useState('(선택사항)');
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const content = formData.get('postContent') as string;
    navigate('/resulthome')
    console.log('Content:', content);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ width: '150px' }} />
      </div>
      <div className=" text-center">
        <p className="mt-8 font-['700'] text-lg"><div>추가로,</div>원하는 룸메이트의 유형을 작성해주세요</p>
        <div className="mt-12 font-['500'] mb-4">작성해주신 내용은<div>다른 기숙사생들이 볼 수 있어요:)</div></div>
      </div>
      <form method="post" onSubmit={handleSubmit}>
          <textarea
            name="postContent"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows={8}
            cols={40}
            style={{
                border: '1px solid #ccc', // Border style
                borderRadius: '8px',      // Border radius for rounded corners
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' ,
                fontFamily:'Pretendard'// Box shadow
              }}
          />
        <div className='text-center'>
             <button type="submit" className="border-4 border-[#27334B] rounded-xl bg-[#27334B] text-white font-['700'] w-1/3 h-12 text-xl mt-8">저장하기</button>
        </div>
      </form>
    </div>
  );
};
