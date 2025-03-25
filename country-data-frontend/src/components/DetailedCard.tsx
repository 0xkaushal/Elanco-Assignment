import React from 'react'

interface Currency {
    name: string;
    symbol: string;
  }
  
  interface Languages {
    [key: string]: string;  
  }
  
  interface PropType {
    name: string;
    flag: string;
    population: number;
    languages: Languages;
    region: string;
    currency: {
      [key: string]: Currency; 
    };
  }

export default function DetailedCard(props:PropType) {
    const {flag,name,population,languages,region,currency} = props
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
          <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
    <span className="text-sm font-medium text-slate-600">
      {region}
    </span>
  </div>
  <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
    <img className="w-full h-full object-cover" src={flag} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-1 text-xl font-semibold text-slate-800">
      {name}
    </h4>
     <p className="text-base text-slate-600 mt-4 font-light ">
        Population: {population.toLocaleString()}
        </p>
    <p className="text-base text-slate-600 mt-4 font-light ">
Languages
<ul>
          {Object.entries(languages).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
    </p>
    <p className="text-base text-slate-600 mt-4 font-light">
  Currency: <ul>
          {Object.entries(currency).map(([key, value]) => (
            <><li key={key}> name: {value.name}</li><li key={key}> sysmbol: {value.symbol}</li></>
          ))}
        </ul>
</p>
  </div>
</div>
  )
}
