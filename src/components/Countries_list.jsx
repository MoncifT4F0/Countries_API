/* eslint-disable react/prop-types */
import { useState } from 'react';
import data from '../store/data.json';

export default function CountriesList({handleCountryClick}) {
    
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const checkFilter = (country) => 
        filter ? country.region.toUpperCase() === filter.toUpperCase() : true;

    const checkSearch = (country) => 
        [country.name, country.alpha2Code, country.alpha3Code, country.demonym, country.nativeName, country.capital]
        .some(attr => attr?.toUpperCase().includes(search.toUpperCase()));


    const filteredData = data.filter((country) => checkFilter(country) && checkSearch(country));

    return (
        <div className="min-h-[100vh] w-[100vw] mt-16 bg-veryLightGrayBg dark:bg-veryDarkBlueBg text-veryDarkBlueText dark:text-white transition-colors duration-600 ease-in-out">
            <FilterAndSearchBar 
                search={search}
                setSearch={setSearch}
                setFilter={setFilter}
            />
            <CountryGrid countries={filteredData} handleCountryClick={handleCountryClick}/>
        </div>
    );
}


function FilterAndSearchBar({ search, setSearch, setFilter }) {
    return (
        <div className="Search_field flex justify-between items-center py-11 px-8">
            <div className="flex gap-4 items-center py-3 px-6 rounded-md bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out">
                <label htmlFor="search_bar">
                    <img src="src/assets/search.png" alt="search-icon" className="w-4 h-4" />
                </label>
                <input
                    type="text"
                    id="search_bar"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent border-none outline-none"
                />
            </div>
            <select
                name="Regions filter"
                id="region_filter"
                className="px-6 py-3 bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out"
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="" disabled hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}


function CountryGrid({ countries, handleCountryClick}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {countries.map((country, index) => (
                <CountryCard key={index} country={country} handleCountryClick={handleCountryClick}/>
            ))}
        </div>
    );
}


function CountryCard({ country, handleCountryClick }) {
    return (
        <div className='mx-8 bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out w-fit cursor-pointer'
        onClick={() => {handleCountryClick(country)}}>
            <img src={country.flags.png} alt={`${country.name} flag`} />
            <div className='p-4'>
                <p className='font-extrabold mb-2'>{country.name}</p>
                <p><b>Population:</b> {country.population}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Capital:</b> {country.capital || "N/A"}</p>
            </div>
        </div>
    );
}
