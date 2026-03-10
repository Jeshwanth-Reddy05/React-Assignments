import React from "react";
import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  async function getCountriesData() {
    setLoading(true);
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,region,currencies,flags",
      );
      if (res.status !== 200) {
        throw new Error("Failed to fetch the countries data");
      }
      const countiresData = await res.json();
      if (res.status === 200) {
        setCountries(countiresData);
      } else {
        throw new Error("error occured");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCountriesData();
  }, []);

  const filterdCountries = countries.filter((countryObj) =>
    countryObj.name.common.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="flex flex-col gap-8 items-center">
      <header className="text-5xl font-bold text-center">
        Country Explorer
      </header>
      <SearchBar userSearch={setQuery} />
      {/* conditional rendering */}
      {loading && <p className="text-5xl text-center">Loading...</p>}
      {error && <p className="text-5xl text-center">Error : {error}</p>}
      {!loading && !error && <CountryList countries={filterdCountries} />}
    </div>
  );
}

export default App;
