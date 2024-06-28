import React from "react";
import LoadingCircle from "./LoadingCircle";

const AddressComboboxDropdown = ({ selectProv, isTyping, filteredCity, provinces, backToCountry, setSelectedCityAndUpdateInput, setSelectedProvinceAndUpdateInput }) => {

    return (
        provinces?.length > 0 ?
            <div className='absolute left-0 py-2 w-full bg-white px-2 z-40 shadow-md max-h-[50vh] overflow-y-scroll'>
                <h5 className='py-2 font-semibold text-sm leading-6 text-gray-900'>Please choose a {!!selectProv || isTyping ? 'city' : 'province'}</h5>
                {!!selectProv && !isTyping ?
                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onMouseDown={backToCountry}>back to province</div> : null
                }
                {
                    !!selectProv || isTyping ? !!filteredCity &&
                        <div className='grid grid-cols-2 gap-1 py-2'>
                            {filteredCity.map((item, index) => (
                                <div className="text-sm border border-gray-300 my-1 w-full hover:bg-gray-300 text-center" key={`${item.name}-${index}`} onMouseDown={(e) => setSelectedCityAndUpdateInput(e, item)}>{item.name}</div>
                            ))}
                        </div> :
                        <div className='py-2'>
                            {
                                !!provinces && provinces.map((item) => (
                                    <div className="text-sm border border-gray-300 my-2 w-full hover:bg-gray-300 text-center" key={`${item}-prov`} onMouseDown={(e) => setSelectedProvinceAndUpdateInput(e, item)}>{item}</div>
                                ))}</div>

                }
            </div> : <LoadingCircle />)
}

export default AddressComboboxDropdown