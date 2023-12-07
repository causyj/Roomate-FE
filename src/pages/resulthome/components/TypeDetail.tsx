import { useEffect, useState } from "react";

type ResultDetailProps = {
    nickname : string |undefined;
}
type ResultDetailAnotherProps = {
  nickname : string |undefined;
}
export const ResultDetail = ({nickname} : ResultDetailProps ) => {
    const [detail, setDetail] = useState('');
    useEffect(()=>{
        const Detail = async () => {
          try {
            const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/text`, {
              method: 'GET',
              credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.text();
              setDetail(data); // 새로운 카드 정보 설정
              
            } else {
              console.error('Failed to fetch new card data : ', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to fetch new card data : ', error);
          }
        };
        Detail();
      },[]);
    return(

        <div className="p-6">
            <div className="font-['800'] mb-2">{nickname}님은 이런 생활 유형이에요!</div>
            <div className="font-['700'] text-primary-gray mb-8">: {detail}
            </div>
            {/* <div className="font-['800'] mb-2">{nickname}님이 원하는 룸메이트 스타일은?</div>
            <div className="font-['700'] text-primary-gray">: 밤 12시에 취침하고, 오전 8시에 일어났으면 좋겠어요.매일 한 번의 방청소를 통해 깨끗한 
                   환경을 유지하길 바라며, 씻는 시간도 아침으로 일정하고 적절한 시간동안만 했으면 좋겠어요. 음식을 방에서 섭취하지 않았으면 좋겠고, 비흡연자였으면 좋겠어요
                    도서관에서 주로 공부하고, 노트북 소음을 안 냈으면 좋겠어요.룸메이트도 저와 친하게 지냈으면 좋겠어요. 저는 잠귀가 어두워요
            </div> */}
        </div>
            
    )
}
export const ResultDetailAnother = ({nickname} : ResultDetailAnotherProps ) => {
  const [detail, setDetail] = useState('');
  useEffect(()=>{
      const Detail = async () => {
        try {
          const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style/text/${nickname}`, {
            method: 'GET',
            credentials: 'include',
          });
    
          if (response.ok) {
            const data = await response.text();
            setDetail(data); // 새로운 카드 정보 설정
            
          } else {
            console.error('Failed to fetch new card data : ', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Failed to fetch new card data : ', error);
        }
      };
      Detail();
    },[]);
  return(

      <div className="p-6">
          <div className="font-['800'] mb-2">{nickname}님은 이런 생활 유형이에요!</div>
          <div className="font-['700'] text-primary-gray mb-8">: {detail}
          </div>
          {/* <div className="font-['800'] mb-2">{nickname}님이 원하는 룸메이트 스타일은?</div>
          <div className="font-['700'] text-primary-gray">: 밤 12시에 취침하고, 오전 8시에 일어났으면 좋겠어요.매일 한 번의 방청소를 통해 깨끗한 
                 환경을 유지하길 바라며, 씻는 시간도 아침으로 일정하고 적절한 시간동안만 했으면 좋겠어요. 음식을 방에서 섭취하지 않았으면 좋겠고, 비흡연자였으면 좋겠어요
                  도서관에서 주로 공부하고, 노트북 소음을 안 냈으면 좋겠어요.룸메이트도 저와 친하게 지냈으면 좋겠어요. 저는 잠귀가 어두워요
          </div> */}
      </div>
          
  )
}