import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "./components/Card";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  export const Home = () => {
    const [verify, setVerify] = useState(false); //테스트 했었는지 안 했었는지
    const [nickname, setNickname] = useState('');
    const [isFirst, setIsFirst] = useState(false); 
     const usenavigate = useNavigate();
    const fetchData = async () => {
      try {
        const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/style`, {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          setIsFirst(data);
          if(!data){
            usenavigate('/testpage')
          }
        } else {
          console.error('Failed to fetch initial card data: ', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch initial card data: ', error);
      }
    };
    useEffect(()=>{
      fetchData();
    })
    
    useEffect(() => {
        const fetchNickname = async () =>{
            try{
                const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/nickname`,{
                method: 'GET',
                 credentials: 'include',
                });

          // Check if login is successful, then redirect to StarPage
          if (response.ok) {
            const nicknameData = await response.text();
            console.log(nicknameData);
            setNickname(nicknameData);
            console.log(nickname);
          }else{
            console.error('Failed to fetch nickname : ',response.status, response.statusText);
          }
        } catch (error) {
          console.error('Failed to fetch nickname : ', error);
        }
      };
          fetchNickname();
    },[]);
   //h-[calc(40%+2rem)]
    return (
     <div className="flex flex-col items-center w-full">
        <div className="max-w-[413px]  h-[140px] w-full bg-primary-logo fixed top-0 flex items-center justify-center  " style={{zIndex:200}}>
                <div className="flex flex-row gap-6 mb-4 mt-[-10px]">
                    <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="logo" style={{ width: '70px' }} />
                    <div className="flex flex-col">
                        <div className="font-['700'] text-white text-3xl ">{nickname ? `${nickname} 님` : '로딩 중...'}</div>
                        <Link to='/resulthome' className="text-gray-300 font-['400']">나의 동물유형 결과 보러가기 {'>'}</Link>
                    </div>
                    
                </div>

        </div>

        <div className="  max-w-[413px]  w-full fixed min-h-screen max-h-screen bg-white rounded-t-3xl mt-[72px] overflow-y-auto p-8" style={{zIndex:20000}}>
         <div className="  top-0 fixed max-w-[413px] flex justify-center text-center items-center mt-[100px]  h-[90px] w-full ml-[-32px] bg-white   rounded-t-3xl" style={{ position: 'fixed', width: '100%',zIndex: 200 } }>
            
            <div className="px-6 w-full top-0 fixed mt-[110px] max-w-[413px] ">
               {verify ? 
              
               <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2" >
               <div className="flex flex-col items-center justify-start p-3">
                       <div className="text-xs text-center">이제 룸메이트 추천을 받을 수 있어요!</div>
                       <div className="flex flex-row mt-1">
                           <div className="ml-3 font-['700'] text-m ">기숙사 합격 인증 완료</div>
                           <CheckCircleIcon sx={{width:'40px', color:'green'}}/>
                       </div>
               </div>
               </div>
           
           : 
           <Link to='/verify'>
                   <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2">
                   <div className="flex flex-col items-center justify-start p-3">
                           <div className="text-xs text-center">룸메이트 추천을 위해 기숙사 합격 인증이 필요해요!</div>
                           <div className="flex flex-row">
                               <div className="mt-1 mr-7 font-['700'] text-m ">기숙사 합격 인증 하러가기 {'>'}</div>
                               <img src={process.env.PUBLIC_URL + '/verify.png'} alt="roomie" width="35px"  />
                           </div>
                   </div>
                   </div>
               </Link>}

           </div>
          </div>
           
           <div className="mt-[70px] max-h-[800px] flex flex-col items-center justify-center gap-8 text-primary-bg overflow-y-auto flex-shrink-0 " style={{ zIndex:20, scrollBehavior: 'smooth'}}>
           <div className="text-white">sfsdfsdfsdf</div>  
                   <div className="text-white">sfsdfsdfsdf</div>  
                
                   <div className="text-white">sfsdfsdfsdf</div>  
                   <div className="text-white">sfsdfsdfsdf</div> 
                   <div className="text-white">sfsdfsdfsdf</div>  
                   <div className="text-white">sfsdfsdfsdf</div>  
                   <div className="text-white">sfsdfsdfsdf</div>  

                   <Card image='roomatecard' text='룸메이트 추천' description1='나와 맞는 룸메이트를'description2=' 찾아보세요!' link='/recommendIntro'/>
                   <Card image='groupcard' text='모임 목록' description1='나와 비슷한 성향의 사람들과'description2='모임을 가져보세요!' link='/group'/>
                   <Card image='dictionarycard' text='동물사전' description1='8개의 동물 유형을' description2='볼 수 있어요!' link='/animaldict'/>   
                   <Card image='test' text='생활 유형 검사' description1='나의 기숙사 생활유형' description2='테스트 해보세요!' link='/testpage'/>   
                   <div className="text-white">sfsdfsdfsdf</div>  
                   <div className="text-white">sfsdfsdfsdf</div>  
                    
                   
           </div>
        </div>




 
    
    
     </div>
    );
  };
  {/* <div className=" font-['700'] text-2xl px-12 mb-4 text-primary-bg text-center">카테고리</div> */}
