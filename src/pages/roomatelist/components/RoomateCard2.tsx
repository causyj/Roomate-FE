import { useState } from "react"
interface RoomateCardProps {
    disableFlip?: boolean
}
interface CardFrontBackProps {
    isFrontView: boolean
}
const CardFront = ({isFrontView} : CardFrontBackProps) => {
    return (
        <section
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out mt-0 ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
            <div
            className="absolute bottom-0 left-0 flex h-20 w-full flex-col items-center justify-between rounded-b-xl rounded-tl-[3.5rem] rounded-tr-none bg-slate-800 p-3"
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <div className="ml-2 mt-2 text-xs text-white font-['700']">
                <h1 className="">학과 : 간호학부 </h1> 
                <h1 className="">학번 : 21학번 </h1> 
                <h1 className="">MBTI : ENFJ </h1> 

            </div>
           
            
            
        </div>
    </section>
    )
}
const CardBack = ({isFrontView} : CardFrontBackProps) => {
    return (
        <div>
            
        </div>
    )
}
export const RoomateCard2 = ({disableFlip=false} : RoomateCardProps) => {
    const [isFrontView, setIsFrontView] = useState(false)

    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[10rem] w-[8rem] min-w-[8rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu border-2 border-slate-800 rounded-2xl`}
    >
        <CardFront isFrontView={isFrontView} />
        {disableFlip === false && <CardBack isFrontView={isFrontView} />}
    </div>
    )
}