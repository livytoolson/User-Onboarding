import React from 'react';
import styled from 'styled-components'

// STYLED COMPONENTS //
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

const SyledErrors = styled.div`
    color: red;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        // console.log('type', type)
        // console.log('valueToUse', valueToUse)
        change(name, valueToUse);
    };

    return (
    <form onSubmit={onSubmit}>
        {/* // RENDER VALIDATION ERRORS // */}
        <SyledErrors className="errors">
            <div className="errors">{errors.name}</div>
            <div className="errors">{errors.email}</div>
            <div className="errors">{errors.password}</div>
            <div className="errors">{errors.termsOfService}</div>
        </SyledErrors>

        {/* // TEXT INPUTS // */}
        <FormDiv>
            <StyledName className="name">Name
                <input 
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                />
            </StyledName>

            <StyledEmail className="email">Email
                <input 
                value={values.email}
                onChange={onChange}
                name="email"
                type="text"
                />
            </StyledEmail>

            <StyledPassword className="password">Password
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="text"
                />
            </StyledPassword>

        {/* // CHECKBOX // */}
            <StyledTerms className="tos">I agree to the Terms of Service
                <input 
                type="checkbox"
                name="termsOfService"
                checked={values.termsOfService === true}
                onChange={onChange}
                />
            </StyledTerms>

        {/* // DISABLE THE BUTTON //  */}
            <button id='submitBtn' disabled={disabled}>submit</button>

        </FormDiv>
    </form>
    )
};