import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Country from './Country'
import { selectCountries } from './features/countrySlice'


function CountriesList() {
  const countries = useSelector(selectCountries)
  return (
    <ListContainer>
        {countries.map( ({name, population, region, capital, flags : { png }}) => <Country 
            key={name} 
            name={name}
            population={population}
            region={region}
            capital={capital}
            flags={png}
        />)}
    </ListContainer>
  )
}

export default CountriesList

const ListContainer = styled.div`
    margin-top: 3rem;
    padding-inline: 5rem;
    display: grid;
    column-gap: 5vw;
    row-gap: 10vw;
    grid-template-columns: repeat( auto-fit, 16.5rem );
    justify-content: space-between
    `