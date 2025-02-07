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
  const [region, setRegion] = useState<string>("")
  
  // const filteredCountries = loaderData?.filter((country: any) =>
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredCountries = loaderData?.filter((country: any) => {
    const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())

    const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase()
    return matchesRegion && matchesSearch
  })

  
  return (
    <div className='px-4 lg:px-8 xl:px-16'>
      <h2 className='text-2xl font-semibold text-center my-4'>Countries</h2>
      <div className='flex items-center justify-center gap-4'>
        {/* search input */}
        <input
          type='text'
          placeholder='Search by name...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border px-4 py-2 rounded-md'
        />
        {/* select */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className='border px-4 py-2 rounded-md'
        >
          <option value=''>All Regions</option>
          <option value='africa'>Africa</option>
          <option value='americas'>Americas</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>
      <div className=' mt-8'>
        {filteredCountries.length === 0 ? (
          <div> No countries match your filters. </div>
        ) : (
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-center'>
            {filteredCountries.map((country: any) => (
              <li
                key={country.cca3}
                className='bg-white border border-gray-200 rounded-xl p-4 lg:p-6 shadow hover:shadow-lg transition'
              >
                <Link
                  to={`/countries/${country.name.common}`}
                  className='text-indigo-600 hover:underline text-lg font-semibold'
                >
                  {country.name.common}
                </Link>
                <div className='text-gray-600 text-sm mt-1'>
                  Region: {country.region} <br />
                  Population: {country.population.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Countries;
