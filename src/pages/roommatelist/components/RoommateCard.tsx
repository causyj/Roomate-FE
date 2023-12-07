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
import { ANIMAL_DATA, getAnimalColor, getAnimalColorRGB } from "../../../constants";
import { AnimalType } from "../../../interface/AnimalType";
interface RoomateCardPercentageProps {
    disableFlip?: boolean;

    key : string;
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
interface RoomateCardProps {
  index:number;
  disableFlip?: boolean;
  
  star: boolean;
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
    star:boolean;
    nickname: string;
    animal: string;
    dorm:number;
    room:number;
    age:string;
    dept: string;
    stu_num:string;
    mbti: string;
   
}

interface CardFrontPercentageProps {
  isFrontView: boolean;
  key:string;
  nickname: string;
  animal: string;
  dorm:number;
  room:number;
  age:string;
  dept: string;
  stu_num:string;
  mbti: string;
 
}
interface CardFrontDetailProps {
    nickname:string;
    star: boolean;
    animal : string;
    dorm : number;
    room : number;
   
}

interface FrontDetailPercentageProps {
  nickname:string;
  key:string;
  animal : string;
  dorm : number;
  room : number;
 
}
interface CardBackProps {
    isFrontView: boolean;
    animal:string;
    nickname: string;
    rhythm : string;
    smoke: string;
    noise: number;
    temperature:number;
    outgoing:number;
    clean:number;
    sleep:number;
   
}
interface TypeAtGlanceProps{
    animal:string;
    nickname:string;
    rhythm : string;
    smoke: string;
    noise: number;
    temperature:number;
    outgoing:number;
    clean:number;
    sleep:number;
}interface CardDataProps {
  [key: string]: {
    star:boolean;
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
//Tab1의 유사도 카드 앞면
const FrontDetailPercentage = ({nickname,animal,key, dorm, room }: FrontDetailPercentageProps) => {
    const [isStarred, setIsStarred] = useState(false);
    const [isStarredAPI, setIsStarredAPI] = useState(false);
    const [cardData, setCardData] = useState<CardDataProps | null>(null);
    const getStarPressed = async() => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/card`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setCardData(data);
          setIsStarredAPI(cardData && cardData[key]?.star ? cardData[key].star : false)
          
        } else {
          console.error('Failed to fetch initial card data: ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch initial card data: ', error);
      }

    }
    //찜 추가/삭제
    const handleStarClick = async (e: any)=> {
      
            e.stopPropagation(); // 이벤트 전파를 막습니다.

            //처음 false일때 누르면 true가 되며, 노란색이 됌.
            // setIsStarred(!isStarred);
            
            //처음에 false였으니까 노란색이 됌. -> 찜 추가
            if(!isStarred){
              try {
                const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/star/${nickname}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
          
                if (response.ok) {
                  // 서버에서 인증 코드를 반환한 경우
                  setIsStarred(!isStarred);
                  getStarPressed();
                } else {
                  // 서버에서 에러가 발생한 경우
                  console.error('Error during mailConfirm1:', response.statusText);
                }
              } catch (error) {
                console.error('Error during mailConfirm2:', error);
              }

            }
            //찜 삭제
            else{
              try {
                const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/star/${nickname}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
          
                if (response.ok) {
                  setIsStarred(!isStarred);
                  getStarPressed();
                } else {
                  // 서버에서 에러가 발생한 경우
                  console.error('Error during mailConfirm1:', response.statusText);
                }
              } catch (error) {
                console.error('Error during mailConfirm2:', error);
              }
            }
              
       };
    const colorRGB = getAnimalColorRGB(animal as AnimalType['animal']);
    return (
        <div className="flex flex-col items-center text-center justify-center p-4 ">
        
        <div className="font-['700'] text-primary-logo text-m text-start mr-auto">나와의 궁합 67%</div>
        <div className="flex justify-evenly w-ful ml-auto">
            
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" sx={{bgcolor:colorRGB, width: 70, height: 70}} src={process.env.PUBLIC_URL + `/${animal}.png`} />
            </Stack>
            <div className="text-end mt-[-32px] mr-[-8px] ml-4">
          {isStarredAPI ? (
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
    
        <div className="font-['700'] text-bold text-2xl text-center mx-auto mt-[-2px]">{nickname}님</div>
        <div className="font-['700'] text-primary-gray text-xxs mt-[-5px]">블루미르홀 {dorm}/{room}인실</div>
        </div>
    )
}

const CardFrontPercentage = ({isFrontView, key, nickname, animal, dorm, room, age,  dept, stu_num ,mbti} : CardFrontPercentageProps) => {
    
    return (
        <section
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
        <FrontDetailPercentage nickname={nickname} key={key} animal={animal} dorm={dorm} room={room} />
        
            <div
           className="absolute bottom-0 left-0 flex h-28 w-full flex-col items-center justify-center rounded-b-xl rounded-tl-[5rem] rounded-tr-none bg-slate-800 p-3"
           style={{
               boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
           }}
        >
           <div className="flex flex-col mx-auto  text-m text-white font-['700'] text-center ">
                
                <h1 className="">나이 : {age}</h1> 
                <h1 className="">학번 : {stu_num}</h1> 
                <h1 className="">MBTI : {mbti}</h1> 
                <h1 className="">학과 : {dept}</h1> 

            </div>
           
            
            
        </div>
    </section>
    )
}


//Tab3의 카드 
const FrontDetail = ({star,nickname,animal,dorm, room }: CardFrontDetailProps) => {
  const [isStarred, setIsStarred] = useState(true);
  const [isStarredAPI, setIsStarredAPI] = useState(false);
  const [starId, setStartId] = useState('');
  
  const handleStarClick = async (e: any)=> {
      
    e.stopPropagation(); // 이벤트 전파를 막습니다.

    //처음 false일때 누르면 true가 되며, 노란색이 됌.
    // setIsStarred(!isStarred);
    
    //처음에 false였으니까 노란색이 됌. -> 찜 추가
    if(!isStarred){
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/star/${nickname}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          // 서버에서 인증 코드를 반환한 경우
          setIsStarred(!isStarred);
          
        } else {
          // 서버에서 에러가 발생한 경우
          console.error('Error during mailConfirm1:', response.statusText);
        }
      } catch (error) {
        console.error('Error during mailConfirm2:', error);
      }

    }
    //찜 삭제
    else{
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/star/${nickname}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          setIsStarred(!isStarred);
         
        } else {
          // 서버에서 에러가 발생한 경우
          console.error('Error during mailConfirm1:', response.statusText);
        }
      } catch (error) {
        console.error('Error during mailConfirm2:', error);
      }
    }
      
};
              const colorRGB = getAnimalColorRGB(animal as AnimalType['animal']);
  return (
      <div className="flex flex-col items-center text-center justify-center p-4 ">
      
      <div className="flex justify-evenly w-ful ml-auto">
          
          <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" sx={{bgcolor:colorRGB, width: 70, height: 70}} src={process.env.PUBLIC_URL + `/${animal}.png`} />
          </Stack>
          <div className="text-end mt-[-8px] mr-[-8px] ml-4">
        {star ? (
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
  
      <div className="font-['700'] text-bold text-2xl text-center mx-auto">{nickname}님</div>
      <div className="font-['700'] text-primary-gray text-xxs">블루미르홀 {dorm}/{room}인실</div>
      </div>
  )
}
const CardFront = ({isFrontView,  nickname, star, animal, dorm, room, age,  dept, stu_num ,mbti} : CardFrontProps) => {
  
  return (
      <section
      className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
          isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
      }`}
  >
      <FrontDetail nickname={nickname}  star={star} animal={animal} dorm={dorm} room={room} />
      
          <div
         className="absolute bottom-0 left-0 flex h-28 w-full flex-col items-center justify-center rounded-b-xl rounded-tl-[5rem] rounded-tr-none bg-slate-800 p-3"
         style={{
             boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
         }}
      >
         <div className="flex flex-col mx-auto  text-m text-white font-['700'] text-center ">
              
              <h1 className="">나이 : {age}</h1> 
              <h1 className="">학번 : {stu_num}</h1> 
              <h1 className="">MBTI : {mbti}</h1> 
              <h1 className="">학과 : {dept}</h1> 

          </div>
         
          
          
      </div>
  </section>
  )
}

//카드 뒷면
const TypeAtAGlance = ({ nickname, animal,rhythm,smoke,noise, temperature,outgoing,clean,sleep} : TypeAtGlanceProps) =>{

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
      const color = getAnimalColor(animal as AnimalType['animal']);
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
                <div className="">{rhythm}</div>
                <div className="">{smoke}</div>
                <div className=" flex flex-col"> 
                <div className={` text-[${color}] flex flex-row mt-[-1px]`}>
                        {nosieCount}
                        {EmptynosieCount}
                 </div>
                 <div className={`text-[${color}] flex flex-row mt-[-1px]`}>
                        {temperatureCount}
                        {EmptytemperatureCount}
                 </div>
                 <div className={`text-[${color}] flex flex-row mt-[-1px]`}>
                        {outgoingCount}
                        {EmptyoutgoingCount}
                 </div>
                 <div className={`text-[${color}] flex flex-row mt-[-1px]`}>
                        {cleanCount}
                        {EmptycleanCount}
                 </div>
                 <div className={`text-[${color}] flex flex-row mt-[-1px]`}>
                        {sleepCount}
                        {EmptysleepCount}
                 </div>
                </div>
                
            </div>
        </div>
        <Link to={`resulthome/${nickname}`} className="font-['700'] text-ms ml-2 text-primary-gray flex justify-center mt-1 ">
        더 자세히 보기 클릭 →
          </Link>
      </div>
    )
}  
const CardBack = ({isFrontView,animal,nickname, rhythm,smoke,noise, temperature,outgoing,clean, sleep} : CardBackProps) => {
  // const [apply_id, setApply_id] = useState('');
  // const chatClick = async() => {
  //   try {
  //       const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/chat/${nickname}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },

  //         credentials: 'include',
  //       });

  //       // Handle the response as needed
  //       console.log(response);

  //       // Check if login is successful, then redirect to StarPage
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(`data : ${data.substring(1)}`);
         
          
  //         setApply_id(data.substring(1))
  //         console.log(`${data.substring(1)}채팅으로 넘어갑니다.`);
  //       }
  //     } catch (error) {
  //       console.error('Error during login:', error);
  //     }
  // }
  const apply_id = nickname;
    return (
        <section
        className={`group absolute inset-0 z-0 flex h-full w-full flex-col items-start justify-between rounded-xl bg-[#F7F8FB] px-2 py-1.5 transition duration-300 ease-in-out ${
            isFrontView === false ? 'opacity-0 rotate-y-180' : 'z-10 opacity-100 rotate-y-0'
        }`}
    >
       <div className="flex flex-col p-2 ml-2 mr-2">
       <Link to={`/chat/${apply_id}`} className="mb-1 flex flex-row gap-4 justify-center ">
          
            {/* <div className="font-['900'] text-bold text-3xl text-primary-logo" onClick={chatClick}>채팅하기</div> 
            <img src={process.env.PUBLIC_URL + '/message.png'} alt="logo" style={{width : '45px'}} onClick={chatClick}/>
                    */}
                     <div className="font-['900'] text-bold text-3xl text-primary-logo" >채팅하기</div> 
            <img src={process.env.PUBLIC_URL + '/message.png'} alt="logo" style={{width : '45px'}}/>
                
        </Link>

            <Divider />
            <TypeAtAGlance nickname={nickname} animal={animal} rhythm={rhythm} smoke={smoke} noise={noise} temperature= {temperature} outgoing={outgoing} clean={clean} sleep={sleep} />
        </div>
        </section>
    )
}

