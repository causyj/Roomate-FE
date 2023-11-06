export const GoToGroup = () => {
    return (
        <div className="w-full h-20 bg-gray-100 rounded-3xl">
           
            <div className="flex flex-col justify-start p-4">
                    <div className="text-xs text-center">비슷한 생활유형의 사람들과 모임을 가져봐요!</div>
                    <div className="flex flex-row">
                        <div className="mt-1 ml-4 mr-6 font-['700'] text-lg">기숙사 모임 보러가기 {'>'}</div>
                        <img src={process.env.PUBLIC_URL + '/group.png'} alt="roomie" width="35px"  />
                    </div>
           
           </div>
        </div>
    )
}