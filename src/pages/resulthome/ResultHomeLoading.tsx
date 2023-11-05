import ProgressIndLinear from "../../components/common/ProgressIndLinear"
export function ResultHomeLoading() {
    return (
      <div className="">
            <div className="font-['800'] text-2xl mt-16 ">
            모글리님의
            <div>생활 유형을 분석 중이에요</div>
            </div>
            <div className="font-['600'] text-xl mt-8 ">잠시만 기다려 주세요</div>
            <div className="mt-8 w-full">
              <img src={process.env.PUBLIC_URL + '/puang1.png'} alt="puang1" className="w-full h-auto" />
          </div>
          <div className="mt-8"><ProgressIndLinear /></div>
      </div>
    )
}