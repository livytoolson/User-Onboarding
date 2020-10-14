import React from 'react';
import styled from 'styled-components'

// STYLE FORM //
const FormDiv = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const StyledName = styled.label`
    padding: 15px;
`

const StyledEmail = styled.label`
    padding: 15px;
`

const StyledPassword = styled.label`
    padding: 15px;
`

const StyledTerms = styled.label`
    padding: 15px;
`

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        // console.log(name, valueToUse)
        change(name, valueToUse);
    };

    return (
    <form onSubmit={onSubmit}>
        {/* // RENDER VALIDATION ERRORS // */}
        <div>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfService}</div>
        </div>

        {/* // TEXT INPUTS // */}
        <FormDiv>
            <StyledName>Name
                <input 
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                />
            </StyledName>

            <StyledEmail>Email
                <input 
                value={values.email}
                onChange={onChange}
                name="email"
                type="text"
                />
            </StyledEmail>

            <StyledPassword>Password
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
                />
            </StyledPassword>

        {/* // CHECKBOX // */}
            <StyledTerms>I agree to the Terms of Service
                <input 
                type="checkbox"
                name="termsOfService"
                checked={values.termsOfService === true}
                onChange={onChange}
                />
            </StyledTerms>

        {/* // DISABLE THE BUTTON //  */}
            <button disabled={disabled}>submit</button>

        </FormDiv>
    </form>
    )
};