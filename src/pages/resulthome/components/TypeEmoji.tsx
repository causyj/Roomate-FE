import { useEffect, useState } from "react";

const rhythm = '아침형';
const smoke = '비흡연자';
const home = '집순이';
const hotCold = '추위에 약함';

type IconDataProps ={
    rhythm :string;
    smoke : string;
    home  : string;
    hotCold : string 
}
type TypeEmojiNotUserProps = {
    id : string;
}
export const TypeEmojiUser = () => {
    const [iconData, setIconData] = useState<IconDataProps | null>(null);
    useEffect(()=>{
        const IconData = async () => {
          try {
            const response = await fetch( `http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/icon` , {
              method: 'GET',
              credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.json();
              setIconData(data); // 새로운 카드 정보 설정
              
            } else {
              console.error('Failed to fetch new card data : ', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to fetch new card data : ', error);
          }
        };
        IconData();
      },[]);
        const rhythmIcon = rhythm === '아침형' ? '/am.png' : '/pm.png';
        const smokeIcon = smoke === '비흡연자' ? '/nosmoking.png' : '/smoking.png';
        const homeIcon = home === '집순이' ? '/homelover.png' : '/outside.png';
        const hotColdIcon = hotCold === '추위에 약함' ? '/cold.png' : '/hot.png';
    return (
        <div>
            {iconData && 
            <div className="flex flex-row p-2 text-center items-center justify-center gap-2">
            <div className="flex flex-col text-center mr-2  items-center justify-center">
                <img src={process.env.PUBLIC_URL + rhythmIcon} alt={iconData.rhythm} width={'70px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.rhythm}</div>
            </div>
            <div className="flex flex-col text-center contain mr-2  items-center justify-center">
                <img src={process.env.PUBLIC_URL + smokeIcon} alt={iconData.smoke} width={'55px'} />
                <div className="font-['700'] text-primary-gray">{iconData.smoke}</div>
            </div>
            <div className="flex flex-col text-center contain  items-center justify-center">
                <img src={process.env.PUBLIC_URL + homeIcon} alt={iconData.home} width={'55px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.home}</div>
            </div>
            <div className="flex flex-col contain text-center justify-center  items-center">
                <img src={process.env.PUBLIC_URL + hotColdIcon} alt={iconData.hotCold} width={'55px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.hotCold}</div>
            </div>
        </div>
            }
            
        </div>
    )
}

export const TypeEmojiNotUser = ({id } : TypeEmojiNotUserProps) => {
    const [iconData, setIconData] = useState<IconDataProps | null>(null);
    useEffect(()=>{
        const IconData = async () => {
          try {
            const response = await fetch( `http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/icon/${id}` , {
              method: 'GET',
              credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.json();
              setIconData(data); // 새로운 카드 정보 설정
              
            } else {
              console.error('Failed to fetch new card data : ', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to fetch new card data : ', error);
          }
        };
        IconData();
      },[]);
        const rhythmIcon = rhythm === '아침형' ? '/am.png' : '/pm.png';
        const smokeIcon = smoke === '비흡연자' ? '/nosmoking.png' : '/smoking.png';
        const homeIcon = home === '집순이' ? '/homelover.png' : '/outside.png';
        const hotColdIcon = hotCold === '추위에 약함' ? '/cold.png' : '/hot.png';
    return (
        <div>
            {iconData && 
            <div className="flex flex-row p-2 text-center items-center justify-center gap-2">
            <div className="flex flex-col text-center mr-2  items-center justify-center">
                <img src={process.env.PUBLIC_URL + rhythmIcon} alt={iconData.rhythm} width={'70px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.rhythm}</div>
            </div>
            <div className="flex flex-col text-center contain mr-2  items-center justify-center">
                <img src={process.env.PUBLIC_URL + smokeIcon} alt={iconData.smoke} width={'55px'} />
                <div className="font-['700'] text-primary-gray">{iconData.smoke}</div>
            </div>
            <div className="flex flex-col text-center contain  items-center justify-center">
                <img src={process.env.PUBLIC_URL + homeIcon} alt={iconData.home} width={'55px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.home}</div>
            </div>
            <div className="flex flex-col contain text-center justify-center  items-center">
                <img src={process.env.PUBLIC_URL + hotColdIcon} alt={iconData.hotCold} width={'55px'}  />
                <div className="font-['700'] text-primary-gray">{iconData.hotCold}</div>
            </div>
        </div>
            }
            
        </div>
    )
}