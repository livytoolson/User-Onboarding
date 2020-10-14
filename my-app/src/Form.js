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
    <form>
        {/* // DISABLE THE BUTTON //  */}
        <div>
            <button disabled={disabled}>submit</button>
        </div>

        {/* // RENDER VALIDATION ERRORS // */}
        <div>

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
            <label>Yes
                <input 
                type="checkbox"
                name="yes"
                checked={values.yes}
                onChange={onChange}
                />
            </label>

            <label>No
                <input 
                type="checkbox"
                name="no"
                checked={values.no}
                onChange={onChange}
                />
            </label>

        </div>
    </form>
    )
};