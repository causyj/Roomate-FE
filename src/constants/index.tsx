import { AnimalType } from "../interface/AnimalType";

export const ANIMAL_DATA : Record<AnimalType['animal'],{
    type : string;
    color : "rose" | "yellow" | "orange" | "green" | "purple" | "sky" | "pink" | "gray"; 
    colorRGB : string;
    picture : JSX.Element;
    // descriptoin : string,
}> = {
    arcticFox : {
        type : '북극여우',
        color: 'rose',
        colorRGB : '#FFACA6', 
        picture :  <img src={process.env.PUBLIC_URL + '/arcticFox.png'} width={'80px'}/>,
    },
    rabbit : {
        type : '토끼',
        color: 'orange',
        colorRGB : '#FCA12F',
        picture :  <img src={process.env.PUBLIC_URL + '/rabbit.png'}width={'70px'}/>,
    },
    quokka : {
        type : '쿼카',
        color: 'yellow',
        colorRGB : '#FCF097',
        picture :  <img src={process.env.PUBLIC_URL + '/quokka.png'} width={'80px'}/>,
    },
    polarBear : {
        type : '북극곰',
        color: 'green',
        colorRGB : '#AEF3B9',
        picture :  <img src={process.env.PUBLIC_URL + '/polarBear.png'}width={'80px'}/>,
    },
    cat : {
        type : '고양이',
        color: 'purple',
        colorRGB : '#BFC9FF',
        picture :  <img src={process.env.PUBLIC_URL + '/cat.png'} width={'80px'}/>,
    },
    penguin : {
        type : '펭귄',
        color: 'sky',
        colorRGB : '#B3E1FE',
        picture :  <img src={process.env.PUBLIC_URL + '/penguin.png'} width={'90px'}/>,
    },
    dog : {
        type : '강아지',
        color: 'pink',
        colorRGB : '#FFD6E4',
        picture :  <img src={process.env.PUBLIC_URL + '/dog.png'} width={'80px'}/>,
    },
    wolf : {
        type : '늑대',
        color: 'gray',
        colorRGB : '#EEF2FB',
        picture :  <img src={process.env.PUBLIC_URL + '/wolf.png'}width={'80px'}/>,
    },


}

export const ANIMAL_LIST = Object.entries(ANIMAL_DATA).map(([key, value]) => {
    return {
        ...value,
        animal: key as string,
        color: value.color,         
        colorRGB: value.colorRGB,         
    }
})

export const getAnimalColorRGB = (animal: AnimalType['animal']): string | undefined => {
  const animalData = ANIMAL_DATA[animal];
  return animalData ? animalData.colorRGB : undefined;
};

export const getAnimalColor = (animal: AnimalType['animal']): string | undefined => {
    const animalData = ANIMAL_DATA[animal];
    return animalData ? animalData.color: undefined;
  };