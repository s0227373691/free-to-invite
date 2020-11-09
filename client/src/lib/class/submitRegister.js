import Joi from 'joi';
import { apiPostUserRegister } from '../api/api';

//TODO 前端 Register 未寫表單驗證
class SubmitRegister {
    constructor({
        name,
        email,
        password,
        setNameInputStyle,
        setEmailInputStyle,
        setPasswordInputStyle,
        // setInputBorderColorPassword2
    }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.setNameInputStyle = setNameInputStyle;
        this.setEmailInputStyle = setEmailInputStyle;
        this.setPasswordInputStyle = setPasswordInputStyle;
        // this.setInputBorderColorPassword2 = setInputBorderColorPassword2;
        this.form = { name, email, password };
        this.isAllValidate = false;
    }

    validateName() {
        const schema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
        });
        const { error } = schema.validate({ name: this.name });

        const inputStyle = !error
            ? { border: '2px solid green' }
            : { border: '2px solid red' };

        this.setNameInputStyle(inputStyle);
        const result = !error ? true : false;

        return result;
    }
    validateEmail() {
        const schema = Joi.object({
            email: Joi.string()
                .min(5)
                .max(255)
                .required()
                .email({ tlds: { allow: false } }),
        });

        const { error } = schema.validate({ email: this.email });

        const inputStyle = !error
            ? { border: '2px solid green' }
            : { border: '2px solid red' };

        this.setEmailInputStyle(inputStyle);

        const result = !error ? true : false;
        return result;
    }
    validatePassword() {
        const schema = Joi.object({
            password: Joi.string().min(5).max(255).required(),
        });

        const { error } = schema.validate({ password: this.password });
        const inputStyle = !error
            ? { border: '2px solid green' }
            : { border: '2px solid red' };

        this.setPasswordInputStyle(inputStyle);

        const result = !error ? true : false;
        return result;
    }

    validateAll() {
        const resultValidateName = this.validateName();
        const resultValidateEmail = this.validateEmail();
        const resultValidatePassword = this.validatePassword();

        // 確認所有 <input /> border為綠色
        const checkInputCollection = [
            {
                resultValidate: resultValidateName,
                errorMessage: '請檢查使用者名稱填寫是否正確',
            },
            {
                resultValidate: resultValidateEmail,
                errorMessage: '請檢查電子信箱填寫是否正確',
            },
            {
                resultValidate: resultValidatePassword,
                errorMessage: '請檢查密碼填寫是否正確',
            },
            // {
            //     resultValidate: password2InputStyle,
            //     errorMessage: '密碼與確認密碼填寫不一致',
            // },
        ];

        for (let i = 0, len = checkInputCollection.length; i < len; i++) {
            if (checkInputCollection[i].resultValidate) continue;

            const errorMessage = checkInputCollection[i].errorMessage;
            alert(errorMessage);
            return;
        }

        // const checkValidate = [];
        // checkValidate.push(validateName);
        // checkValidate.push(validateEmail);
        // checkValidate.push(validatePassword);

        // const result = checkValidate.every((item) => item === true);
        // if (!result) return alert('驗證失敗');
        this.isAllValidate = true;
        return this;
    }

    postToServer() {
        if (this.isAllValidate === false) return;
        apiPostUserRegister(this.form)
            .then(() => {
                alert('註冊成功!!');
            })
            .catch((err) => {
                alert('註冊失敗!!');
                console.error(err.message);
            });
    }
}

export default SubmitRegister;
