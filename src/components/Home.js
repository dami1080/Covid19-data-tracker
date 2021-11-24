/* eslint-disable dot-notation */
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import CountryCard from './Card';
import TotalCard from './TotalCard';

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer);

  return (
    <div>
      <Navbar title="All Africa cases" left="2021" />
      <div>
        <div>
          <TotalCard name="Africa Total confirmed:" total={total} />
        </div>
        {countries.map((country) => (
          <CountryCard key={country['All'].country} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
