import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';
import Wall from '../components/wall';
import Loader from '../components/Loader';



export default function Home() {

  interface Country {
    name: string;
    flag: string;
    region: string;
    code: string;
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const options =buildOptions(filterType,searchTerm)
        await axios(options).then((response)=>{
          setCountries(response.data);
          setLoading(false);
        }).catch((error)=>{
          console.log(`Error Occurred with ${error}`)
        }); 

      } catch {
        setError('Failed to load countries');
        setLoading(false);
      }
    };
    fetchCountries();
  }, [filterType,searchTerm]);

  const buildOptions = (filterType: string, searchString: string) => {
    const queryParams = buildQuery(filterType, searchString);
  
    const baseUrl = searchString == '' ? 'http://localhost:3001/countries' : 'http://localhost:3001/countries/search/';
  
    const options = {
      method: "GET",
      url: baseUrl,
      params: queryParams,
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    return options;
  };

  const buildQuery = (filterType: string, searchString: string) => {
    const queryParams: { [key: string]: string } = {};
  
    if (filterType === "Capital") {
      queryParams.capital = searchString;
    }
  
    if (filterType === "Region") {
      queryParams.region = searchString;
    }
  
    if (filterType === "Country") {
      queryParams.country = searchString;
    }
  
    return queryParams;
  };
  

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader/></div>;
  if (error) return <p className="text-red-500">{error}</p>;


  return (
    <div >
      <Header/>
      <Wall filter={filterType} setFilterType={setFilterType} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.length > 0 ? (
          countries.map((country) => (<div key={country.name}><CountryCard countryName={country.name} countryUrl={country.flag} region={country.region} code={country.code}/></div>))): (
            <p className="text-gray-500">No countries found.</p>
          )}
      
      </div>
      
    </div>
  );
};
