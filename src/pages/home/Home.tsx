import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoToGroup } from "../roommatelist/components/GoToGroup";
  
  export const Home = () => {
   
    return (
      <div className="w-full fixed" >
        <div className=" h-[20%] w-full bg-primary-logo fixed top-[-1px] left-0 z-1 flex items-center justify-center">
            <div className="flex flex-row mt-[-40px] gap-4">
                <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="logo" style={{ width: '70px' }} />
                <div className="flex flex-col">
                    <div className="font-['700'] text-white text-3xl">모글리님</div>
                    <Link to='resulthome' className="text-gray-300 font-['400']">나의 동물유형 결과 보러가기 {'>'}</Link>
                </div>
            </div>
        </div>
        <div className="h-full w-full bg-white z-2 mt-[52px] fixed rounded-t-3xl ">
            <div className="px-6 mt-4 ">
                <GoToGroup/>
                <div className="font-['700'] text-xl p-12">카테고리</div>
                <div className="flex flex-col items-center justify-center">
                
                </div>
            </div>
        </div>
       
      </div>
    );
  };
  