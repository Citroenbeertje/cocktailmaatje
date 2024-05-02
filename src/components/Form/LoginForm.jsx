
import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React from "react";
import "./LoginRegisterForm.css"
import TextField from "./TextField.jsx";
import PasswordField from "./PasswordField.jsx";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ mode: 'onBlur' });

    const password = watch("password");

    function handleFormSubmit(data) {
        console.log('errors', errors);
        console.log('data', data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
                inputId="username-field"
                inputName="username"
                register={register}
                inputLabel={"Username"}
                errors={errors}
                validationRules={{
                    required: {
                        value: true,
                        message: "Username is required"
                    },
                }}
            />

            <PasswordField
                inputId="password-login-field"
                inputName="password-login-input"
                register={register}
                inputLabel={"Password"}
                errors={errors}
                validationRules={{
                    validate: (value) => {
                        if (!value) {
                            return "Please enter a password";
                        } else if (value !== password) {
                            return "Password incorrect, please try again"
                        }
                        return true;
                    }
                }}
            />

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default LoginForm;