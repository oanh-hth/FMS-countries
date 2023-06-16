import styled from '@emotion/styled'
import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './data.json'
import { useTheme } from 'styled-components'

function DetailCountry() {
  const theme = useTheme()
  const name = useParams()
  const detail = data.find( country => country.name === name.countryName)
  const borderCountries = detail && detail.borders && [...detail.borders.map( border => data.find( c => c.alpha3Code === border))]
  const languages = detail && detail.languages && detail.languages.map( l => l.name).join(', ')
  const styledLink = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5rem',
    backgroundColor: `${theme.headerBg === '#FFFFFF' ? '#FAFAFA' : theme.headerBg}`,
    textDecoration: 'none',
    cursor: 'pointer',
    color: `${theme.text}`,
    borderRadius: '6px',
    padding: '10px 32px'
  }

  const borderLink = {
    textDecoration: 'none',
    backgroundColor: `${theme.headerBg}`,
    boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.104931)',
    borderRadius: '2px',
    padding: '5px 27px',
    whiteSpace: 'nowrap',    
    cursor: 'pointer',
    color: `${theme.text}`
  }

  return (
    <Container>
        <Link to='/' style={styledLink}>
            <ArrowBack />
            Back
        </Link>
        <FlexContainer>
            <div>
                <img src={detail && detail.flags.png} alt='' />  
            </div>
            <FlexItemRight>
                <h1>{name.countryName}</h1>
                <div>
                    <div>
                        <p>Native Name: <span>{detail && detail.nativeName}</span></p>
                        <p>Population: <span>{detail && detail.population}</span></p>
                        <p>Region: <span>{detail && detail.region}</span></p>
                        <p>Sub Region: <span>{detail && detail.subregion}</span></p>
                        <p>Capital: <span>{detail && detail.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span>{detail && detail.topLevelDomain}</span></p>
                        <p>Currencies: <span>{detail && detail.currencies && detail.currencies[0].name}</span></p>
                        <p>Languages: <span>{languages}</span></p>
                    </div>
                </div>
                    <p>Border Countries: 
                    {borderCountries && borderCountries.map( l => <Link key={l.name} to={`/${l.name}`} style={borderLink}>
                        {l.name}
                    </Link>)}
                    </p>
            </FlexItemRight>
        </FlexContainer>
    </Container>
  )
}

export default DetailCountry

const BackLink = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  

const Container = styled.div`
    margin-top: 3rem;
    padding-inline: 5rem;
    background-color: ${props => props.theme.body}
`


const FlexContainer = styled.div`
    display: flex;
    margin-top: 5rem;
    gap: 7.625rem;
`

const FlexItemRight = styled.div`
    width: 50%;

    > h1 {
        margin-bottom: 23px;
    }

    > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 68px;

        p {
            font-weight: 600;
        }

        span {
            font-weight: 400;
        }
    }

    > p {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
    }

`