//Tab1의 유사도 카드
export const RoommateCardPercentage = ({disableFlip=false, key, nickname, animal, dorm, room, age,  dept, stu_num ,mbti,rhythm,smoke,noise, temperature,outgoing,clean,sleep} : RoomateCardPercentageProps) => {
    const [isFrontView, setIsFrontView] = useState(false)
    const ages = age.toString();
    const AGE = ages == "0" ? "비공개" : `${ages}살`;
    const stuNum = stu_num.toString();
    const STU_NUM = stuNum == "0" ? "비공개" : `${stuNum}학번`;
    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[17rem] w-[14rem] min-w-[14rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl mt-2 `}
    >
        <CardFrontPercentage isFrontView={isFrontView} key={key} nickname={nickname} animal={animal} dorm={dorm} room={room} age={AGE} dept={dept} stu_num={STU_NUM} mbti={mbti}  />
        {disableFlip === false && <CardBack isFrontView={isFrontView} nickname={nickname} animal={animal} rhythm={rhythm} smoke={smoke} noise={noise} temperature= {temperature} outgoing={outgoing} clean={clean} sleep={sleep}/>}
    </div>
    )
}

//Tab3의 유사도 카드
export const RoommateCard = ({disableFlip=false, nickname, star, animal, dorm, room, age,  dept, stu_num ,mbti,rhythm,smoke,noise, temperature,outgoing,clean,sleep} : RoomateCardProps) => {
  const [isFrontView, setIsFrontView] = useState(false)
  const ages = age.toString();
  const AGE = ages == "" ? "비공개" : `${ages}살`;
  const stuNum = stu_num.toString();
  const STU_NUM = stuNum == "" ? "비공개" : `${stuNum}학번`;
  const toggleCardView = () => {
      setIsFrontView((isFrontView) => !isFrontView)
  }
  return (
      <div
      onClick={toggleCardView}
      className={`relative h-[17rem] w-[14rem] min-w-[14rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl mt-2 `}
  >
      <CardFront isFrontView={isFrontView} star={star} nickname={nickname} animal={animal} dorm={dorm} room={room} age={AGE} dept={dept} stu_num={STU_NUM} mbti={mbti}  />
      {disableFlip === false && <CardBack isFrontView={isFrontView}  nickname={nickname} animal={animal} rhythm={rhythm} smoke={smoke} noise={noise} temperature= {temperature} outgoing={outgoing} clean={clean} sleep={sleep}/>}
  </div>
  )
}
