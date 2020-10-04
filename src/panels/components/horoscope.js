import React, { useState, useEffect } from 'react';
import {Button, Placeholder} from "@vkontakte/vkui";
import Icon24ShareOutline from "@vkontakte/icons/dist/24/share_outline";
import Icon24StoryOutline from "@vkontakte/icons/dist/24/story_outline";
const images = [
    {label: 'aries', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172597.png'},
    {label: 'taurus', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172432.png'},
    {label: 'gemini', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172433.png'},
    {label: 'cancer', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172427.png'},
    {label: 'leo', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172428.png'},
    {label: 'virgo', img: 'https://24tv.ua/resources/photos/news/720x540_DIR/202005/1351979_14172434.png'},
    {label: 'libra', img: 'https://24tv.ua/resources/photos/news/720x522_DIR/202005/1351979_14172429.png'},
    {label: 'scorpio', img: 'https://24tv.ua/resources/photos/news/720x553_DIR/202005/1351979_14172435.png'},
    {label: 'sagittarius', img: 'https://24tv.ua/resources/photos/news/720x538_DIR/202005/1351979_14172437.png'},
    {label: 'capricorn', img: 'https://24tv.ua/resources/photos/news/720x574_DIR/202005/1351979_14172436.png'},
    {label: 'aquarius', img: 'https://24tv.ua/resources/photos/news/720x520_DIR/202005/1351979_14172430.png'},
    {label: 'pisces', img: 'https://24tv.ua/resources/photos/news/720x538_DIR/202005/1351979_14172431.png'}
];


const Horoscope = ({zodiac}) => {
    const [hososcopeArr, setHoroscopeArr] = useState(null);
    useEffect(()=>{
        fetch('https://mysterious-garden-57052.herokuapp.com/horoscope/sex')
            .then(res=>res.json())
            .then(res=>{
                setHoroscopeArr(res)
            })
    }, []);
    return hososcopeArr !== null && zodiac !== null ?
        <Placeholder
            stretched
            icon={<img height={100} width={130} src={images.find(item=>item.label === zodiac.name).img}/>}
            header={hososcopeArr.sign_teaser[0].sign_name + " - " + hososcopeArr.source}
            action={
                <div style={{display: 'flex'}}>
                    <Button before={<Icon24ShareOutline />} mode={'outline'} stretched style={{marginRight: 8}}>На стену</Button>
                    <Button before={<Icon24StoryOutline />} mode={'outline'} stretched>В историю</Button>
                </div>
            }
        >
            {hososcopeArr.sign_teaser.find(item=>item.sign === zodiac.name).text}
        </Placeholder> :
    null
};

export default Horoscope;