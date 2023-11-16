export const AnimalDescription = ({type} : {type:string}) =>{
    console.log(type)
    return (
        <div>
            <div className="mt-6 flex justify-center ">
            <img src={process.env.PUBLIC_URL + `/${type}.png`} alt={`${type}`} style={{width : '150px'}}/>
            </div>
        <div className=" font-['600'] p-8 text-l text-primary-gray">
         상쾌한 아침을 맞이하는 아침형 인간으로, 혼자만의 시간을 중요하게 생각하고 겨울보단 여름을 좋아하는 성향이 있다.
        </div>
        </div>
    )
}