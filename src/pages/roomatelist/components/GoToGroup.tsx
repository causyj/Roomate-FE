export const GoToGroup = () => {
    return (
        <div className="w-full h-16 bg-gray-100 rounded-2xl mt-2">
            <div className="flex flex-col items-center justify-start p-3">
                    <div className="text-xs text-center">비슷한 생활유형의 사람들과 모임을 가져봐요 !</div>
                    <div className="flex flex-row">
                        <div className="mt-1 mr-9 font-['700'] text-m ">기숙사 모임 보러가기 {'>'}</div>
                        <img src={process.env.PUBLIC_URL + '/group.png'} alt="roomie" width="35px"  />
                    </div>
           </div>
        </div>
    )
}