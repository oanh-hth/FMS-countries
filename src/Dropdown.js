import { KeyboardArrowDown } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filterRegion } from './features/countrySlice'
import data from './data.json'

function Dropdown() {
   const [isOpen, setIsOpen] = useState(false)
   const regions = [...new Set(data.map(item => item.region))]
   const dispatch = useDispatch()

   let display
   if (!isOpen) {
        display = { display : 'none'}
   } else {
        display = { display: 'block'}
   }


  return (
    <DropdownContainer>
        <button type='button' onClick={() => setIsOpen(!isOpen)}>
            <span>Filter by Region</span>
            <KeyboardArrowDown />
        </button>
        <ul style={display}>
            <li onClick={() => {
                        dispatch(filterRegion('all'))
                        setIsOpen(false)
                    }}>All region</li>
            {regions.map( region => (
                <li 
                    key={region}
                    onClick={() => {
                        dispatch(filterRegion(region))
                        setIsOpen(false)
                    }}
                >
                    {region}
                </li>
            ))}
        </ul>
        
    </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.div`
    > button {
        border: none;
        outline: none;
        background: ${props => props.theme.headerBg};
        display: flex;
        justify-content: space-between;
        padding: 1.125rem 1.5rem;
        width: 200px;
        cursor: pointer;
        color: ${props => props.theme.text};
    }

    .MuiSvgIcon-root {
        color: ${props => props.theme.text} !important;
    }

    ul {
        list-style: none;
        padding: 1rem 1.5rem;
        background-color: ${props => props.theme.headerBg};
        margin-top: 4px;
        border-radius: 5px;
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
        position: absolute;
    }

    li {
        margin-bottom: 0.5rem;
        cursor: pointer;
    }

    li:hover {
        font-weight: 600;
    }
`