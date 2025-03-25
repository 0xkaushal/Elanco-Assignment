import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../components/Loader';

export default function CountryPage() {
  interface Country {
    name: string;
    population : string;
  } 
  interface CountryCode {
    code?: string;
  }

  const router = useRouter();
  
  const [countries, setCountries] = useState<Country>({
      name: '',
      population:''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const { code } = router.query as CountryCode;

    // Check if `code` is available before fetching
    if (code) {
      const fetchCountriesbyCode = async (code: string) => {
        try {
          console.log(`Fetching countries for code: ${code}`);
          const response = await axios.get(`http://localhost:3001/countries/${code}`);
          setCountries(response.data);
          setLoading(false);
        } catch (error) {
          setError('Failed to load countries' + error);
          setLoading(false);
        }
      };

      fetchCountriesbyCode(code);
    }
  }, [router.query]); // Dependency on router.query ensures re-fetching when query changes

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader/></div>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1>Country Data</h1>
{countries.name}
{countries.population}
    </div>
  );
}