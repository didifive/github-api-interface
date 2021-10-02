import React from "react";
import { StyledInput } from "./styled";

function Input(props) {
  const { children, onChange, type } = props

  return (
    <StyledInput>
      <input 
        type={type}
        placeholder={children}
        onChange={onChange}
      >
      </input>
    </StyledInput>
  )
};

export default Input;