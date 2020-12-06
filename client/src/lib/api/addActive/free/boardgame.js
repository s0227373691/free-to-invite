import { apiPostActiveFreeBoardGame } from '../../api.js';

export const postActiveFreeBoardGame = ({
    minorType,
    date,
    people,
    precautions,
    boardgameType,
    title,
    content,
}) => {
    console.log(date, people, precautions, boardgameType, title, content);
    return apiPostActiveFreeBoardGame({
        minorType,
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
