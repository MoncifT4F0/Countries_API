export default function Countries_list() {
    let search_icon = 'src/assets/search.png'
    return (
        <>
            <div className="bg-veryDarkBlueBg h-[100vh] w-[100vw] mt-16">
                <div className="Search_field flex justify-between items-center p-6">
                    <div className="flex gap-4 items-center bg-darkBlueElements py-3 px-6 rounded-md ">
                        <img src={search_icon} alt="search-icon" className="w-4 h-4"/>
                        <input type="text" name="" id="" placeholder="Seach for a country..." 
                            className="text-white bg-transparent"/>
                    </div>
                    <select name="" id=""></select>
                </div>
            </div>
        </>
    )
}