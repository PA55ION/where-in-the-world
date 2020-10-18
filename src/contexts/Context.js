import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const countries = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState();

  const END_POINTS = {
    ALL_COUNTRIES_API: "https://restcountries.eu/rest/v2/all",
    SEARCH_BY_NAME_API: "https://restcountries.eu/rest/v2/name/",
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(`${END_POINTS.ALL_COUNTRIES_API}`);
        countries.current = result.data;
        setData(countries.current);
        if (country) {
          const fetchCountry = await axios.get(
            `${END_POINTS.SEARCH_COUNTRY_BY_NAME}${country}`
          );
          countries.current = fetchCountry.data;
          setCountry(countries.current);
        }
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [
    END_POINTS.ALL_COUNTRIES_API,
    END_POINTS.SEARCH_COUNTRY_BY_NAME,
    country,
  ]);

  return (
    <Context.Provider value={{ data, country, countries, isLoading, error }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
