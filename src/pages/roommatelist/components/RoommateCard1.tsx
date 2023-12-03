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
import { ANIMAL_DATA } from "../../../constants";
import { AnimalType } from "../../../interface/AnimalType";
interface RoomateCardProps {
    disableFlip?: boolean;
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
}
interface CardFrontProps {
    isFrontView: boolean;
    nickname: string;
    animal: string;
    dorm:number;
    room:number;
    age:number;
    dept: string;
    stu_num:number;
    mbti: string;
   
}
interface CardFrontDetailProps {
    
    nickname:string;
    animal : string;
    dorm : number;
    room : number;
   
}
interface CardBackProps {
    isFrontView: boolean
    nickname:string;
    dorm : number;
    room : number;
    rhythm : string;
    smoke: string;
    noise: number;
    temperature:number;
    outgoing:number;
    clean:number;
    sleep:number;
   
}

const FrontDetail = ({nickname,animal,dorm, room }: CardFrontDetailProps) => {
    const [isStarred, setIsStarred] = useState(false);

        const handleStarClick = (e :any) => {
            e.stopPropagation(); // 이벤트 전파를 막습니다.
        
            setIsStarred(!isStarred);
           
        }
    const dn = 'penguin'
    console.log(ANIMAL_DATA[dn as AnimalType['animal']].color)
    return (
        <div className="flex flex-col items-center text-center justify-center p-4 ">
        
        <div className="flex justify-evenly w-ful ml-auto">
            
        <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" sx={{bgcolor:ANIMAL_DATA[animal as AnimalType['animal']].color, width: 70, height: 70}} src={process.env.PUBLIC_URL + animal} />
        </Stack>
        <div className="text-end mt-[-8px] mr-[-8px] ml-5">
      {isStarred ? (
        <Star
          sx={{  color: '#F9D800', width: '50px', height: '50px', cursor: 'pointer'  }}
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
     
    
        <div className="font-['700'] text-bold text-2xl text-center mx-auto ">{`${nickname}님`}</div>
        <div className="font-['700'] text-primary-gray text-xs">블루미르홀 308관/2인실</div>
        </div>
    )
}
const CardFront = ({isFrontView,nickname, animal, dorm, room, age,  dept, stu_num ,mbti} : CardFrontProps) => {
    return (
        <section
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <FrontDetail nickname={nickname} animal={animal} dorm={dorm} room={room} />
        
            <div
            className="absolute bottom-0 left-0 flex h-28 w-full flex-col items-center justify-between rounded-b-xl rounded-tl-[5rem] rounded-tr-none bg-slate-800 p-3"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <div className="ml-2 text-m text-white font-['700']">
                <h1 className="">{`나이 : ${age}`}</h1> 
                <h1 className="">{`학번 : ${stu_num}`} </h1> 
                <h1 className="">{`MBTI : ${mbti}`}</h1> 
                <h1 className="">{`학과 : ${dept}`}</h1> 

            </div>
           
            
            
        </div>
    </section>
    )
}
const TypeAtAGlance = () =>{
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
                <div className=" text-primary-orange flex-col"> 
                    <div className="flex flex-row mt-[-1px]">
                    <FavoriteBorder sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-2px]">
                    <FavoriteBorder sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-2px]">
                    <FavoriteBorder sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-2px]">
                    <FavoriteBorder sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-2px]">
                    <FavoriteBorder sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/><FavoriteOutlined sx={{width:'18px'}}/>
                    </div>
                </div>
                
            </div>
        </div>
        <Link to={'/typeresult'} className="font-['700'] text-ms ml-2 text-primary-gray flex justify-center mt-[-4px]">더 자세히 보기 →</Link>
      </div>
    )
}  
const CardBack = ({isFrontView,nickname, dorm, room,rhythm,smoke,noise, temperature,outgoing,sleep} : CardBackProps) => {
    return (
        <section
        className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#F7F8FB] px-2 py-1.5 transition duration-300 ease-in-out ${
            isFrontView === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
        }`}
    >
       <div className="flex flex-col p-2 ml-2 mr-2">
            <div className="flex flex-row ">
                    <div className="font-['700'] text-bold text-3xl ">김애옹님</div>
                    <Link to={"/chat"} className="mt-2 ml-5">
                        <Chat sx={{width:'40px', height: '40px' }}/>
                    </Link>
            </div>
            <div className="font-['700'] text-primary-gray text-xs mt-[-4px] mb-1">블루미르홀 308관/2인실</div>
            <Divider />
            <TypeAtAGlance />
        </div>
        </section>
    )
}
export const RoommateCard1 = ({disableFlip=false,nickname, animal, dorm, room, age,  dept, stu_num ,mbti,rhythm,smoke,noise, temperature,outgoing,clean,sleep} : RoomateCardProps) => {
    const [isFrontView, setIsFrontView] = useState(false)

    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[17rem] w-[14rem] min-w-[14rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl mt-2 `}
    >
        <CardFront isFrontView={isFrontView} nickname={nickname} animal={animal} dorm={dorm} room={room} age={age} dept={dept} stu_num={stu_num} mbti={mbti}  />
        {disableFlip === false && <CardBack isFrontView={isFrontView} nickname={nickname} dorm={dorm} room={room} rhythm={rhythm} smoke={smoke} noise={noise} temperature= {temperature} outgoing={outgoing} clean={clean} sleep={sleep}/>}
    </div>
    )
}
