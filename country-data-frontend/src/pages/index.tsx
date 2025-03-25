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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/countries');
        setCountries(response.data);
        setLoading(false);
      } catch {
        setError('Failed to load countries');
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader/></div>;
  if (error) return <p className="text-red-500">{error}</p>;

  const filteredCountries = countries.filter((country: Country) =>
    country.name.includes(searchTerm)
  );

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="mb-4">
        <label className="block text-gray-700">
          Search for a Country
        </label>
        <input
          id="search"
          type="text"
          placeholder="Enter country name"
          className="border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Header/>
      <Wall/>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (<div key={country.name}><CountryCard countryName={country.name} countryUrl={country.flag} region={country.region} code={country.code}/></div>))): (
            <p className="text-gray-500">No countries found.</p>
          )}
      
      </div>
      
    </div>
  );
};
