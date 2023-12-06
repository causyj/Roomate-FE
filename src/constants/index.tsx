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

export const getAnimalColor = (animal: AnimalType['animal']): AnimalType['color'] => {
    const animalData = ANIMAL_DATA[animal];
    return animalData ? animalData.color: undefined;
  };




  export const TEST_DATA : Record<string,{
    question : string;
    answer : string[],
}> = {

    //[기상&취침]
    1 : {
        question : '주로 몇시에 일어나?',
        answer : [
            '오전 5시 이전',
            '오전 6시~7시',
            '오전 8시~9시',
            '오전 10시~11시',
            '낮 12시 이후'
        ],
    },
    2 : {
        question : '그럼 주로 몇시에 자?',
        answer : [
            '밤 11시 이전',
            '밤 12시',
            '새벽 1시',
            '새벽 2시',
            '새벽 3시 이후'
        ],
        
    },
    //if) 취침 시간이 자정 이전이면
    3 : {
        question : '룸메가 늦게 자고 늦게 일어난다면?',
        answer : [
            '크게 상관없어',
            '조금 불편할 것 같아',
            '아 정말 안 맞아;;',
        ],
    },
    //else)
    4 : {
        question : '룸메가 일찍 자고 일찍 일어난다면?',
        answer : [
            '크게 상관없어',
            '조금 불편할 것 같아',
            '아 정말 안 맞아;;',
        ],
    },
    
    //[청결]
    5 : {
        question : '방은 얼마나 자주 청소해?',
        answer : [
            '청소? 그런건 사치야…',
            '적당히 쌓이면 버려.',
            '쓰레기는 용납 못해!',
        ],
    },
    // 2,3번이면: 
    6 : {
        question : '룸메가 청소를 안 한다면?',
        answer : [
            '내가 하면 되지.',
            '아… 그건 좀;;',
            '윽.. 더러워서 어떻게 같이 살아?',
        ],
    },
    //.else) 청소 횟수가 3번 미만이면
    7 : {
        question : '룸메가 매일 청소를 한다면?',
        answer : [
            '오히려 좋아',
            '조금 눈치 보여',
            '결벽증인가?',
        ],
    },
    8 : {
        question : '음식을 주로 방에서 먹는 편이야?',
        answer : [
            '응. 자주.',
            '음… 가끔?',
            '아니. 별로.',
        ],
    },
    //아니라면 
    9 : {
        question : '룸메가 방에서 음식을 자주 먹는다면?',
        answer : [
            '먹고 잘만 치우면 상관없어.',
            '그건 좀 그래...',
            '음식은 휴게실에서만 먹었으면 좋겠어.',
        ],
    },
     //자주 먹으면 
     10 : {
        question : '그러면 룸메도 자주 먹어도 괜찮겠네?',
        answer : [
            '응! 상관없어.',
            '서로 잘 치우면 괜찮지 않을까? (2)',
            '방에서는 나만 음식을 먹었으면 좋겠어! (3)',
        ],
    },

    11 : {
        question : '흡연자야?',
        answer : [
            '응!',
            '아니!',
        ],
    },

    //공부
    12 : {
        question : '공부는 방에서 하는 편이야?',
        answer : [
            '응. 방에서 하는 편이야.',
            '음… 그때그때 달라.',
            '주로 도서관이나 열람실에서 해.',
        ],
    },
    //.if) 주로 방에서 하지 않는다면: 
    13 : {
        question : '룸메가 기숙사에서 항상 공부하고 있다면??',
        answer : [
            '공부 열심히 하네. 파이팅 ~',
            '방에서 공부가 잘 되나?',
            '아 편하게 쉬고 싶은데;;',
        ],
    },
    //.else) 주로 방에서 한다면
    14 : {
        question : '룸메가 기숙사를 공부하는 공간이  휴식 공간으로만 여긴다면?',
        answer : [
            '내가 공부하는데 눈치 볼 이유가 없지!',
            '쉬는데 좀 불편하려나..?',
            '나도 나가서 공부해야 되나..?',
        ],
    },

    15 : {
        question : '방에서 노트북 많이 사용 해?',
        answer : [
            '나는 매일 써!',
            '필요할 때만 사용해',
            '아니~ 거의 안 써.',
        ],
    },
    16 : {
        question : '룸메이트가 방에서 타자소리나 마우스 소리를 낸다면?',
        answer : [
            '예민하지 않은 편이라 괜찮아',
            '무소음 기기 쓰면 괜찮아',
            '부숴버릴까?',
        ],
    },
    17 : {
        question : '기상할 때 알람을 잘 듣는 편이야?',
        answer : [
            '룸메가 내 알람에 먼저 깨. ',
            '두세번 정도 울려야 일어나. ',
            '한 번에 바로 일어나.',
        ],
    },
    18 : {
        question : '룸메가 알람을 잘 못 듣고 계속 자고 있다면?',
        answer : [
            '내가 깨워주지 뭐',
            '쟤 언제 일어나지?',
            '폰 부숴버릴까?',
        ],
    },
    19 : {
        question : '늦은 시간까지 공부를 해야한다면?',
        answer : [
            '방에서 노트북이나 스탠드를 사용해',
            '휴게실이나 열람실에 가서 공부해. ',
        ],
    },
    20 : {
        question : '자려고 하는데 룸메가 노트북이나 스탠드를 사용해서 공부한다면?',
        answer : [
            '오키 열공해~',
            '시험기간이니까 참을게',
            '잠 좀 자자!!!!',
        ],
    },
    21 : {
        question : '이갈이나 코골이 같은 잠버릇 있어?',
        answer : [
            '심해',
            '조금 있어',
            '없어',
        ],
    },
    22 : {
        question : '룸메의 잠버릇에 예민한 편이야?',
        answer : [
            '잠들면 웬만한 소리에는 안 깨',
            '너무 심하지만 않으면 참을 수 있어',
            '그것 때문에 잠을 못 자겠어!!',
        ],
    },
    23 : {
        question : '룸메이트와 친하게 지내고 싶어?',
        answer : [
            '응!',
            '아니',
        ],
    },
    24 : {
        question : '방에 자주 있는 편이야?',
        answer : [
            '나는 집순이/집돌이야',
            '가끔 외출하거나 외박해.',
            '방은 잠만 자는 곳이지!',
        ],
    },
    25 : {
        question : '룸메가 자주 외박하다면?',
        answer : [
            '1인실 오히려 좋아!',
            '딱히 신경 안 써',
            '좀 외로워... ',
        ],
    }, 
    26 : {
        question : '마지막 질문이야! 더위와 추위를 많이 타?',
        answer : [
            '둘 다 안 타',
            '추위를 많이 타',
            '둘 다 많이 타',
            '더위를 많이 타',
        
        ],
    },
    27 : {
        question : '보너스 질문! 여름이 좋아, 겨울이 좋아?',
        answer : [
            '여름이 좋아!',
            '겨울이 좋아!',
           
        ],
    },
}

export const TEST_LIST = Object.entries(TEST_DATA).map(([key, value]) => {
    return {
        ...value,
        question : value.question,
         answer : value.answer,
             
    }
})


