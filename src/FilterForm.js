import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import SearchField from './SearchField'

function FilterForm() {
  return (
    <FormContainer>
        <SearchField />
        <Dropdown />
    </FormContainer>
  )
}

export default FilterForm

const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding-inline: 5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 5vw;
      justify-content: flex-start;
    }
`