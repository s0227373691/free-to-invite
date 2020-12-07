import { apiPostActiveFreeBoardGame } from '../../api.js';

export const postActiveFreeBoardGame = ({
    activeType,
    date,
    people,
    precautions,
    boardgameType,
    title,
    content,
}) => {
    console.log(date, people, precautions, boardgameType, title, content);
    return apiPostActiveFreeBoardGame({
        activeType,
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
