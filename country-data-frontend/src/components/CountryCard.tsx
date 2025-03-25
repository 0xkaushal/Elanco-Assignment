import React from 'react'
import Link from 'next/link';

type CountryCardType ={
    countryUrl: string;
    countryName: string;
    region: string;
    code: string;
}

export default function CountryCard({ countryUrl, countryName, region, code}:CountryCardType) {
  return (
    <div className="max-w-sm m-3 rounded overflow-hidden transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
  <Link href={`/countries/code/${code}`}><img className="w-full h-64 object-cover transition duration-300 ease-in-out hover:scale-110" src={countryUrl} alt="Sunset in the mountains"/></Link>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{countryName}</div>
    <p className="text-gray-700 text-base">
      {region}    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#text</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#text</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#text</span>
  </div>
</div>
  )
}
