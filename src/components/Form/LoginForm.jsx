
import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import "./Form.css"
import TextField from "./TextField.jsx";
import PasswordField from "./PasswordField.jsx";
import axios from "axios";
import { Link } from 'react-router-dom';

function LoginForm({ username, setUsername, setJWTToken, userIsLoggedIn}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ mode: 'onBlur' });


    const password = watch("password");

    async function handleFormSubmit(data) {
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

        } catch (e) {
            console.error(e);
        }

        if (response) {
            setUsername(data.username);
            setJWTToken(response.data.jwt);
        }
    }
    if (userIsLoggedIn) {
        return (
            <>
                <div>You're logged in</div>
                <h1>{`Hello ${username}`}</h1>

                <div>Go to the <Link to="/">homepage</Link> to browse through our cocktails</div>
            </>
        );
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