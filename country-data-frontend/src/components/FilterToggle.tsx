import React from 'react';

type PropType = {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<"Region" | "Country" | "Capital">>;
}

export default function FilterToggle(props:PropType) {
  // State to track the selected value (low, medium, high)

  const {filter,setFilter} = props

  // Function to handle the toggle change
  const handleChange = (newValue: 'Region' | 'Country' | 'Capital') => {
   setFilter(newValue)
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Low Button */}
      <div
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
            filter === 'Region'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
        }`}
        onClick={() => handleChange('Region')}
      >
        Region
      </div>

      {/* Medium Button */}
      <div
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
            filter === 'Country'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
        }`}
        onClick={() => handleChange('Country')}
      >
        Country
      </div>

      {/* High Button */}
      <div
        className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${
            filter === 'Capital'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
        }`}
        onClick={() => handleChange('Capital')}
      >
        Capital
      </div>
    </div>
  );
}
