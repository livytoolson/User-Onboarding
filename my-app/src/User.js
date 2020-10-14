import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function User({ details }) {
    console.log(details)
  if (!details) {
    return <h3>Working fetching details...</h3>
  }

  return (
    <StyledDiv >
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.termsOfService}</p>
    </StyledDiv>
  )
}

export default User
