import { TitleBox } from "./TitleBox"
export const TypeEmoji=() => {
    return(
        <div>
            <TitleBox title={'모글리님의 라이프 스타일'}/>
            <div className="flex flex-row p-4 text-center items-center justify-center">
                <div className="flex flex-col text-center mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/morning.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">아침형</div>
                </div>
                <div className="flex flex-col contain mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/nosmoking.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">아침형</div>
                </div>
                <div className="flex flex-col contain ">
                    <img src={process.env.PUBLIC_URL + '/homelover.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">아침형</div>
                </div>
                
            </div>
        </div>
    )
}