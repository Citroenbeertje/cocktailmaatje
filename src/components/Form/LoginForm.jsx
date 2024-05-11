
import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import React, {useState} from "react";
import "./Form.css"
import TextField from "./TextField.jsx";
import PasswordField from "./PasswordField.jsx";
import axios from "axios";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ mode: 'onBlur' });

    const [token, setToken] = useState();
    console.log("token", token)

    const password = watch("password");

    async function handleFormSubmit(data) {
        console.log('errors', errors);
        console.log('data', data);
        let response;

        try {
            response = await axios.post(
                "https://api.datavortex.nl/cocktailmaatje/users/authenticate",
                {
                    username: data.username,
                    password: data.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'cocktailmaatje:V9y28Au3nIqP6TaCI9mC'
                    }
                });

            console.log("response", response)
        } catch (e) {
            console.error(e);
        } finally {
            setToken(response.data.jwt);
        }
    }

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
                inputName="password"
                register={register}
                inputLabel={"Password"}
                errors={errors}
                validationRules={{
                    validate: (value) => !value | "Please enter a password"
                }}
            />

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default LoginForm;