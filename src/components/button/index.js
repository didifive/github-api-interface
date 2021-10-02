import React from "react";
import PropTypes from 'prop-types'
import { StyledButton } from "./styled";

function Button(props) {
  const { children, onClick, type } = props

  return (
    <StyledButton>
      <button 
          type={type}
          onClick={onClick}
      >
          <span>
              {children}
          </span>
      </button>
    </StyledButton>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;