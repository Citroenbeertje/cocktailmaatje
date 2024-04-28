import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React from "react";
import "./LoginRegisterForm.css"

function LoginRegisterForm() {
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onBlur' });
    function handleFormSubmit(data) {
        console.log('errors', errors);
        console.log('data', data);
    };


    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="username-field">
                Username:
                <input
                    type="text"
                    id="username-field"
                    {...register("username", {
                        required: {
                            value: true,
                        },
                        minLength: {
                            value: 5,
                            message: "Username must contain at least 5 characters"
                        },
                        maxLength: {
                            value: 25,
                            message: "Username cannot exceed 25 characters",
                        },
                    })}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </label>

            <label htmlFor="email-field">
                Email:
                <input
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
                    type="password"
                    id="password-field"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must contain at least 8 characters"
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
                    type="password"
                    id="confirmation-password-field"
                    {...register("confirmation-password", {
                        validate: value =>
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