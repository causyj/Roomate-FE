import ProgressIndLinear from "./common/ProgressIndLinear";
interface  LoadingProps{
    firstLine : string,
    secondLine : string,
}
export const Loading = ({  firstLine, secondLine }: LoadingProps) => {

    return (
        <div className="flex flex-col">
            <div className="font-['700'] text-2xl mt-8">{firstLine}</div>
            <div className="font-['700'] text-2xl">{secondLine}</div>
            <div className="font-['400'] mt-8 mb-2 text-xl">잠시만 기다려주세요</div>
            <div className="mb-2">
                <img src={process.env.PUBLIC_URL + '/puang1.png'} alt="monkey" style={{ width: '300px' }} />
            </div>
            <ProgressIndLinear />
        </div>
    );
};
