
import { RoommateOption } from "../pages/roommatelist/RoommateOption"
export function ForPractice() {
    return (
        <div className="min-w-[420px] min-h-[1000px] max-h-screen h-screen  bg-primary-logo flex items-center justify-center">
             <img src={process.env.PUBLIC_URL + '/landing.png'} alt="logo" style={{width : '45%'}}/>
         </div>
    )
}