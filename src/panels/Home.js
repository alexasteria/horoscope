import React, {useState, useEffect} from 'react';
import Horoscope from "./components/horoscope";
import User from "./components/user";
import {Panel, PanelHeader, Placeholder} from "@vkontakte/vkui";

const Home = ({id, fetchedUser}) => {
    const [zodiac, setZodiac] = useState(null);
    let zodiacArr = [
        [1, '', '', ''],
        [19, 'Козерог (22.12–19.1)', 'Земля', 'Сатурн', 'capricorn'],
        [18, 'Водолей (20.1–18.2)', 'Воздух', 'Сатурн, Уран', 'aquarius'],
        [20, 'Рыбы (19.2–20.3)', 'Вода', 'Юпитер, Нептун', 'pisces'],
        [19, 'Овен (21.3–19.4)', 'Огонь', 'Марс', 'aries'],
        [20, 'Телец (20.4–20.5)', 'Земля', 'Венера', 'taurus'],
        [21, 'Близнецы (21.5–21.6)', 'Воздух', 'Меркурий', 'gemini'],
        [22, 'Рак (22.6–22.7)', 'Вода', 'Луна', 'cancer'],
        [22, 'Лев (23.7–22.8)', 'Огонь', 'Солнце', 'leo'],
        [22, 'Дева (23.8–22.9)', 'Земля', 'Меркурий', 'virgo'],
        [22, 'Весы (23.9–22.10)', 'Воздух', 'Венера', 'libra'],
        [22, 'Скорпион (23.10–22.11)', 'Вода', 'Марс, Плутон', 'scorpio'],
        [21, 'Стрелец (23.11–21.12)', 'Огонь', 'Юпитер', 'sagittarius']
    ];
    useEffect(() => {
        if (fetchedUser !== null) {
            const date = fetchedUser.bdate.split('.')
            let m = date[1];
            let d = date[0];
            if (d<1||d>31) {
                m=0;
                d=0;
            }
            if (m<1||m>12) {
                m=0;
                d=0;
            }
            if (d>zodiacArr[m][0]) m+=1;
            if (m>12) m=1;
            if (zodiacArr[m][1]!=='') {
                setZodiac({title: zodiacArr[m][1]+', '+zodiacArr[m][2]+', '+zodiacArr[m][3], name: zodiacArr[m][4]});
            } else {
                console.log('error')
            }
        }
    }, [fetchedUser]);
    return zodiac !== null ?
        <Panel id={id}>
            <PanelHeader>Гороскопус</PanelHeader>
            <User user={fetchedUser} zodiac={zodiac}/>
            <Horoscope zodiac={zodiac}/>
        </Panel> :
        <Placeholder
            stretched
            header={'Ошибочка вышла'}
        >
            Судя по всему нет данных о дате рождения
        </Placeholder>

};

export default Home;