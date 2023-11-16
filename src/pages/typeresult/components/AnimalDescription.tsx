export const AnimalDescription = ({type} : {type:string}) =>{
    console.log(type)
    return (
        <div>
            <div className="mt-6 flex justify-center ">
            <img src={process.env.PUBLIC_URL + `/${type}.png`} alt={`${type}`} style={{width : '150px'}}/>
            </div>
        <div className=" font-['600'] p-8 text-l text-primary-gray">
        꼼꼼하고 규칙적인 아침형인간으로, 룸메이트와 친밀한 관계를 얻길 원하고 학습에 집중하는 모습을 보이는 성향이 있다
        </div>
        </div>
    )
}