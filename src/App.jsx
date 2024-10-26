import './App.css'
import Nav from './components/Nav'
import Countries_list from './components/Countries_list'
import Country_details from './components/Country_details'
import { useState } from 'react'

function App() {
  const [country, setCountry] = useState(null)

  function handleCountryClick(country) {
    setCountry(country)
    console.log(country);
    
  }
  function handleBack(){
    setCountry(null)
  }

  return (
    <>
      <Nav />
      { country ? (
        <Country_details country={country} handleBack={handleBack} handleCountryClick={handleCountryClick}/>
      ) : (
        <Countries_list handleCountryClick={handleCountryClick}/>
      )}
    </>
  )
}

export default App
