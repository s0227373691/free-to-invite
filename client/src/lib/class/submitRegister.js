import Joi from 'joi';
import { apiPostUserRegister } from '../api/api';

//TODO 前端 Register 未寫表單驗證
class SubmitRegister {
    constructor(inputValue) {
        this.inputValue = inputValue;
        // this.name = name;
        // this.email = email;
        // this.password = password;
        // this.password2 = password2;
        // this.isValidate = false;
    }

    validateName() {
        const schema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
        });

        const { error } = schema.validate({ name: this.inputValue });
        const resultValidate = !error ? true : false;
        return resultValidate;
    }
    validateEmail() {
        const schema = Joi.object({
            email: Joi.string()
                .min(5)
                .max(255)
                .required()
                .email({ tlds: { allow: false } }),
        });

        const { error } = schema.validate({ email: this.inputValue });
        const resultValidate = !error ? true : false;
        return resultValidate;
    }
    validatePassword() {
        const schema = Joi.object({
            password: Joi.string().min(5).max(255).required(),
        });

        const { error } = schema.validate({ password: this.inputValue });
        const resultValidate = !error ? true : false;
        return resultValidate;
    }

    validate() {
        const { name, email, password, password2 } = this;
        if (!(password === password2))
            throw new Error('Error: failed to password confirmation ');
        const schema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
            email: Joi.string()
                .min(5)
                .max(255)
                .required()
                .email({ tlds: { allow: false } }),
            password: Joi.string().min(5).max(255).required(),
        });

        const { error } = schema.validate({ name, email, password });
        if (!error) {
            this.isValidate = true;
        } else {
            console.error(error);
        }
        return this;
    }

    postToServer() {
        if (!this.isValidate) return this;

        const submitFormValue = {
            name: this.name,
            email: this.email,
            password: this.password,
        };

        apiPostUserRegister(submitFormValue)
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
