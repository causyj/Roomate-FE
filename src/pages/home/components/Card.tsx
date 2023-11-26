interface CardProps {
    image :string;
    text : string;
    description1: string;
    description2: string;
}
export const Card : React.FC<CardProps> = ({ image, text,description1,description2 })  => {
    return (
        <div>
            
        <div className=" h-52 w-48 bg-primary-logo z-2 rounded-2xl bg-primary-ivory shadow-2xl flex flex-col p-3 justify-center items-center  text-center">
            <img src={process.env.PUBLIC_URL + `/${image}.png`} alt="logo" style={{ width: '65px' }} />
            <div className="font-['700'] text-3xl text-primary-bg mt-2">{text}</div>
            <div className="font-['700'] text-sm text-primary-gray mt-1 ">{description1}</div>
            <div className="font-['700'] text-sm text-primary-gray ">{description2}</div>
        </div>
        {/* <div className="h-full w-full bg-white z-1 mt-[52px] fixed rounded-t-3xl ">
       
        </div> */}
        </div>
    )
}