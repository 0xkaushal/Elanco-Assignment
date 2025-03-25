import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../components/Loader';
import DetailedCard from '@/src/components/DetailedCard';
import Header from '@/src/components/Header';

export default function CountryPage() {
  interface Currency {
    name: string;
    symbol: string;
  }
  
  interface Languages {
    [key: string]: string;  
  }
  
  interface Country {
    name: string;
    flag: string;
    population: number;
    languages: Languages;
    region: string;
    currency: {
      [key: string]: Currency; 
    };
  }
  interface CountryCode {
    code?: string;
  }

  const router = useRouter();
  
  const [countries, setCountries] = useState<Country>({
    flag: '',
    name: '',
    population:0,
    languages:{'':''},
    region: '',
    currency:{'':{name:'',symbol:''}},
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const { code } = router.query as CountryCode;

    if (code) {
      const fetchCountriesbyCode = async (code: string) => {
        try {
          const response = await axios.get(`http://localhost:3001/countries/code/${code}`);
          setCountries(response.data);
          setLoading(false);
        } catch (error) {
          setError('Failed to load countries' + error);
          setLoading(false);
        }
      };

      fetchCountriesbyCode(code);
    }
  }, [router.query]);

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader/></div>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
    <Header/>
    <div className='flex m-5 items-center justify-center'>
      <DetailedCard flag={countries.flag} name={countries.name} population={countries.population} languages={countries.languages} region={countries.region} currency={countries.currency} />
    </div>
    </div>
  );
}