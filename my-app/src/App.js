import React, { useState, useEffect } from 'react';
import Form from './Form';
import schema from './formSchema';
import User from './User';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';

// STYLE FORM // 
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// INITIAL STATE OF FORM //
const initialFormValues = {
// TEXT INPUTS //
  name: '',
  email: '',
  password: '',
// CHECKBOX // 
  termsOfService: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUser = []
const initialDisabled = true


export default function App() {
// SET SLICES OF STATE // 
const [user, setUser] = useState(initialUser)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)
// console.log(formValues)

// HELPER FUNCTIONS //
// add newly created user to state
// use helper function to post newUser to 'https://reqres.in/api/users'
// reset form to initialFormValues
const postNewUser = newUser => {
  axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
      console.log(res)
      setUser([...user, res.data]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
}

// EVENT HANDLERS //
const inputChange = (name, value) => {
  // console.log(name, value)
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

  setFormValues({
    ...formValues,
    [name]: value 
  });
}

const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    termsOfService: ['true', 'false'].filter(
      (res => formValues[res])
    ),
  };

// post newUser using postNewUser helper function
  postNewUser(newUser);
};

// SIDE EFFECTS //
// adjust the status of disabled everytime the formValues changes
useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid);
  })
}, [formValues])

  return (
    <StyledDiv>
      <header>
        <h1>New User Form</h1>
      </header>
 
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {user.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </StyledDiv>
  )
}