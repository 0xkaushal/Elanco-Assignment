import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '@/src/components/Loader';  // Assuming you have a loader component
import CountryCard from '@/src/components/CountryCard';
import Header from '@/src/components/Header';

export default function Region() {
  interface Country {
    name: string;
    flag: string;
    region: string;
    code: string;
  }

  interface CountryRegion {
    region?: string;
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    setLoading(true)
    const { region } = router.query as CountryRegion;  // Destructure region from router.query

    if (region) {
      const fetchCountriesbyRegion = async (region: string) => {
        try {
          console.log(`Fetching countries for region: ${region}`);
          const response = await axios.get(`http://localhost:3001/countries/region/${region}`);
          setCountries(response.data);  // Set countries in state
          setLoading(false);  // Mark loading as false once the data is fetched
        } catch (error) {
          setError('Failed to load countries: ' + error);
          setLoading(false);  // Handle errors and mark loading as false
        }
      };

      fetchCountriesbyRegion(region);
    }
  }, [router.query]);  // Re-run the effect when `router.query` changes (region)


  // Handle error state
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    
    <div>
        <Header/>
        {loading && ( <div className="flex justify-center items-center h-screen"><Loader /></div>)}
      <div className="grid grid-cols-4 gap-4">
        {countries.length >0 ?(
          countries.map((country) => (<div key={country.code}><CountryCard countryName={country.name} countryUrl={country.flag} region={country.region} code={country.code}/></div>))):( <p className="text-gray-500">No countries found for this region.</p>)}
      </div>
    </div>
  );
}
