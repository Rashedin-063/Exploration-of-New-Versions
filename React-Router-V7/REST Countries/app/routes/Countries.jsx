// import type { Route } from './+types/countries';

export async function clientLoader() {
  const res = await fetch();
  const data = await res.json('https://restcountries.com/v3.1/all');
  return data;
}

const Countries = ({ loaderData }) => {
  return <div>Countries</div>;
};
export default Countries;
