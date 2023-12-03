import { Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
type ChattingPageParams = {
    nickname : string;
}
export const Chatting = () => {
    const { nickname } = useParams<ChattingPageParams>()
    const message="안녕하세요! "
    //저는 모글리에 sdfsdf hdsjkfㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴhskdhfjsdhfsdfsdfskshdjkfhsdsfdfj
    const messageStyle = {
        maxWidth:' 70%',
        
        //`${message.length * 15}px`,  // 예시: 글자 수에 따라 동적으로 설정
      };

      const [inputHeight, setInputHeight] = useState(60); // 초기값은 입력 부분의 높이

      useEffect(() => {
        const handleResize = () => {
          setInputHeight(window.innerHeight * 0.1); // 예시: 뷰포트 높이의 10%
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <div className="flex flex-col items-center w-full ">
             <div className=" max-w-[413px]  h-[100px] w-full bg-primary-logo fixed top-0 flex items-center justify-center " style={{zIndex:200}}>
                <div className="font-['700'] text-3xl text-white">{nickname}님</div>
            </div>
            <div className="  max-w-[413px]  w-full fixed min-h-screen max-h-screen bg-white rounded-t-3xl mt-[52px] overflow-y-auto p-8" style={{zIndex:20000}}>
                    <div className="flex flex-col gap-y-6">
                        {/* 상대방 */}
                    <div className="flex flex-row items-center gap-2">
                      <Stack direction="row" spacing={2}>
                          <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                      </Stack>
{/* border-2 border-primary-logo */}
                      <div className="flex flex-row gap-2">
                      <div className="max-w-2/3 break-words bg-zinc-100  font-['600'] text-primary-bg rounded-3xl rounded-tl-md p-2 px-4" style={messageStyle}>{message}</div>
                      <div className="font-['600'] text-primary-gray text-xxs flex items-end ">오전 12:05</div>
                      </div>
                    </div>

                    {/* 나 */}
                    <div className="flex flex-row gap-2 justify-end">
                    <div className="font-['600'] text-primary-gray text-xxs flex items-end ">오전 12:05</div>
                       
                      <div className="max-w-2/3 break-word font-['600'] bg-primary-logo text-white rounded-3xl rounded-tr-md p-2 px-4" style={messageStyle}>{message}</div>
                      
                    </div>
                    </div>

                    {/* 메시지 입력 부분  */}  
                    <div className="flex w-full justify-center ">
                    <div  className="flex justify-center" style={{ position: 'fixed', bottom: 0, width: '100%', height: inputHeight,  padding: '10px', }}>
                        {/* 메시지 입력 컴포넌트 */}
                        <input
                            className="bg-zinc-100"
                            type="text"
                            placeholder="메시지를 입력하세요"
                            style={{ width: '90%', height: '100%',borderRadius: '20px', padding: '5px',  }}
                        />
                        {/* 전송 버튼 등 */}
                        </div>
                    </div>
                      
            </div>
        </div>
    )
}