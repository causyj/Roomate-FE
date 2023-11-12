import ProgressIndLinear from "../../components/common/ProgressIndLinear"

export const Intro3 = () =>{
    return (
        <div className="">
            <div className="font-['700'] text-2xl mt-8">모글리님에게 어울리는 룸메이트를 찾고 있습니다!</div>
            <div className="font-['400'] mt-8 mb-2">잠시만 기다려주세요</div>
            <div className="mb-2">
                <img src={process.env.PUBLIC_URL + '/puang1.png'} alt="monkey" style={{width : '300px'}}/>
            </div>
            <ProgressIndLinear />
        </div>
    )
}