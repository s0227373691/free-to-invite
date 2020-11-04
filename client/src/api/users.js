import { apiUserRegister } from './api';

export const postRegister = ({ name, email, password }) => {
    apiUserRegister({
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
