import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Country({name, population, region, capital, flags}) {
  return (
    <Card>
        <div>
            <h2>
                <Link to={name}>{name}</Link>
            </h2>
            <ul>
                <li>Population: <span>{population}</span></li>
                <li>Region: <span>{region}</span></li>
                <li>Capital : <span>{capital}</span></li>
            </ul>
        </div>
        <img src={flags} alt='' />
    </Card>
  )
}

export default Country

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 264px;
    background: ${props => props.theme.headerBg};
    height: 336px;
    border-radius: 5px;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    overflow: hidden;

    > img {
        order: 1;
        object-fit: cover;
        height: 160px;
    }

    > div {
        order: 2;
        padding: 1.5rem;
    }

    h2 {
        font-size: 1.125rem;
        color: ${props => props.theme.text};
        font-weight: 800;
        margin-bottom: 1rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        font-weight: 600;
        font-size: 0.875rem;
        color: ${props => props.theme.text};

        > span {
            font-weight: 300;
        }
    }
`