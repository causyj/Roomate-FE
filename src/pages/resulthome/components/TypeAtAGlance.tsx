import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import { useEffect, useState } from "react";
interface TypeAtAGlanceProps {
    color: string |undefined;
  }
  interface TypeAtAGlanceNotuserProps {
    color: string |undefined;
    nickname :string|undefined;
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
    const nosieCount = Array.from({ length: heartData?.noise! }, (_, index) => (
        <FavoriteOutlined key={heartData?.noise!} />
      ));
      const EmptynosieCount = Array.from({ length: 5 - heartData?.noise! }, (_, index) => (
        <FavoriteBorder key={heartData?.noise! + index} />
      ));

      const temperatureCount = Array.from({ length: heartData?.temperature! }, (_, index) => (
        <FavoriteOutlined key={heartData?.temperature!} />
      ));
      const EmptytemperatureCount = Array.from({ length: 5 - heartData?.temperature! }, (_, index) => (
        <FavoriteBorder key={heartData?.temperature! + index} />
      ));
      
      const outgoingCount = Array.from({ length: heartData?.outgoing! }, (_, index) => (
        <FavoriteOutlined key={heartData?.outgoing!} />
      ));
      const EmptyoutgoingCount = Array.from({ length: 5 - heartData?.outgoing! }, (_, index) => (
        <FavoriteBorder key={heartData?.outgoing! + index} />
      ));
      const cleanCount = Array.from({ length: heartData?.clean! }, (_, index) => (
        <FavoriteOutlined key={heartData?.clean!} />
      ));
      const EmptycleanCount = Array.from({ length: 5 - heartData?.clean! }, (_, index) => (
        <FavoriteBorder key={heartData?.clean! + index} />
      ));
      const sleepCount = Array.from({ length: heartData?.sleep! }, (_, index) => (
        <FavoriteOutlined key={heartData?.sleep!} />
      ));
      const EmptysleepCount = Array.from({ length: 5 - heartData?.sleep! }, (_, index) => (
        <FavoriteBorder key={heartData?.sleep! + index} />
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
                <div className="mb-1">{heartData?.rhythm!}</div>
                <div className="mb-1">{heartData?.smoke!}</div>
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

export const TypeAtAGlanceNotUser = ({ color, nickname }: TypeAtAGlanceNotuserProps) =>{
  const [heartData, setHeartData] = useState<HeartDataProps | null>(null);
  useEffect(()=>{
    const IconData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/heart/${nickname}`, {
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
    const nosieCount = Array.from({ length: heartData?.noise! }, (_, index) => (
        <FavoriteOutlined key={heartData?.noise!} />
      ));
      const EmptynosieCount = Array.from({ length: 5 - heartData?.noise! }, (_, index) => (
        <FavoriteBorder key={heartData?.noise! + index} />
      ));

      const temperatureCount = Array.from({ length: heartData?.temperature! }, (_, index) => (
        <FavoriteOutlined key={heartData?.temperature!} />
      ));
      const EmptytemperatureCount = Array.from({ length: 5 - heartData?.temperature! }, (_, index) => (
        <FavoriteBorder key={heartData?.temperature! + index} />
      ));
      
      const outgoingCount = Array.from({ length: heartData?.outgoing! }, (_, index) => (
        <FavoriteOutlined key={heartData?.outgoing!} />
      ));
      const EmptyoutgoingCount = Array.from({ length: 5 - heartData?.outgoing! }, (_, index) => (
        <FavoriteBorder key={heartData?.outgoing! + index} />
      ));
      const cleanCount = Array.from({ length: heartData?.clean! }, (_, index) => (
        <FavoriteOutlined key={heartData?.clean!} />
      ));
      const EmptycleanCount = Array.from({ length: 5 - heartData?.clean! }, (_, index) => (
        <FavoriteBorder key={heartData?.clean! + index} />
      ));
      const sleepCount = Array.from({ length: heartData?.sleep! }, (_, index) => (
        <FavoriteOutlined key={heartData?.sleep!} />
      ));
      const EmptysleepCount = Array.from({ length: 5 - heartData?.sleep! }, (_, index) => (
        <FavoriteBorder key={heartData?.sleep! + index} />
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
                <div className="mb-1">{heartData?.rhythm!}</div>
                <div className="mb-1">{heartData?.smoke!}</div>
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