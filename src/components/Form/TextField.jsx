import React from "react";

function TextField ({inputName, inputLabel, inputId, validationRules, register, errors }) {
    return (
        <label htmlFor="text-field">
            {inputLabel}
            <input
                className="text-input"
                type="text"
                {...register(inputName, validationRules)}
            />
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </label>
    )
}

export default TextField;