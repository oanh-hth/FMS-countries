import { NightlightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Header({onToggleTheme}) {
  return (
    <ContainerHeader>
        <h1>Where in the world?</h1>
        <Button theme='Dark Mode' Icon={NightlightOutlined} onToggle={onToggleTheme} />
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
    height: 5rem;
    padding: 1.5rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.headerBg};
`