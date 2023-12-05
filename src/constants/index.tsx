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




  export const TEST_DATA : Record<string,{
    question : string;
    answer : string[],
}> = {

    //[기상&취침]
    1 : {
        question : '주로 몇시에 자?',
        answer : [
            '밤 11시 이전',
            '밤 12시',
            '새벽 1시',
            '새벽 2시',
            '새벽 3시 이후'
        ],
    },
    2 : {
        question : '그럼 주로 몇시에 일어나?',
        answer : [
            '오전 5시 이전',
            '오전 6시~7시',
            '오전 8시~9시',
            '오전 10시~11시',
            '낮 12시 이후'
        ],
    },
    //if) 취침 시간이 자정 이전이면
    3 : {
        question : '룸메가 늦게 자고 늦게 일어난다면?',
        answer : [
            '크게 상관없어',
            '조금 힘들 것 같아',
            '아 정말 안 맞아;;',
        ],
    },
    //else)
    4 : {
        question : '룸메가 일찍 자고 일찍 일어나는 사람이라면?',
        answer : [
            '크게 상관없어',
            '조금 힘들 것 같아',
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
            '아…….그건 좀; (깊은 한숨)',
            '윽.. 더러워서 어떻게 같이 살아?',
        ],
    },
    //.else) 청소 횟수가 3번 미만이면
    7 : {
        question : '룸메가 매일 청소를 한다면?',
        answer : [
            '오히려 좋아',
            '좀 눈치보여',
            '결벽증인가?',
        ],
    },
    8 : {
        question : '음식을 주로 방에서 섭취하는 편이야?',
        answer : [
            '응. 자주.',
            '음… 가끔?',
            '아니. 별로.',
        ],
    },
    //아니라면 
    9 : {
        question : '룸메가 방에서 자주 음식을 먹는다면?',
        answer : [
            '룸메가 방에서 자주 음식을 먹는다면?.',
            '음… 가끔?',
            '아니. 별로.',
        ],
    },
     //자주 먹으면 
     10 : {
        question : '룸메가 방에서 자주 음식을 먹는다면?',
        answer : [
            '응! 상관없어.',
            '응 ! 같이 먹으면 좋을 것 같아',
            '아니, 방에서 나만 먹었으면 좋겠어',
        ],
    },

    11 : {
        question : '흡연자야?',
        answer : [
            '응! 아니',
            '아니',
            '아니, 방에서 나만 먹었으면 좋겠어',
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
        question : '룸메가 방에서 공부 한다면?',
        answer : [
            '공부 열심히 하네 파이팅 ~',
            '호실에서 공부 잘 되나?',
            '아 쉬고 싶은데,,,',
        ],
    },
    //.else) 주로 방에서 한다면
    14 : {
        question : '만약 룸메가 방에서는 쉬기만 해. 그럼 눈치보여?',
        answer : [
            '아니? 눈치를 왜 봐?',
            '쉬는데 불편하려나..?',
            '나도 나가서 공부해야 되나 ㅜㅜ?',
        ],
    },

    15 : {
        question : '방에서 노트북 많이 사용 해?',
        answer : [
            '맨날 써',
            '필요할 때만 써',
            '아니~',
        ],
    },
    16 : {
        question : '룸메이트가 방에서 타자소리나 마우스 소리를 낸다면?',
        answer : [
            '예민하지 않은 편이라 괜찮아',
            '무소음 기기 쓰면 괜찮아',
            '키보드 부숴버려도 돼?',
        ],
    },
    17 : {
        question : '전 날 알람을 여러 개 맞추고 잔 당신, 다음날 아침 상황은?',
        answer : [
            '한번에 바로 일어난다.',
            '두 세번 만에 일어난다.',
            '룸메가 내 알람에 깰때까지 못 일어난다',
        ],
    },
    18 : {
        question : '룸메이트가 알람을 잘 못듣는 사람이면 어때?',
        answer : [
            '내가 깨워주지 뭐',
            '내가 깨워주지 뭐',
            '폰 부숴버려도 돼?',
        ],
    },
    19 : {
        question : '늦은 시간까지 공부해야 한다면 …',
        answer : [
            '노트북이나 스탠드 사용',
            '휴게실이나 열람실에서 공부',
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
        question : '자려고 하는데 룸메가 노트북이나 스탠드를 사용해서 공부한다면?',
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
            '그것 때문에 잠을 못 자!!!',
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
            '가끔 외출/외박해',
            '방은 잠만 자는 곳이지',
        ],
    },
    25 : {
        question : '룸메가 자주 외박하면 어떨 것 같아?',
        answer : [
            '외로워….',
            '신경 안 써',
            '오예! 1인실 오히려 좋아',
        ],
    }, 
    26 : {
        question : '마지막 질문이야! 더위와 추위를 많이 타?',
        answer : [
            '더위 많이 타',
            '추위 많이 타',
            '둘 다 많이 타',
            '둘 다 안 타'
        ],
    },
    27 : {
        question : '보너스 질문! 여름을 좋아해 겨울을 좋아해?',
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


