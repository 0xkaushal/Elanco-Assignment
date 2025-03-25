import React from 'react';

type PropType = {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<"Region" | "Country" | "Capital">>;
}

export default function FilterToggle(props:PropType) {

  const {filter,setFilter} = props

  const handleChange = (newValue: 'Region' | 'Country' | 'Capital') => {
   setFilter(newValue)
  };

  return (
    <div className="flex items-center space-x-4">
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
