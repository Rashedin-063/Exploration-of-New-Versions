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
      <ul>
        {loaderData.map((country) => (
          <li key={country.alpha3Code}>
            <Link>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Countries;
