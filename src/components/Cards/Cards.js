import React from "react";
import { Card, CardImg, Image, CardDetail } from "./CardStyle";
import { Link } from 'react-router-dom';

const Cards = ({ country }) => {
  return (
    <Card className="card">
      <div className="image-container">
      <Image style={{ backgroundImage: `url(${country.flag})` }}></Image>
      </div>
      <CardDetail className='card-details'>
        <Link to={`/country/${country.alpha3Code}`}><h3>{country.name}</h3></Link>
        <p>Population: {country.population.toLocaleString('en-US')}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </CardDetail>
    </Card>
  );
};

export default Cards;
