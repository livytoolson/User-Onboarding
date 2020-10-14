import React from 'react';

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
    <form onSubmit={onSubmit}>
        {/* // RENDER VALIDATION ERRORS // */}
        <div>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfSerive}</div>
        </div>

        {/* // TEXT INPUTS // */}
        <div>
            <label>Name
                <input 
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                />
            </label>

            <label>Email
                <input 
                value={values.email}
                onChange={onChange}
                name="email"
                type="text"
                />
            </label>

            <label>Password
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
                />
            </label>

        {/* // CHECKBOX // */}
            <label>I agree to the Terms of Service
                <input 
                type="checkbox"
                name="termsOfService"
                checked={values.yes}
                onChange={onChange}
                />
            </label>

        </div>

        {/* // DISABLE THE BUTTON //  */}
        <div>
            <button disabled={disabled}>submit</button>
        </div>
    </form>
    )
};