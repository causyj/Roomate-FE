type TitleBoxProps = {
  title: string;
  animalColor: 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'yellow' | 'rose' | 'sky';
};

export function TitleBox({ title, animalColor }: TitleBoxProps) {
    const animalIconStyles = {
        yellow: {
            color : 'border-yellow-500', 
        },
        rose: {
            color : 'border-rose-500', 
        },
        orange: {
            color : 'border-orange-500', 
        },
        green: {
            color : 'border-green-500', 
        },
        sky: {
            color : 'border-sky-500', 
        },
        purple: {
            color : 'border-purple-500', 
        },
        gray: {
            color : 'border-gray-500', 
        },
        pink: {
            color : 'border-pink-600', 
        },
    }
    const animalIconStyle = animalIconStyles[animalColor];
  return (
    <div>
      <div className={`w-full border-4 font-['700'] ${animalIconStyle.color} rounded-lg flex items-center justify-start p-4 font-bold text-xl`}>
        {title}
      </div>
    </div>
  );
}
