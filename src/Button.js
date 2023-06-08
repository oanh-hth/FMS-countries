import React from 'react'
import styled from 'styled-components'

function Button({Icon, theme, onToggle}) {
  return (
    <ButtonContainer onClick={onToggle}>
        {Icon && <Icon />}
        <span>{theme}</span>
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    color: ${props => props.theme.text}};
    cursor: pointer;
`