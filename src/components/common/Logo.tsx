export function Logo() {
    return (
        <div className="flex flex-col items-center justify-center mt-4">
                <img src={process.env.PUBLIC_URL + '/logo.png'}alt="logo"style={{width : '50%', position:'relative' }}/>
        </div>
    )
}