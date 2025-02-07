import type { Route } from "./+types/Country";



export async function clientLoader({params}: Route.LoaderArgs) {
const res = await fetch(
  `https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`
);
  const data = await res.json();
  console.log(data);
  
return data;
}

const Country = ({loaderData}: Route.ComponentProps) => {

  const country = {
    name: loaderData[0]?.name?.common || 'N/A',
    officialName: loaderData[0]?.name?.official || 'N/A',
    region: loaderData[0]?.region || 'N/A',
    subregion: loaderData[0]?.subregion || 'N/A',
    capital: loaderData[0]?.capital || 'N/A',
    population: loaderData[0]?.population || 'N/A',
    flagUrl: loaderData[0]?.flags?.png || '',
  };


  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto items-center mt-36'>
      <div className='flex flex-col gap-4 bg-white shadow-sm rounded-md hover:shadow-lg transition duration-150 ease-in p-4'>
        <h2 className='text-3xl font-bold text-gray-900'>{country.name}</h2>
        <div className='space-y-2 text-gray-700'>
          <p>
            <span className='font-semibold'>Official Name:</span>{' '}
            {country.officialName}
          </p>
          <p>
            <span className='font-semibold'>Capital:</span> {country.capital}
          </p>
          <p>
            <span className='font-semibold'>Region:</span> {country.region}
          </p>
          <p>
            <span className='font-semibold'>Subregion:</span>{' '}
            {country.subregion}
          </p>
          <p>
            <span className='font-semibold'>Population:</span>{' '}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
      {country.flagUrl && (
        <div className='flex justify-center items-center'>
          <img
            src={country.flagUrl}
            className=' h-auto border rounded shadow-lg'
          />
        </div>
      )}
    </div>
  );
}
export default Country