import React from "react";

function PasswordField ({inputName, inputLabel, inputId, validationRules, register, errors }) {
    return (
        <label htmlFor="password-field">
            {inputLabel}
            <input
                className="password-input"
                type="password"
                id={inputId}
                {...register(inputName, validationRules)}
            />
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </label>
    )
}

export default PasswordField;