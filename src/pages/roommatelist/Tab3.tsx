import { GoToGroup } from "./components/GoToGroup"
import ResetIcon from '@mui/icons-material/RestartAltOutlined';
import { useEffect, useState } from "react";
import { RoommateCard } from "./components/RoommateCard";

  interface LikeCardDataProps {
   
     star : boolean;
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
  }
export const Tab3 = () => {
 const [likeCard, setLikeCard] = useState<LikeCardDataProps | null>(null);
const handleResetClick =  async () => {
//   try {
//     const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/star/{starId}`, {
//       method: 'GET',
//       credentials: 'include',
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setCardData(data); // 새로운 카드 정보 설정
//       console.log("2. new ok");
//       console.log(data);
//       console.log(cardData);
//     } else {
//       console.error('Failed to fetch new card data : ', response.status, response.statusText);
//     }
//   } catch (error) {
//     console.error('Failed to fetch new card data : ', error);
//   }
};
useEffect(() => {
  const LikeCardData = async () => {
    try {
      const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/list/star`, {
        method: 'GET',
        credentials: 'include',
      });
  
      if (response.ok) {
        const data = await response.json();
        setLikeCard(data); 
      } else {
        console.error('Failed to fetch new card data : ', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch new card data : ', error);
    }
  };
  LikeCardData();
},[]);

    return (
        <div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className='flex flex-row items-center gap-4'>
              <div className="font-['700'] text-2xl ">📍 내가 찜한 룸메이트</div>
                  <button className="bg-primary-logo w-[45px] h-[45px] rounded-2xl" onClick={handleResetClick}>
                    <ResetIcon sx={{width:'30px', height:'30px', color:'white'}} />
                  </button>
              </div>
          </div>
          <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto overflow-y-hidden p-1 gap-2 ">
      
          {likeCard && Array.isArray(likeCard) &&
        likeCard.map((card: LikeCardDataProps, index: number) => (
            <RoommateCard
             index={index}
              star ={card.star}
              nickname={card.nickname}
              animal={card.animal}
              dorm={card.dorm}
              room={card.room}
              age={card.age}
              dept={card.dept}
              stu_num={card.stu_num}
              mbti={card.mbti}
              rhythm={card.rhythm}
              smoke={card.smoke}
              noise={card.noise}
              temperature={card.temperature}
              outgoing={card.outgoing}
              clean={card.clean}
              sleep={card.sleep}
            /> 
            
          ))}
      </div>
          <GoToGroup />
        </div>
    )
}
