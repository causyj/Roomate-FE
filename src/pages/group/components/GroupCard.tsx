interface GroupCardProps {
    title: string;
    tag : string;
    img : string;
    color : string;

}

export const GroupCard : React.FC<GroupCardProps> = ({ title, tag, img, color}) => {
    return (
        <div className="flex flex-col">
            <div className={`h-[210px] w-[190px] rounded-2xl bg-primary-${color} flex flex-col pl-6 pt-4 items-start text-center border-2 border-primary-bg`}>
                <div className="font-['700'] text-xl">{`${title} >`}</div>
                <div className="font-['600'] h-[20px] w-[70px] rounded-3xl bg-blue-300 mt-2 text-ms">{`#${tag}`}</div>
                <img src={process.env.PUBLIC_URL + `/${img}.png`} alt="roomie" width="80px" className="ml-16 mt-3" />
                <div className="font-['700'] text-lg">2/6</div>
            </div>
        </div>
    )
}