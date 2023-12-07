import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export function ChatList() {
    const apply_id = "1"
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className=" max-w-[413px] w-full h-24 font-['700'] text-3xl flex bg-white justify-start fixed top-0 px-9 items-center "  style={{zIndex:200}}>
                <div className="">채팅목록</div>
            </div>
            <div className="w-full mt-[72px]">
                <Link to='/roommatelist' className="flex items-start">
                    <div className="max-w-[413px] w-full h-16 bg-gray-100 rounded-2xl">
                        <div className="flex flex-col items-center justify-start p-3">
                            <div className="text-s text-center">나와 생활유형이 맞는 룸메이트를 찾아보세요!</div>
                            <div className="flex flex-row">
                                <div className="mt-1 mr-1 font-['700'] text-m ">나와 맞는 룸메이트 보러가기 {'>'}</div>
                                <img src={process.env.PUBLIC_URL + '/roommate.png'} alt="roomie" width="35px" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col overflow-y-auto gap-4 mt-4">
                <Link to={`${apply_id}`}>
                    <div className="w-full flex flex-row">
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                            </Stack>
                        </div>
                        <div className="flex flex-col ml-4 py-0.5">
                            <div className="font-['700'] text-lg "></div>
                            <div className="font-['700'] text-xs text-primary-gray">예민한 고양이 / 혹은 마지막 채팅 내용</div>
                        </div>
                        <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2">오전 11:38</div>
                    </div>
                </Link>
                <div className="w-full flex flex-row">
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                        </Stack>
                    </div>
                    <div className="flex flex-col ml-4 py-0.5">
                        <div className="font-['700'] text-lg ">모글리님</div>
                        <div className="font-['700'] text-xs text-primary-gray">예민한 고양이 / 혹은 마지막 채팅 내용</div>
                    </div>
                    <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2">오전 11:38</div>
                </div>
                <div className="w-full flex flex-row">
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                        </Stack>
                    </div>
                    <div className="flex flex-col ml-4 py-0.5">
                        <div className="font-['700'] text-lg ">모글리님</div>
                        <div className="font-['700'] text-xs text-primary-gray">예민한 고양이 / 혹은 마지막 채팅 내용</div>
                    </div>
                    <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2">오전 11:38</div>
                </div>
                <div className="w-full flex flex-row">
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                        </Stack>
                    </div>
                    <div className="flex flex-col ml-4 py-0.5">
                        <div className="font-['700'] text-lg ">모글리님</div>
                        <div className="font-['700'] text-xs text-primary-gray">예민한 고양이 / 혹은 마지막 채팅 내용</div>
                    </div>
                    <div className="font-['700'] text-xs text-primary-gray text-xxs text-end ml-auto mr-1 mt-2">오전 11:38</div>
                </div>





            </div>
        </div>
    );
}
