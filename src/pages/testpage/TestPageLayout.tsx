import { AnswerCard } from "./components/AnswerCard";
export function TestPageLayout() {
    return (
        <div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '150px'}}/>
            </div>
            <div className="font-['500'] mt-4 text-center">해당하는 대답을 선택해 주세요!</div>
            <div className="font-['600'] text-3xl mt-8 text-center">Q.01</div>
            <div className="font-['600'] text-xl text-center mt-4 mb-8">전 날, 알람을 여러 개 맞추고 잔 당신, 다음 날 아침 상황은?</div>
            <AnswerCard AnsweCardText="한 번에 바로 일어난다."/>
            <AnswerCard AnsweCardText="나도 모르겠다 이말이야. 한 번에 바로 일어난다."/>
            <AnswerCard AnsweCardText="한 번에 바로 일어난다."/>
            <AnswerCard AnsweCardText="나도 모르겠다 이말이야. 한 번에 바로 일어난다."/>
            <AnswerCard AnsweCardText="한 번에 바로 일어난다."/>
            <AnswerCard AnsweCardText="나도 모르겠다 이말이야. 한 번에 바로 일어난다."/>
            
           
            <div className="font-['700']  mb-12 bg-white flex items-center justify-around h-[70px]"style={{ position: 'fixed', bottom: 0, left: 0, right: 0,width: '100%' }}>
                <div className="text-white">dfsdf</div>
                <div className="text-3xl text-center">1/22</div> 
                <div className="flex flex-row">
                    <div className="text-xl text-primary-logo">next {'>'}</div>
                </div>
            </div>
        </div>
        
    )
}