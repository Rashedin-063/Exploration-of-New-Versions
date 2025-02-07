import type { Route } from './+types/countries';
import { Link } from 'react-router';

export async function clientLoader() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  return data;
}

const Countries = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData)
  
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {loaderData?.map((country: any, key: number) => (
          <li key={country.alpha3Code}>
            <Link to={`/countries/${country.name.common}`}>{country.name.common}</Link>
            <div className='text-gray-600 text-sm mt-1'>
              Region: {country.region} <br />
              Population: {country.population.toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Countries;
