import Joi from 'joi';
import { apiPostUserRegister } from '../api/api';

//TODO 前端 Register 未寫表單驗證
class SubmitRegister {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.form = { name, email, password };
        this.isAllValidate = false;
    }

    validateName() {
        const schema = Joi.object({
            name: Joi.string().min(3).max(20).required(),
        });

        const { error } = schema.validate({ name: this.name });
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

        const { error } = schema.validate({ email: this.email });
        const resultValidate = !error ? true : false;
        return resultValidate;
    }
    validatePassword() {
        const schema = Joi.object({
            password: Joi.string().min(5).max(255).required(),
        });

        const { error } = schema.validate({ password: this.password });
        const resultValidate = !error ? true : false;
        return resultValidate;
    }

    validateAll() {
        const checkValidate = [];
        checkValidate.push(this.validateName());
        checkValidate.push(this.validateEmail());
        checkValidate.push(this.validatePassword());

        const result = checkValidate.every((item) => item === true);
        if (!result) return alert('驗證失敗');
        return this;
    }

    postToServer() {
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
