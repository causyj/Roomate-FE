import { ANIMAL_LIST } from "../../constants";
import { tw } from '../../styles'
import { Link, useParams } from "react-router-dom";
import { GetVariants } from "tailwindest";
const animalLinkCard = tw.style({
    display: 'flex',
    flexDirection: 'flex-col',
    alignItems: 'items-center',
    justifyContent: 'justify-between',
    gap: 'gap-2',

    width: 'w-full',
    padding: 'p-3',
    cursor: 'cursor-pointer',
    borderRadius: 'rounded-3xl',

    borderWidth: 'border',
    borderColor: 'border-gray-50',
    ':hover': {
        borderColor: 'hover:border-transparent',
        boxShadow: 'hover:shadow-2xl',
        transformScale: 'hover:scale-105',
    },
    ':active': {
        transformScale: 'active:scale-100',
    },
    transition: 'transition-all ease-out',
    transitionDuration: 'duration-150',
})
const animalIcon = tw.rotary({
    base: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-28',
        height: 'h-28',
        minWidth: 'min-w-[6rem]',
        minHeight: 'min-h-[6rem]',
        borderRadius: 'rounded-2xl',
        userSelect: 'select-none',
        cursor: 'cursor-pointer',
        'group': {
            ':hover': {
               boxShadow: 'group-hover:shadow-inner',
            },
        },
        ':hover': {
            boxShadow: 'hover:shadow-2xl',
            transformScale: 'hover:scale-105',
        },
        ':active': {
            transformScale: 'active:scale-100',
        },
        transition: 'transition-all ease-out',
        transitionDuration: 'duration-150',
        },        
        yellow: {
            padding : 'p-3',
            backgroundColor: 'bg-[#FCF097]',
        },
        rose: {
            padding : 'p-3',
            backgroundColor: 'bg-[#FFACA6]',
        },
        orange: {
            padding : 'p-3',
            backgroundColor: 'bg-[#FEDEAC]',
        },
        green: {
            padding : 'p-3',
            backgroundColor: 'bg-[#AEF3B9]',
        },
        sky: {
            padding : 'p-3',
            backgroundColor: 'bg-[#B3E1FE]',
        },
        purple: {
            padding : 'p-3',
            backgroundColor: 'bg-[#BFC9FF]',
        },
        gray: {
            padding : 'p-3',
            backgroundColor: 'bg-[#EEF2FB]',
        },
        pink: {
            padding : 'p-3',
            backgroundColor: 'bg-[#FFD6E4]',
        },
})
interface AnimalLinkCardProps {
    animal : string
    type : string
    color: GetVariants<typeof animalIcon>
    picture:JSX.Element;
    
}

const AnimalLinkCard = ({ color, picture, type, animal }: AnimalLinkCardProps) => {
    return (
        <div>
            <Link to={`/animaldictdetail/${animal}`}className={`${animalLinkCard.class}`}>
                <div className={animalIcon.class(color)}>{picture}</div>
                <div className="font-['700']">{type}</div>
            </Link>
        </div>
    )
}


export function AnimalDictionary() {
    return (
        <div className=" items-start justify-center mt-2">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-['700']">동물을 눌러보세요!</h1>
                <span className="text-primary-gray font-['500']">8가지의 생활유형을 볼 수 있어요 :)</span>
            </div>
            <div  className="grid grid-cols-2 grid-rows-4 gap-5 items-center justify-center mt-4">
                {ANIMAL_LIST.map((animal) => (
                    <AnimalLinkCard key={animal.animal} color={animal.color} picture={animal.picture} type={animal.type} animal={animal.animal}/>
                ))}
            </div>
            <div className="flex flex-col text-white">
                <div >dd</div>
                <div >dd</div>
                <div >dd</div>
                <div >dd</div>

            </div>
        </div>
    )
}
