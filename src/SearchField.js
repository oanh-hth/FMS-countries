import { SearchOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { searchCountry } from './features/countrySlice'


function SearchField() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    dispatch(searchCountry(inputRef.current.value))
  }

  return (
    <InputContainer>
        <SearchOutlined />
        <input 
          type='search' 
          placeholder='Search for a country…' 
          ref={inputRef}
          onChange={handleChange}
        />
    </InputContainer>
  )
}

export default SearchField

const InputContainer = styled.div`
    background-color: ${props => props.theme.headerBg};
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem 2rem;
    box-shadow: 0px 2px 9px 0px #0000000E;

    > input {
        border: none;
        outline: none;
        background-color: transparent;
        color: ${props => props.theme.text};

        &:placeholder {
          color: ${props => props.theme.text};
        }
    }

   

    .MuiSvgIcon-root {
        color: ${props => props.theme.text} !important;
    }
`