import { useParams } from "react-router-dom"

type ResultAnotherPageParams = {
    nickname : string;
}
export const ResultAnother = () => {
    const { nickname } = useParams<ResultAnotherPageParams>();
    return (
        <div>
            
        </div>
    )
}