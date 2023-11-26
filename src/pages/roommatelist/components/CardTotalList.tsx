import { useState } from "react"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Star from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Chat from '@mui/icons-material/ForumRounded';
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
interface RoomateCardProps {
    disableFlip?: boolean
    name:string
    dept : string 
    year : number
    mbti: string
    age:string
    animal :string
    color: string
}
interface CardFrontProps {
    isFrontView: boolean
    name:string
    dept : string 
    year : number
    mbti: string
    age :string
    animal :string
    color: string
}
interface CardFrontDetailProps {
    
    name:string
    animal : string
    color: string
   
}
interface CardBackProps {
    isFrontView: boolean
   
}

const FrontDetail = ({name,animal,color }: CardFrontDetailProps) => {
    const [isStarred, setIsStarred] = useState(false);

        const handleStarClick = (e :any) => {
            e.stopPropagation(); // 이벤트 전파를 막습니다.
        
            setIsStarred(!isStarred);
           
        }
    return (
        <div className="flex flex-col items-center p-2">
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" sx={{bgcolor:`${color}`,width: 35, height: 35}} src={process.env.PUBLIC_URL + animal} />
    </Stack>
    <div className="flex flex-row ml-2">
        <div className="font-['700'] text-bold text-xl ">{`${name}님`}</div>
        <div className="mt-0.5">
      {isStarred ? (
        <Star
          sx={{  color: '#F9D800',  cursor: 'pointer'  }}
          onClick={handleStarClick}
        />
      ) : (
        <StarBorderRoundedIcon
          sx={{ cursor: 'pointer' }}
          onClick={handleStarClick}
        />
      )}
    </div>
    </div>
    <div className="font-['700'] text-primary-gray text-3xs">블루미르홀 308관/2인실</div>
        </div>
    )
}
const CardFront = ({isFrontView,name, dept, year ,mbti,age, animal,color} : CardFrontProps) => {
    return (
        <section
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <FrontDetail name={name} animal={animal} color={color}/>
        
            <div
            className="absolute bottom-0 left-0 flex h-20 w-full flex-col items-center justify-between rounded-b-xl rounded-tl-[3.5rem] rounded-tr-none bg-slate-800 p-3"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <div className="ml-2 text-xs text-white font-['700']">
                <h1 className="">{`학과 : ${dept}`}</h1> 
                <h1 className="">{`학번 : ${year}`} </h1> 
                <h1 className="">{`MBTI : ${mbti}`}</h1> 
                <h1 className="">{`나이 : ${age}`}</h1> 

            </div>
           
            
            
        </div>
    </section>
    )
}
const TypeAtAGlance = () =>{
    return (
      <div className="flex flex-col py-1">
          <div className="flex flex-row justify-center mt-1">
            <div className="flex flex-col font-['800'] text-2xs ml-3 mr-3 mb-2">
                <div>생체 리듬</div>
                <div>흡연 여부</div>
                <div >소음 민감도</div>
                <div>온도 민감도</div>
                <div >외출/외박</div>
                <div >청결도</div>
                <div>잠버릇</div>
            </div>
            <div className="flex flex-col  font-['800'] text-primary-gray text-2xs">
                <div className="">아침형</div>
                <div className="">비흡연자</div>
                <div className=" text-primary-orange flex-col"> 
                    <div className="flex flex-row mt-[-6px] mb-[-9px]">
                    <FavoriteBorder sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-10px]">
                    <FavoriteBorder sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-10px]">
                    <FavoriteBorder sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-12px]">
                    <FavoriteBorder sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/>
                    </div>
                    <div className="flex flex-row mt-[-10px]">
                    <FavoriteBorder sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/><FavoriteOutlined sx={{width:'10px'}}/>
                    </div>
                </div>
                
            </div>
        </div>
        <Link to={'/typeresult'} className="font-['700'] text-xxs ml-2 text-primary-gray flex justify-center mt-[-4px]">더 자세히 보기 →</Link>
      </div>
    )
}  
const CardBack = ({isFrontView} : CardBackProps) => {
    return (
        <section
        className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#F7F8FB] px-2 py-1.5 transition duration-300 ease-in-out ${
            isFrontView === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
        }`}
    >
       <div className="flex flex-col">
            <div className="flex flex-row ">
                    <div className="font-['700'] text-bold text-xl ml-2 ">우당탕님</div>
                    <Link to={"/chat"} className="mt-1 ml-4">
                        <Chat/>
                    </Link>
            </div>
            <div className="font-['700'] text-primary-gray text-3xs ml-2 mt-[-4px] mb-1">블루미르홀 308관/2인실</div>
            <Divider />
            <TypeAtAGlance />
        </div>
        </section>
    )
}
export const CardTotalList = ({disableFlip=false,name, dept, year ,mbti,age,animal,color} : RoomateCardProps) => {
    const [isFrontView, setIsFrontView] = useState(false)

    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[11rem] w-[9rem] min-w-[9rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl`}
    >
        <CardFront isFrontView={isFrontView} name={name} dept={dept} year={year} mbti={mbti} age={age} animal={animal} color={color}/>
        {disableFlip === false && <CardBack isFrontView={isFrontView} />}
    </div>
    )
}
