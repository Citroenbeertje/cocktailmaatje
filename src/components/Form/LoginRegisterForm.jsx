import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React from "react";
import "./LoginRegisterForm.css"
import TextField from "./TextField.jsx";

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
                inputLabel={"Username:"}
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

            <label htmlFor="email-field">
                Email:
                <input
                    className="email-input"
                    type="text"
                    id="email-field"
                    {...register("email", {
                        required: true,
                        validate: (value) => value.includes('@') || "Please include @ in the email",
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </label>

            <label htmlFor="password-field">
                Password:
                <input
                    className="password-input"
                    type="password"
                    id="password-field"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must contain at least 8 characters, please include at least one uppercase letter, one number, and one special character"
                        },
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
                            message: "*Password invalid, please include at least one uppercase letter, one number, and one special character"
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </label>

            <label htmlFor="confirmation-password-field">
                Confirmation password:
                <input
                    className="confirmation-password-input"
                    type="password"
                    id="confirmation-password-field"
                    {...register("confirmationPassword", {
                        validate: (value) =>
                            value === password || "Your passwords do not match, please try again"
                    })}
                />
                {errors.confirmationPassword && <p>{errors.confirmationPassword.message}</p>}
            </label>

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default LoginRegisterForm;