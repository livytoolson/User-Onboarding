import React, { useState, useEffect } from 'react'
import Form from './Form.js'
import schema from './formSchema.js'
import axios from 'axios'
import * as yup from 'yup'

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

// HELPER FUNCTIONS //
const postNewUser = newUser => {
  axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setUser([...user, res.data]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
}

// EVENT HANDLERS //
const inputChange = (name, value) => {
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
        [name]: err.error[0],
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
    termsOfService: ['yes', 'no'].filter(
      (res => formValues[res])
    ),
  };
  postNewUser(newUser);
};

// SIDE EFFECTS //
useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid);
  })
}, [formValues])

  return (
    <div>
      <header><h1>New User App</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}