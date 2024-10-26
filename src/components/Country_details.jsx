/* eslint-disable react/prop-types */
import data from '../store/data.json'
export default function Country_details({ country, handleBack, handleCountryClick }) {
    console.log(country.name);
    
    const handleBorderClick = (alpha3Code) => {
        const borderCountry = data.find(c => c.alpha3Code === alpha3Code);
        if (borderCountry) {
            handleCountryClick(borderCountry);
        }
    };

    return (
        <>
            <div className="py-24 bg-veryLightGrayBg dark:bg-veryDarkBlueBg min-h-[100vh] text-veryDarkBlueText dark:text-whiteText">
                <div 
                    onClick={handleBack}
                    className="cursor-pointer bg-white dark:bg-darkBlueElements text-veryDarkBlueText dark:text-white py-2 px-10 w-fit m-8">
                    <p className="text-sm">← &nbsp;&nbsp;Back</p>
                </div>

                <div className="max-md:flex-col flex mx-8 gap-x-10 gap-y-10 w-full">
                    <img 
                        src={country.flags?.png} 
                        alt={`${country.name} flag`} 
                        className="min-w-[400px] w-[40%] max-md:mx-auto object-contain" 
                    />

                    <div className="country-details p-8">
                        <h1 className="text-4xl font-bold">{country.name}</h1>
                        <div className="details-grid mt-6 flex flex-col md:flex-row gap-8">
                            <div className="details-cozlumn space-y-2">
                                <p><strong>Native Name:</strong> {country.nativeName || "N/A"}</p>
                                <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
                                <p><strong>Region:</strong> {country.region}</p>
                                <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>
                                <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                            </div>
                            <div className="details-column space-y-2">
                                <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(", ") || "N/A"}</p>
                                <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(", ") || "N/A"}</p>
                                <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(", ") || "N/A"}</p>
                            </div>
                        </div>
                        
                        <div className="border-countries mt-8">
                            <strong>Border Countries:</strong>
                            <div className="border-buttons mt-2 flex flex-wrap gap-2">
                                {country.borders?.length ? (
                                    country.borders.map((border, index) => (
                                        <button 
                                            key={index} 
                                            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                                            onClick = {() => {handleBorderClick(border)}}
                                            >
                                            {border}
                                        </button>
                                    ))
                                ) : (
                                    <span className="text-gray-500">No Border Countries</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
