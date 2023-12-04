type TitleBoxProps = {
  title: string;
  animalColor: string | undefined;
};

export function TitleBox({ title, animalColor }: TitleBoxProps) {
  return (
    <div>
      <div className={`w-full border-4 font-['700'] border-${animalColor}-500 rounded-lg flex items-center justify-center text-center  p-4 font-bold text-xl`}>
        {title}
      </div>
    </div>
  );
}
