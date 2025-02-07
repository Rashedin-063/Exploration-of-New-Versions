import { useState } from 'react';
import type { Route } from './+types/countries';
import { Link } from 'react-router';

export async function clientLoader() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  return data;
}

const Countries = ({ loaderData }: Route.ComponentProps) => {
  const [search, setSearch] = useState<string>("")
  
  // const filteredCountries = loaderData?.filter((country: any) =>
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredCountries = loaderData?.filter((country: any) => {
    const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    return matchesSearch
  })

  
  return (
    <div className='px-4 lg:px-8 xl:px-16'>
      <h2 className='text-2xl font-semibold text-center my-4'>Countries</h2>
      <div className='flex items-center justify-center'>
        <input
          type='text'
          placeholder='Search by name...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border px-4 py-2 rounded-md' />
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 mt-8'>
        {filteredCountries.map((country: any, key: number) => (
          <div key={country.alpha3Code} className=' border p-6 rounded-lg text-center'>
            <Link to={`/countries/${country.name.common}`} className='text-lg font-semibold my-2'>
              {country.name.common}
            </Link>
            <div className='text-gray-600 text-sm mt-1'>
              Region: {country.region} <br />
              Population: {country.population.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Countries;
