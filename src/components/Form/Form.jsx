import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React from "react";
function Form() {
    const { register, handleSubmit, formState: { errors }} = useForm();

    function handleFormSubmit(data) {
    }

    console.log('errors', errors);

    console.log()
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="username-field">
                Username:
                <input
                    type="text"
                    id="username-field"
                    {...register("username", {
                        required: "Please enter username",
                        minlength: {
                            value: 3,
                            message: "Username must contain at least 4 characters"
                        },
                        // if else dingetje ertussen----------------------------------
                        maxLength: {
                            value: 25,
                            message: "Username can not exceed 25 characters"
                        }
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
                        maxLength: {
                            value: 25,
                            message: "Username can not exceed 25 characters"
                        }
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


                    })}
                />
            </label>

            <label htmlFor="message-field">
                Bericht:
                <textarea
                    id="message-field"
                    rows="4"
                    cols="40"
                    placeholder="Laat je bericht achter"
                    {...register("message-content", {
                        required: true,
                        minlength: 3,
                        maxLength: 10,
                    })}
                ></textarea>
            </label>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default Form;