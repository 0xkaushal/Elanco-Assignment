import React from 'react'
import SearchBar from './SearchBar'

type PropType = {
    searchTerm: string;
    filter: string;
    setFilterType: React.Dispatch<React.SetStateAction<string | ''>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string | ''>>;
}

export default function Wall(props:PropType) {
    const {searchTerm,setSearchTerm,setFilterType} = props;
  return (
//     <div className="grid grid-cols-2 divide-x divide-gray-400">
//   <div className="image-container w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(https://media.istockphoto.com/id/185243094/photo/usa-flag-pin-in-international-collection.jpg?s=612x612&w=0&k=20&c=QpThK0Qx4Q9MGGQ-ivcUm0FZwS15Qd0Tx9SyytzIvU0=)` }}>
//     </div>
  <div className="flex m-5 items-center justify-center"><SearchBar updatefilterType ={setFilterType} searchTerm= {searchTerm}updateSearchTerm={setSearchTerm}/></div>
// </div> 
  )
}
