import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function User({ details }) {
    // console.log(details)

  return (
    <StyledDiv >
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Role: {details.role}</p>
      <p>Terms of Service: {details.termsOfService ? "Agreed" : "Disagreed"}</p>
    </StyledDiv>
  )
}

export default User
