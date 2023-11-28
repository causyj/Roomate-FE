import { LandingPage } from "../components/LandingPage"
import { Loading } from "../components/Loading"
import { RoommateOption } from "../pages/roommatelist/RoommateOption"
export function ForPractice() {
    return (
        <div className="min-w-[420px] min-h-[1000px] max-h-screen h-screen  bg-primary-logo flex items-center justify-center">
        {/* <div className='flex flex-row mb-12'> 
            <div className="font-['700'] text-2xl text-white">반가워요</div>
            <WavingHandIcon sx={{color : '#FFE928', marginTop:'5px'}}/>
        </div>  */}
        <img src={process.env.PUBLIC_URL + '/landing.png'} alt="logo" style={{width : '45%'}}/>
      </div>
    )
}