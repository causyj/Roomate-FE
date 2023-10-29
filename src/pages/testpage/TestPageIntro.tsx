import { Button } from "../../components/common"
const GoToTest = () => {
    return(
        <div className="flex flex-col p-12 h-full">
            <div className="font-['700'] text-3xl mt-12 mb-6">
                <div>어서오세요!</div>
                <div>처음이신가요?</div>
            </div>
            <div className="flex flex-wrap text-l">
                <div>나와 맞는 룸메이트를 찾기 위해 먼저</div>
                <div className="font-['600']">나의 생활유형</div>
                <div>을 알아야해요!</div>
            </div>
            <div className='flex justify-end items-end mt-56 mb-4' style={{position:'relative'}}>
                <img src={process.env.PUBLIC_URL + '/cloud.png'} alt="TalkBaloon" style={{width : '200px', position:'absolute' }}/>
                <div className="flex flex-col items-center mb-24 pr-8 font-['700'] text-xl" style={{position : 'absolute'}}>
                    <div className="mb-2">루미랑</div>
                    <div >테스트 하러갈래?</div>
                </div>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/roomie.png'} alt="Roomie" style={{width : '180px'}} />
            </div>
            <div className="flex items-center justify-center mt-8"><Button/></div>
        </div>
    )
}
export default function TestPageIntro() {
    return (
        <div>
            <GoToTest/>
        </div>
    )
}


// <div className="flex flex-col p-12 h-full">
// {/* 이전 내용은 생략 */}

// <div className="flex justify-center mt-auto mb-4">
//     <Button />
// </div>
// </div>