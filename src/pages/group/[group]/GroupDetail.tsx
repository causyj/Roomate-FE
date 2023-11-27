import {  useParams } from 'react-router-dom'
type GroupDetailPageParams = {
    group: string;
}
export const GroupDetail = () => {
    const { group } = useParams<GroupDetailPageParams>()
    return (
        <div>
           {group}
        </div>
    )
}