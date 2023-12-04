const rhythm = '아침형';
const smoke = '비흡연자';
const home = '집순이';
const hotCold = '추위에 약함';
const rhythmIcon = rhythm === '아침형' ? '/am.png' : '/pm.png';
const smokeIcon = smoke === '비흡연자' ? '/nosmoking.png' : '/smoking.png';
const homeIcon = home === '집순이' ? '/homelover.png' : '/outside.png';
const hotColdIcon = hotCold === '추위에 약함' ? '/cold.png' : '/hot.png';

export const TypeEmoji = () => {
    return (
        <div>
            <div className="flex flex-row p-2 text-center items-center justify-center gap-2">
                <div className="flex flex-col text-center mr-2  items-center justify-center">
                    <img src={process.env.PUBLIC_URL + rhythmIcon} alt={rhythm} width={'70px'}  />
                    <div className="font-['700'] text-primary-gray">{rhythm}</div>
                </div>
                <div className="flex flex-col text-center contain mr-2  items-center justify-center">
                    <img src={process.env.PUBLIC_URL + smokeIcon} alt={smoke} width={'55px'} />
                    <div className="font-['700'] text-primary-gray">{smoke}</div>
                </div>
                <div className="flex flex-col text-center contain  items-center justify-center">
                    <img src={process.env.PUBLIC_URL + homeIcon} alt={home} width={'55px'}  />
                    <div className="font-['700'] text-primary-gray">{home}</div>
                </div>
                <div className="flex flex-col contain text-center justify-center  items-center">
                    <img src={process.env.PUBLIC_URL + hotColdIcon} alt={hotCold} width={'55px'}  />
                    <div className="font-['700'] text-primary-gray">{hotCold}</div>
                </div>
            </div>
        </div>
    )
}