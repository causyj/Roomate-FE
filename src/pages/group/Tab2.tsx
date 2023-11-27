import { GroupListCard } from "./components/GroupListCard"
import CreateIcon from '@mui/icons-material/Create';
export const Tab2 = () => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col font-['700']">
                    <div className="text-primary-bg mt-4 text-lg">이런 모임 어때요?</div>
                    <div className="text-primary-gray text-ms">학교 안에서 모임을 만들어봐요!</div>
                </div>
                <div className="flex flex-col mt-4 items-center">
                    <div className="border-2 border-black rounded-full w-[35px] h-[35px] flex items-center">
                        <CreateIcon sx={{width : '32px', height:'25px'}}/>
                    </div>
                       
                        <div className="font-['700'] text-primary-gray text-xxs">모임 만들기</div>
                </div>

            </div>
            <div className="mt-4">
                <GroupListCard title="러닝 크루" day="화요일, 목요일" time='23:00 ~ 23:00' img='running' />
            </div>
        </div>
    )
}