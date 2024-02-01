import { useState, useEffect } from 'react';

const Fetch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca2}>
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
};

export default Fetch;