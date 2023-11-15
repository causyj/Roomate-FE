export function AnswerCard({AnsweCardText }: { AnsweCardText: string }) {
    return (
        <div>
            <div className="w-72 h-20 border-2 border-stone-500 rounded-lg duration-500 hover:bg-primary-logo hover:text-white text-primary-bg  flex items-center justify-center text-center p-8 text-['900'] text-xl mb-2 font-bold">{AnsweCardText}</div>
        </div>
    )
}