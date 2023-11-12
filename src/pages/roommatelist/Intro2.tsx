export const Intro2 = ()  => {
    return (
        <div className="flex flex-col items-center justify-center font-['700']">
            <div className="px-8 text-xl">더 많은 사용자의 유입을 위해, 기숙사 합격통보 날의 일주일 뒤부터 매칭을 시작합니다</div>
            <div className="mt-8 mb-4">
                <img src={process.env.PUBLIC_URL + '/calendar.png'} alt="monkey" style={{width : '200px'}}/>
            </div>
            <div>
                매칭이 시작되면 알림으로 알려드릴게요 :)
            </div>
     
        </div>
    )
}