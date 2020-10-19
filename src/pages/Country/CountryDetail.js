import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../contexts/Context'
import BackButton from '../../components/Button/BackButton'
import axios from 'axios'



const CardDetail = ({ match }) => {
    const [countryInfo, setCountryInfo] = useState([]);

    const { countryCode } = match.params

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            setCountryInfo(result.data)
        }
        fetchData();
    }, [countryCode, countryInfo])
    console.log(countryInfo)

    return (
        <div className='container'>
           

        </div>
    )
}

export default CardDetail