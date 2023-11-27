import { Link } from "react-router-dom"
import { GroupCard } from "./components/GroupCard"
import { GroupListCard } from "./components/GroupListCard"

export const Tab1 = () => {
    return (
        <div className="flex flex-col justift-center">
            <div className="font-['700'] text-xl mt-6">모글리님께 추천드려요!</div>
            <div className="flex flex-row w-[300px] overflow-scroll overflow-x-auto p-2 gap-2">
                <Link to={`/group/${"기상 스터디"}`}>
                    <GroupCard title="기상스터디" tag="아침형" img="morning" color='pink'/>
                    </Link>
                <GroupCard title="기상 스터디" tag="아침형" img="morning" color='pink'/>
            </div>
            <div className="font-['700'] text-xl mt-6">모임목록</div>
            <div className="flex flex-col w-full">
            <GroupListCard title="러닝 크루" day="화요일, 목요일" time='23:00 ~ 23:00' img='running' />
            </div>
            
        </div>
    )
}