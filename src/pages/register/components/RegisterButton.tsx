export const RegisterButton = ({text} : {text : string}) =>{
    return(
        <div className="w-20 h-[50px] bg-primary-logo text-white rounded-xl flex justify-center">
            <button>{text}</button>

        </div>
    )
}