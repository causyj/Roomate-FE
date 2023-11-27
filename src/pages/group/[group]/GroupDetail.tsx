import {  useParams } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
type GroupDetailPageParams = {
    group: string;
}
export const GroupDetail = () => {
    const { group } = useParams<GroupDetailPageParams>()
    return (
       <div>
        {group=="기상스터디" ? 
         <div>
            <div className='fixed max-w-[380px] w-full h-full mt-[-40px] ml-[-50%] bg-primary-pink'>
                <div className='flex flex-col justify-start p-10'>
                    <div className="font-['700'] text-3xl text-blue-600">새벽 기상으로</div>
                    <div className="font-['700'] text-3xl text-primary-bg">부지런한 삶을</div>
                    <div className="font-['700'] text-3xl text-primary-bg">시작해보실래요?</div>
                    <div className='flex justify-center items-center mt-4'>
                        <img src={process.env.PUBLIC_URL + '/morning.png'} alt="roomie" width="160px" />
                    </div>
                </div>
            </div>
            <div className='fixed  max-w-[380px] h-[calc(40%+2rem)] w-full ml-[-50%] bg-black bottom-0 rounded-t-3xl px-8 py-4 flex items-start flex-col justify-start'>
                <div className="font-['700'] text-3xl text-white">{group}</div>
                <div className="font-['600'] text-xs text-primary-whitegray">
                    <div>기상 스터디로 아침을 알차게 보내보세요!</div>
                    <div>아침형인 사람들끼리 아침에 기상시간을 인증하고, 정해진 시간만큼 공부해 인증을 하는 스터디입니다.</div>
                </div>
                <div className='flex flex-row gap-8 ml-4 mt-2'>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                       <CalendarMonthIcon sx={{width:'35px', height:'35px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xxs">화요일, 목요일</div>
                    </div>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                        <AccessTimeIcon sx={{width:'35px', height:'35px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xxs">21:00 ~ 23:00</div>
                    </div>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                        <GroupsIcon sx={{width:'40px', height:'40px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xs">2/6</div>
                    </div>
                </div>
                
                <button className="bg-red-700 text-white font-['700'] w-1/3 h-[35px] rounded-xl text-center mx-auto mt-2">JOIN</button>
                
            </div>
         </div>
      : 
      <div>
            <div className='fixed max-w-[380px] w-full h-full mt-[-40px] ml-[-50%] bg-primary-green'>
                <div className='flex flex-col justify-start p-10'>
                    <div className="font-['700'] text-3xl text-blue-600">한강에서</div>
                    <div className="font-['700'] text-3xl text-primary-bg">러닝도 하고</div>
                    <div className="font-['700'] text-3xl text-primary-bg">친구도 사귀어요!</div>
                    <div className='flex justify-center items-center mt-4'>
                        <img src={process.env.PUBLIC_URL + '/running.png'} alt="roomie" width="160px" />
                    </div>
                </div>
            </div>
            <div className='fixed  max-w-[380px] h-[calc(40%+2rem)] w-full ml-[-50%] bg-black bottom-0 rounded-t-3xl px-8 py-4 flex items-start flex-col justify-start'>
                <div className="font-['700'] text-3xl text-white">{group}</div>
                <div className="font-['600'] text-xs text-primary-whitegray">
                    <div>한강에서 같이 러닝하실래요?</div>
                    <div>러닝크루를 모아 한강에서 일정한 시간동안 러닝도 하고, 운동 후에 치맥도 같이해요!</div>
                </div>
                <div className='flex flex-row gap-8 ml-4 mt-2'>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                       <CalendarMonthIcon sx={{width:'35px', height:'35px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xxs">월요일, 목요일</div>
                    </div>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                        <AccessTimeIcon sx={{width:'35px', height:'35px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xxs">20:00 ~ 22:00</div>
                    </div>
                    <div className='w-[75px] h-[75px] border-2 border-primary-whitegray rounded-xl  flex flex-col items-center justify-center gap-y-1'>
                        <GroupsIcon sx={{width:'40px', height:'40px', color:"#D7D6D6"}}/>
                       <div className="font-['500'] text-primary-whitegray text-xs">8/10</div>
                    </div>
                </div>
                
                <button className="bg-red-700 text-white font-['700'] w-1/3 h-[35px] rounded-xl text-center mx-auto mt-2">JOIN</button>
                
            </div>
         </div>
   }
       </div>
    )
}