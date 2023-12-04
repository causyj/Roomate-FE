import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import { useEffect, useState } from "react";
interface TypeAtAGlanceProps {
    color: string |undefined;
  }
interface HeartDataProps{
  rhythm : string;
  smoke: string;
  noise: number;
  temperature: number;
  outgoing: number;
  clean: number;
  sleep: number;
}
export const TypeAtAGlance = ({ color }: TypeAtAGlanceProps) =>{
  const [heartData, setHeartData] = useState<HeartDataProps | null>(null);
  useEffect(()=>{
    const IconData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/heart`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setHeartData(data); // 새로운 카드 정보 설정
          
        } else {
          console.error('Failed to fetch new card data : ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch new card data : ', error);
      }
    };
    IconData();
  },[]);
    const nosieCount = Array.from({ length: noise }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptynosieCount = Array.from({ length: 5 - noise }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const temperatureCount = Array.from({ length: temperature }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptytemperatureCount = Array.from({ length: 5 - temperature }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const outgoingCount = Array.from({ length: outgoing }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptyoutgoingCount = Array.from({ length: 5 - outgoing }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const cleanCount = Array.from({ length: clean }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptycleanCount = Array.from({ length: 5 - clean }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));
      const sleepCount = Array.from({ length: sleep }, (_, index) => (
        <FavoriteOutlined key={index} />
      ));
      const EmptysleepCount = Array.from({ length: 5 - sleep }, (_, index) => (
        <FavoriteBorder key={noise + index} />
      ));

     
    return (
      <div className="flex flex-col items-center p-6">
          <div className="flex flex-row">
            <div className="flex flex-col mr-8 font-['700']">
                <div className="mb-1">생체 리듬</div>
                <div className="mb-1">흡연 여부</div>
                <div className="mb-1">소음 민감도</div>
                <div className="mb-1">온도 민감도</div>
                <div className="mb-1">외출/외박</div>
                <div className="mb-1">청결도</div>
                <div className="mb-1">잠버릇</div>
            </div>
            <div className="flex flex-col mb-1 font-['700'] text-primary-gray">
                <div className="mb-1">아침형</div>
                <div className="mb-1">비흡연자</div>
                <div className={`mb-1 text-${color}-500 flex flex-row`}>
                        {nosieCount}
                        {EmptynosieCount}
                 </div>
                 <div className={`mb-1 text-${color}-500 flex flex-row`}>
                        {temperatureCount}
                        {EmptytemperatureCount}
                 </div>
                 <div className={`mb-1 text-${color}-500 flex flex-row`}>
                        {outgoingCount}
                        {EmptyoutgoingCount}
                 </div>
                 <div className={`mb-1 text-${color}-500 flex flex-row`}>
                        {cleanCount}
                        {EmptycleanCount}
                 </div>
                 <div className={`mb-1 text-${color}-500 flex flex-row`}>
                        {sleepCount}
                        {EmptysleepCount}
                 </div>
                
            </div>
        </div>
      </div>
    )
}  