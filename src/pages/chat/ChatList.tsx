import { Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ChatList() {
  // const [nickname, setNickname] = useState('');
  // useEffect(()=>{
  //   const nicknameData = async () => {
  //     try {
  //       const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/nickname`, {
  //         method: 'GET',
  //         credentials: 'include',
  //       });
  
  //       if (response.ok) {
  //         const data = await response.text();
  //         setNickname(data); // 새로운 카드 정보 설정
          
  //       } else {
  //         console.error('Failed to fetch new card data : ', response.status, response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch new card data : ', error);
  //     }
  //   };
  //   nicknameData();
  // },[]);
  //컴공이는 펭귄
  const nickname = "컴공이"; //강아지
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className=" max-w-[413px] w-full h-24 font-['700'] text-3xl flex bg-white justify-start fixed top-0 px-9 items-center "  style={{zIndex:200}}>
                <div className="">채팅목록</div>
            </div>
            <div className="w-full mt-[72px]">
                <Link to='/roommatelist' className="flex items-start">
                    <div className="max-w-[413px] w-full h-16 bg-gray-100 rounded-2xl">
                        <div className="flex flex-col items-center justify-start p-3">
                            <div className="text-s text-center">나와 생활유형이 맞는 룸메이트를 찾아보세요!</div>
                            <div className="flex flex-row">
                                <div className="mt-1 mr-1 font-['700'] text-m ">나와 맞는 룸메이트 보러가기 {'>'}</div>
                                <img src={process.env.PUBLIC_URL + '/roommate.png'} alt="roomie" width="35px" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col overflow-y-auto gap-4 mt-4">
                {nickname == "컴공이" ?
                 <Link to={`푸앙이님`}>
                 <div className="w-full flex flex-row  ">
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                            </Stack>
                        </div>
                        <div className="flex flex-col ml-4 py-0.5 ">
                            <div className="font-['700'] text-lg ">푸앙이님</div>
                            <div className="font-['700'] text-xs text-primary-gray ">안녕하세요!</div>
                        </div>
                        <div className="font-['700'] text-xl  ml-32 mr-1 mt-2 w-5 h-5 bg-red-700 text-white rounded-full text-center">1</div>
                    </div>
             </Link>
             :
             <Link to={`푸앙이`}>
                 <div className="w-full flex flex-row">
                     <div>
                         <Stack direction="row" spacing={2}>
                             <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                         </Stack>
                     </div>
                     <div className="flex flex-col ml-4 py-0.5">
                         <div className="font-['700'] text-lg ">푸앙이님</div>
                         <div className="font-['700'] text-xs text-primary-gray">안녕하세요</div>
                     </div>
                     <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2"></div>
                 </div>
             </Link>
                }
                





            </div>
        </div>
    );
}
{/* <Link to={`${nickname}`}>
                    <div className="w-full flex flex-row">
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                            </Stack>
                        </div>
                        <div className="flex flex-col ml-4 py-0.5">
                            <div className="font-['700'] text-lg ">모글리님</div>
                            <div className="font-['700'] text-xs text-primary-gray">예민한 고양이 / 혹은 마지막 채팅 내용</div>
                        </div>
                        <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2">오전 11:38</div>
                    </div>
                </Link> */}