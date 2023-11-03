import { AnimalDescription } from "./components/AnimalDescription"
import { TitleBox } from "./components/TitleBox"

export const LifeType =() => {
    return (
        <div>
            <div className="text-center text-2xl font-['800']">
            <div className='mb-4 mt-4'>모글리님의 생활 유형은, </div>
            <span className='text-5xl text-primary-orange'>원숭이</span> 입니다.
        </div>
         <AnimalDescription />
        <div className=" flex justify-center ">
            <img src={process.env.PUBLIC_URL + '/scroll.png'} alt="scroll"  />
        </div>
        <TitleBox title={'나의 생활 유형 한 눈에 보기'}/>
        </div>
    )
} 