import { useEffect, useState } from "react";
import ProgressIndLinear from "./common/ProgressIndLinear";
import { useNavigate } from "react-router-dom";
interface  LoadingProps{
    address : string;
    firstLine : string,
    secondLine : string,
}
export const Loading = ({ address,firstLine, secondLine }: LoadingProps) => {
    const navigate = useNavigate();
    const timeout = () => {
            return setTimeout(() => {
              navigate(address);
            }, 2000);
          };
          useEffect(() => {
                const timeoutId = timeout();
            
                return () => {
                  clearTimeout(timeoutId);
                };
              }, []); 
    return (
        <div className="flex flex-col">
            <div className="font-['700'] text-2xl mt-8">{firstLine}</div>
            <div className="font-['700'] text-2xl">{secondLine}</div>
            <div className="font-['400'] mt-8 mb-2 text-xl">잠시만 기다려주세요</div>
            <div className="mb-2">
                <img src={process.env.PUBLIC_URL + '/puang1.png'} alt="monkey" style={{ width: '300px' }} />
            </div>
            <ProgressIndLinear />
        </div>
    );
};
