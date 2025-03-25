import { Request, Response } from 'express';
import axios from 'axios';

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1/all';

// Get all countries
export const getCountries = async (req: Request, res: Response) => {
    const response = await axios.get(REST_COUNTRIES_API);
    const countries = response.data.map((country: any) => ({
      name: country.name.common,
      flag: country.flags.svg,
      region: country.region,
      code: country.cca2
    }));
    res.json(countries);
};

// Get country by code
export const getCountryByCode = async (req: Request, res: Response) => {
  try{
    const { code } = req.params;
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    const country = response.data[0];
    res.json({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      languages: country.languages,
      region: country.region,
      currency: country.currencies,
    });
  }
  catch(e){
  }

};

// Filter countries by region
export const filterCountriesByRegion = async (req: Request, res: Response) => {
  const { region } = req.params;
    const response = await axios.get(REST_COUNTRIES_API);
    const countries = response.data.filter((country: any) => country.region === region);
    const filteredcountries = countries.map((country: any) => ({
      name: country.name.common,
      flag: country.flags.svg,
      region: country.region,
      code: country.cca2
    }));
    res.json(filteredcountries);
};

// Search countries
export const searchCountries = async (req: Request, res: Response) => {
  try{
    const { country, capital, region, timezone } = req.query;
    const response = await axios.get(REST_COUNTRIES_API);
    let countries = response.data;
    if (country) {
      countries = countries.filter((item: any) =>
        item.name.common.toLowerCase().includes((country as string).toLowerCase())
      );
    }
    if (capital) {
      countries = countries.filter((country: any) =>
        country.capital && country.capital[0].toLowerCase().includes((capital as string).toLowerCase())
      );
    }
    if (region) {
      countries = countries.filter((country: any) => country.region.toLowerCase().includes((region as string).toLowerCase()));
    }
    if (timezone) {
      countries = countries.filter((country: any) => country.timezones.includes(timezone as string));
    }
    const filteredcountries = countries.map((country: any) => ({
      name: country.name.common,
      flag: country.flags.svg,
      region: country.region,
      code: country.cca2
    }));
    res.json(filteredcountries);
  }
  catch(e){
console.log(e)
  }


  }
