export function TitleBox({title }: { title: string }) {
    return (
        <div>
            <div className="w-full border-4 border-primary-orange rounded-lg flex items-center justify-start p-4 font-['700'] text-xl ">
                {title}
            </div>
        </div>
    )
    }