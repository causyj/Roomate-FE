const GoToTest = () => {
    return(
        <div className="flex flex-col p-12">
            <div className="font-['700'] text-3xl mt-6 mb-4">
                <div>어서오세요!</div>
                <div>처음이신가요?</div>
            </div>
            <div className="flex flex-wrap">
                <div>나와 맞는 룸메이트를 찾기 위해 먼저</div>
                <div className="font-['600']">나의 생활유형</div>
                <div>을 알아야해요!</div>
            </div>
            
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
