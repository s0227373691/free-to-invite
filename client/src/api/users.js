import { apiPostUserRegister } from './api';

export const postRegister = ({ name, email, password }) => {
    apiPostUserRegister({
        name,
        email,
        password,
    })
        .then(() => {
            alert('註冊成功!!');
        })
        .catch((err) => {
            alert('註冊失敗!!');
            console.error(err.message);
        });
};
