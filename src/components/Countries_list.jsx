import { useEffect, useState } from 'react'
import data from '../store/data.json'
// import { useEffect } from 'react';
export default function Countries_list() {
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    let filtered_data;

    let checkFilter = (country) => {
        return country.region.toUpperCase() === filter.toUpperCase()
    }
    let checkSearch = (country) => {
        return (country.name.toUpperCase().includes(search.toUpperCase()) || country.alpha2Code.toUpperCase().includes(search.toUpperCase()) || country.alpha3Code.toUpperCase().includes(search.toUpperCase()) || country.capital.toUpperCase().includes(search.toUpperCase()) || country.demonym.toUpperCase().includes(search.toUpperCase()) || country.nativeName.toUpperCase().includes(search.toUpperCase()))
    }

    if (filter) {
        filtered_data = data.filter(checkFilter)
    } else {
        filtered_data = data
    }
    if (search) {
        filtered_data = filtered_data.filter(checkSearch)
    }

    let search_icon = 'src/assets/search.png'

    let countries_data = filtered_data.map(function (x, index) {
        return (
            <div key={index} className='mx-8 bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out'>
                <img src={x.flags.png} alt="" />
                <div className='p-4'>
                    <p className='font-extrabold mb-2'>{x.name}</p>
                    <p><b>Population :</b> {x.population}</p>
                    <p><b>Region :</b> {x.region}</p>
                    <p><b>Capital :</b> {x.capital}</p>
                </div>
            </div>
        )
    })




    return (
        <>
            <div className="min-h-[100vh] w-[100vw] mt-16
            bg-veryLightGrayBg dark:bg-veryDarkBlueBg text-veryDarkBlueText dark:text-white transition-colors duration-600 ease-in-out">
                <div className="Search_field flex justify-between items-center py-11 px-8 ">
                    <div className="flex gap-4 items-center py-3 px-6 rounded-md 
                    bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out ">
                        <img src={search_icon} alt="search-icon" className="w-4 h-4" />
                        <input type="text" name="" id="" placeholder="Seach for a country..."
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent border-none outline-none 
                            " />
                    </div>
                    <select name="Regions filter" id="region_filter" placeholder='Filter by Region'
                        className=" px-6 py-3 bg-white dark:bg-darkBlueElements transition-colors duration-600 ease-in-out"
                        onChange={(e) => setFilter(e.target.value)}>
                        <option value="" selected disabled hidden>Fitler by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Ocienia</option>
                    </select>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {countries_data}

                    </div>
                </div>
            </div>
        </>
    )
}