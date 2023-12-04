import { useState } from "react"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue, yellow } from "@mui/material/colors";
import Star from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Chat from '@mui/icons-material/ForumRounded';
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
interface RoomateCardProps {
    disableFlip?: boolean
}
interface CardFrontBackProps {
    isFrontView: boolean
}

const FrontDetail = () => {
    const [isStarred, setIsStarred] = useState(false);

        const handleStarClick = (e :any) => {
            e.stopPropagation(); // 이벤트 전파를 막습니다.
        
            setIsStarred(!isStarred);
           
        }
    return (
      <div className="flex flex-col items-center text-center justify-center p-4 ">
        
       
      <div className="flex justify-evenly w-ful ml-auto">
          
      <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" sx={{bgcolor:'orange', width: 70, height: 70}} src={process.env.PUBLIC_URL + '/rabiit.png'} />
      </Stack>
      <div className="text-end mt-[-8px] mr-[-8px] ml-4">
    {isStarred ? (
      <Star
        sx={{  color: 'orange', width: '50px', height: '50px', cursor: 'pointer'  }}
        onClick={handleStarClick}
      />
    ) : (
      <StarBorderRoundedIcon
        sx={{ width: '50px', height: '50px', cursor: 'pointer' }}
        onClick={handleStarClick}
      />
    )}
      </div>
      </div>
   
  
      <div className="font-['700'] text-bold text-2xl text-center mx-auto">모글리님</div>
      <div className="font-['700'] text-primary-gray text-xxs">블루미르홀 308관/2인실</div>
      </div>
    )
}
const CardFront = ({isFrontView} : CardFrontBackProps) => {
  const age=5;
  const ages = age.toString();
  const AGE = ages == "" ? "비공개" : `${ages}살`;
  return (
        <section
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <FrontDetail />
        
            <div
            className="absolute bottom-0 left-0 flex h-28 w-full flex-col items-center justify-center rounded-b-xl rounded-tl-[5rem] rounded-tr-none bg-slate-800 p-3"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <div className="flex flex-col mx-auto  text-m text-white font-['700'] text-center ">
{/*                
                {/* <h1 className="">나이 : 21살 </h1> 
                <h1 className="">학번 : 20학번 </h1> 
                <h1 className="">MBTI : ENFP </h1>
                <h1 className="">학과 : 수학과 </h1>  
                {/* <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <div className=" font-['500'] text-3xs text-primary-whitegray">나이</div>
                    <div>21살</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className=" font-['500'] text-3xs text-primary-whitegray">학번</div>
                    <div>21학번</div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className=" font-['500'] text-3xs text-primary-whitegray">MBTI</div>
                    <div>ENFP</div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                    <div className=" font-['500'] text-3xs text-primary-whitegray">학과</div>
                    <div>소프트웨어학부</div>
                  </div> */}
                {/* <h1>21살 / 20학번 / ENFP</h1>
                <h1>소프트웨어학부</h1> */}
                <h1 className="">나이 : {AGE}</h1> 
                <h1 className="">학번 : 20학번</h1> 
                <h1 className="">MBTI : ENFP</h1> 
                <h1 className="">학과 : 소프트웨어학부</h1> 


            </div>
           
            
            
        </div>
    </section>
    )
} 
interface TypeAtAGlanceProps {
    noise: number;
    temperature: number;
    outgoing: number;
    clean: number;
    sleep: number;

  }
