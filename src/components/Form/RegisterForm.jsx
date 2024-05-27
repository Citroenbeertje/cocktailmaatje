import { useForm } from 'react-hook-form';
import Button from "../Button/Button.jsx";
import { useState } from "react";
import axios from "axios";
import "./Form.css"
import TextField from "./TextField.jsx";
import PasswordField from "./PasswordField.jsx";
import {Link} from "react-router-dom";


function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm();
    const [isRegistered, setIsRegistered] = useState(false);

    const password = watch("password");
    async function handleFormSubmit(data) {

        try {
            const response = await axios.post(
                "https://api.datavortex.nl/cocktailmaatje/users",
                {
                    username: data.username,
                    password: data.password,
                    email: data.email
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'cocktailmaatje:V9y28Au3nIqP6TaCI9mC'
                    }
                });

            if (response.status === 200) {
                setIsRegistered(true);
            }

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            {isRegistered ? (
                <>
                    <h3 className="registered-message">You have been successfully registered.</h3>
                    <h3>Proceed to <Link to="/login" className="go-to-login">Login</Link></h3>
                </>

            ) : (
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
                        inputName="email"
                        register={register}
                        inputLabel={"Email"}
                        errors={errors}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            validate: {
                                includesAtSign: value => value.includes('@') || "Please include @ in the email"
                            },
                        }}
                    />

                    <PasswordField
                        inputId="password-field"
                        inputName="password"
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
                        inputName="password-confirmation"
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
            )}
        </>
    );
}

export default RegisterForm;