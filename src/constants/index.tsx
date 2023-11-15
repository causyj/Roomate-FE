import { AnimalType } from "../interface/AnimalType";
export const ANIMAL_DATA : Record<AnimalType['animal'],{
    type : string
    color : 'rose' | 'yellow' | 'orange' | 'green' | 'purple' | 'sky' | 'pink' | 'gray' 
    picture : JSX.Element;
    descriptoin : string,
}> = {
    PolarFox : {
        type : '북극여우',
        color : 'rose',
        picture :  <img src={process.env.PUBLIC_URL + '/PolarFox.png'} width={'80px'}/>,
        descriptoin : 'sdf'
    },
    Rabbit : {
        type : '토끼',
        color : 'orange',
        picture :  <img src={process.env.PUBLIC_URL + '/Rabbit.png'}width={'70px'}/>,
        descriptoin : 'sdf'
    },
    Quokka : {
        type : '쿼카',
        color : 'yellow',
        picture :  <img src={process.env.PUBLIC_URL + '/Quokka.png'} width={'80px'}/>,
        descriptoin : 'sdf'
    },
    PolarBear : {
        type : '북극곰',
        color : 'green',
        picture :  <img src={process.env.PUBLIC_URL + '/PolarBear.png'}width={'80px'}/>,
        descriptoin : 'sdf'
    },
    Cat : {
        type : '고양이',
        color : 'purple',
        picture :  <img src={process.env.PUBLIC_URL + '/Cat.png'} width={'80px'}/>,
        descriptoin : 'sdf'
    },
    Penguin : {
        type : '펭귄',
        color : 'sky',
        picture :  <img src={process.env.PUBLIC_URL + '/Penguin.png'} width={'90px'}/>,
        descriptoin : 'sdf'
    },
    Puppy : {
        type : '강아지',
        color : 'pink',
        picture :  <img src={process.env.PUBLIC_URL + '/Puppy.png'} width={'80px'}/>,
        descriptoin : 'sdf'
    },
    Wolf : {
        type : '늑대',
        color : 'gray',
        picture :  <img src={process.env.PUBLIC_URL + '/Wolf.png'}width={'80px'}/>,
        descriptoin : 'sdf'
    },


}

export const ANIMAL_LIST = Object.entries(ANIMAL_DATA).map(([key, value]) => {
    return {
        ...value,
        animal: key as string,
        color: value.color,         
    }
})