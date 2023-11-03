export function AnswerCard({AnsweCardText }: { AnsweCardText: string }) {
    return (
        <div>
            <div className="w-full h-24 border-2 border-stone-500 border-color-black-800 rounded-lg text-primary-bgitems-center justify-center text-center p-8 text-['700'] text-xl font-bold">{AnsweCardText}</div>
            <div className="mt-12"></div>
            <div className="w-full h-24 border-2 border-stone-500 border-color-black-800 rounded-lg text-primary-bgitems-center justify-center text-center p-5 text-['700'] text-xl font-bold">{AnsweCardText}</div>
        </div>
    )
}