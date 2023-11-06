import { Link } from "react-router-dom"
import { GoToGroup } from "./components/GoToGroup"

export const Tab1 = () => {
    return (
        <div>
            <GoToGroup />
            <div className="flex flex-row">
                <div className="font-['700'] text-2xl mt-4">📍 추천 룸메이트</div>
            </div>
        </div>
    )
}