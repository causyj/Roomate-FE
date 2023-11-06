export function RoomateRecommend() {
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <img src={process.env.PUBLIC_URL + '/aniroomie.png'} alt="roomie" width="80px"  />
                <div className="text-2xl ml-4">
                    <span className="font-['700']">모글리</span>님의
                    <div>매칭결과입니다.</div>
                </div>
            </div>
        </div>
    )
}