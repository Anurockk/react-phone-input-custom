import React from "react";
import {CountryDropdownProps} from "../../interface/Interface";

export const CountryDropdown: React.FC<CountryDropdownProps> = ({
                                                             countries,
                                                             onSelect,
                                                             isOpen,
                                                             searchTerm,
                                                             setSearchTerm,
                                                             dropdownStyle
                                                         }) => {
    return isOpen ? (
        <div style={dropdownStyle}
             className="absolute bg-white border border-gray-300 shadow-md w-full max-h-60 overflow-y-auto z-10">
            <input
                type="search"
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-48 overflow-y-auto">
                {countries?.map((country, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => onSelect(country)}
                    >
                        <img src={country?.flag} className="w-5 h-5" alt="flag"/>
                        <span className="text-sm font-medium">{country?.name}</span>
                        <span className="text-sm">{country?.dialCode}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null;
};