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
        className={`relative inset-0 z-10 h-full w-full transition duration-300 ease-in-out ${
            isFrontView ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'
        }`}
    >
            <div
            className="absolute bottom-0 left-0 flex h-20 w-full flex-col items-end justify-between rounded-b-xl rounded-tl-[3.5rem] rounded-tr-none bg-sky-600 p-3 "
            style={{
                boxShadow: '-1px -1px 10px rgba(32, 32, 32, 0.2)',
            }}
        >
            <h1 className="mt-1 text-sm text-black md:text-lg">sdfsdf</h1>
            <p className="font-eng text-3xs font-light text-black md:text-xxs">sfds</p>
        </div>
    </section>
    )
}
const CardBack = ({isFrontView} : CardFrontBackProps) => {
    return (
        <div>
            sdf
        </div>
    )
}
export const RoomateCard = ({disableFlip=false} : RoomateCardProps) => {
    const [isFrontView, setIsFrontView] = useState(false)

    const toggleCardView = () => {
        setIsFrontView((isFrontView) => !isFrontView)
    }
    return (
        <div
        onClick={toggleCardView}
        className={`relative h-[12rem] w-[8rem] min-w-[8rem] cursor-pointer transition-transform duration-300 perspective-500 transform-style-3d transform-gpu `}
    >
        <CardFront isFrontView={isFrontView} />
        {disableFlip === false && <CardBack isFrontView={isFrontView} />}
    </div>
    )
}