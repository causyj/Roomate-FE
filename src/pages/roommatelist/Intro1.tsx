export const Intro1 = () => {
    return(
        <div className="flex flex-col items-center mt-16">
            <div className="text-3xl font-['700']" >축하합니다!</div>
            
                <div className="text-xl font-['300'] mt-6">룸메이트 추천을 위한</div>
                <div className="text-xl font-['300']">모든 과정이 끝났습니다</div>
           
            <div className="mt-8">
                <img src={process.env.PUBLIC_URL + '/congratulation.png'} alt="monkey" style={{width : '200px'}}/></div>
        </div>
    )
}