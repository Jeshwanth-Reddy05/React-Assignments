import React from 'react'
import CountryCard from './CountryCard'

function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {countries.map((countryObj, indx) => (
        <CountryCard key={indx} countryObj={countryObj} />
      ))}
    </div>
  )
}

export default CountryList