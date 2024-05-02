import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React from "react";
import "./LoginRegisterForm.css"
import TextField from "./TextField.jsx";
import PasswordField from "./PasswordField.jsx";

function LoginRegisterForm() {
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
                    minLength: {
                        value: 5,
                        message: "Username must contain at least 5 characters"
                    },
                    maxLength: {
                        value: 25,
                        message: "Username cannot exceed 25 characters",
                    },
                }}
            />

            <TextField
                inputId="email-field"
                inputName="email-input"
                register={register}
                inputLabel={"Email"}
                errors={errors}
                validationRules={{
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                    validate: {
                        value: (value) => value.includes('@'),
                        message: "Please include @ in the email"
                    },
                }}
            />

            <PasswordField
                inputId="password-field"
                inputName="password-input"
                register={register}
                inputLabel={"Choose password"}
                errors={errors}
                validationRules={{
                    required: {
                        value: true,
                        message: "Password is required"
                    },
                    minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters, please include at least one uppercase letter, one number, and one special character"
                    },
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
                        message: "*Password invalid, please include at least one uppercase letter, one number, and one special character"
                    }
                }}
            />

            <PasswordField
                inputId="password-confirmation-field"
                inputName="password-confirmation-input"
                register={register}
                inputLabel={"Confirm Password"}
                errors={errors}
                validationRules={{
                    validate: (value) =>
                        value === password || "Your passwords do not match, please try again"
                }}
            />

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default LoginRegisterForm;