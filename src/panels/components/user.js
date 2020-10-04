import React from 'react';
import {RichCell, Avatar} from "@vkontakte/vkui";

const User = ({user, zodiac}) => {
    return user !== null && zodiac !== null ?
        <RichCell
            disabled
            before={<Avatar size={72} src={user.photo_200 || null} />}
            caption={"Дата рождения - "+user.bdate}
            bottom={zodiac.title}
        >
            {user.first_name + " " + user.last_name}
        </RichCell> : null
};

export default User;