const TypeAtAGlance = ({ noise, temperature, outgoing, clean, sleep}: TypeAtAGlanceProps) =>{
 
    const nosieCount = Array.from({ length: noise }, (_, index) => (
        <FavoriteOutlined key={index} sx={{width:'18px'}} />
      ));
      const EmptynosieCount = Array.from({ length: 5 - noise }, (_, index) => (
        <FavoriteBorder key={noise + index} sx={{width:'18px'}} />
      ));
      const temperatureCount = Array.from({ length: temperature }, (_, index) => (
        <FavoriteOutlined key={index} sx={{width:'18px'}} />
      ));
      const EmptytemperatureCount = Array.from({ length: 5 - temperature }, (_, index) => (
        <FavoriteBorder key={noise + index} sx={{width:'18px'}} />
      ));
      const outgoingCount = Array.from({ length: outgoing }, (_, index) => (
        <FavoriteOutlined key={index} sx={{width:'18px'}} />
      ));
      const EmptyoutgoingCount = Array.from({ length: 5 - outgoing }, (_, index) => (
        <FavoriteBorder key={noise + index} sx={{width:'18px'}} />
      ));
      const cleanCount = Array.from({ length: clean }, (_, index) => (
        <FavoriteOutlined key={index}  sx={{width:'18px'}}/>
      ));
      const EmptycleanCount = Array.from({ length: 5 - clean }, (_, index) => (
        <FavoriteBorder key={noise + index} sx={{width:'18px'}} />
      ));
      const sleepCount = Array.from({ length: sleep }, (_, index) => (
        <FavoriteOutlined key={index}  sx={{width:'18px'}}/>
      ));
      const EmptysleepCount = Array.from({ length: 5 - sleep }, (_, index) => (
        <FavoriteBorder key={noise + index}  sx={{width:'18px'}}/>
      ));
    return (
      <div className="flex flex-col py-1">
          <div className="flex flex-row justify-center mt-1 gap-2">
            <div className="flex flex-col font-['800'] text-sm ml-2 gap-0.5 mb-2">
                <div>생체 리듬</div>
                <div>흡연 여부</div>
                <div >소음 민감도</div>
                <div>온도 민감도</div>
                <div >외출/외박</div>
                <div >청결도</div>
                <div>잠버릇</div>
            </div>
            <div className="flex flex-col  font-['800'] text-primary-gray text-sm gap-0.5">
                <div className="">아침형</div>
                <div className="">비흡연자</div>
                <div className=" text-primary-orange flex-col "> 
                <div className={` text-primary-orange} flex flex-row mt-[-1px]`}>
                        {nosieCount}
                        {EmptynosieCount}
                 </div>
                 <div className={` text-primary-orange flex flex-row mt-[-1px]`}>
                        {temperatureCount}
                        {EmptytemperatureCount}
                 </div>
                 <div className={`text-[#FCA12F] flex flex-row mt-[-1px]`}>
                        {outgoingCount}
                        {EmptyoutgoingCount}
                 </div>
                 <div className={` text-primary-orange flex flex-row mt-[-1px]`}>
                        {cleanCount}
                        {EmptycleanCount}
                 </div>
                 <div className={` text-primary-orange flex flex-row mt-[-1px]`}>
                        {sleepCount}
                        {EmptysleepCount}
                 </div>
                </div>
                
            </div>
        </div>
        <Link to={'/otherpeople'} className="font-['700'] text-ms ml-2 text-primary-gray flex justify-center mt-1 ">더 자세히 보기 클릭 →</Link>
      </div>
    )
}  
const CardBack = ({isFrontView} : CardFrontBackProps) => {
    return (
        <section
        className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#F7F8FB] px-2 py-1.5 transition duration-300 ease-in-out ${
            isFrontView === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
        }`}
    >
       <div className="flex flex-col p-2 ml-2 mr-2">
       <Link to="/chat" className="mb-1 flex flex-row gap-4 justify-center ">
            <div className="font-['900'] text-bold text-3xl text-primary-logo ">채팅하기</div> 
            <img src={process.env.PUBLIC_URL + '/message.png'} alt="logo" style={{width : '45px'}}/>
                   
        </Link>
            <Divider />
            <TypeAtAGlance 
                noise={4}
                temperature={4}
                outgoing={3}
                clean={3}
                sleep={1}
                />
        </div>
        </section>
    )
}
export const Card73 = ({disableFlip=false} : RoomateCardProps) => {
    const [isFrontView, setIsFrontView] = useState(false)

    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[17rem] w-[14rem] min-w-[14rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl mt-2`}
    >
        <CardFront isFrontView={isFrontView} />
        {disableFlip === false && <CardBack isFrontView={isFrontView} />  }
    </div>
    )
}
