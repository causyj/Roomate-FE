import { AnimalType } from "../interface/AnimalType";
export const ANIMAL_DATA : Record<AnimalType['animal'],{
    type : string
    color : 'rose' | 'yellow' | 'orange' | 'green' | 'sky' | 'violet' | 'gray' | 'fuchsia' 
    picture : JSX.Element;
    descriptoin : string,
    
}> = {
    cat : {
        type : '고양이형',
        color : 'rose',
        picture :  <img src={process.env.PUBLIC_URL + '/cat.png'}alt="cat"/>,
        descriptoin : 'sdf'
    },
    monkey : {
        type : '원숭이',
        color : 'orange',
        picture :  <img src={process.env.PUBLIC_URL + '/littlemonkey.png'}alt="cat"/>,
        descriptoin : 'sdf'
    },
    owl : {
        type : '부엉이형',
        color : 'yellow',
        picture :  <img src={process.env.PUBLIC_URL + '/owl.png'}alt="owl"/>,
        descriptoin : 'sdf'
    },
    turtle : {
        type : '거북이형',
        color : 'green',
        picture :  <img src={process.env.PUBLIC_URL + '/turtle.png'}alt="owl"/>,
        descriptoin : 'sdf'
    },
    koala : {
        type : '코알라형',
        color : 'sky',
        picture :  <img src={process.env.PUBLIC_URL + '/koala.png'}alt="owl"/>,
        descriptoin : 'sdf'
    },
    wolf : {
        type : '여우형',
        color : 'fuchsia',
        picture :  <img src={process.env.PUBLIC_URL + '/wolf.png'}alt="owl"/>,
        descriptoin : 'sdf'
    },
    a1 : {
        type : '코알라형',
        color : 'sky',
        picture :  <img src={process.env.PUBLIC_URL + '/koala.png'}alt="owl"/>,
        descriptoin : 'sdf'
    },
    a2 : {
        type : '여우형',
        color : 'fuchsia',
        picture :  <img src={process.env.PUBLIC_URL + '/wolf.png'}alt="owl"/>,
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