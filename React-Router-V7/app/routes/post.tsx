import { Form, redirect, useFetcher, useNavigate } from "react-router";
import type { Route } from "./+types/post";

// client loader
export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return res.json();
}
// loader
// export async function loader({ params }: Route.LoaderArgs) {
//   const product = await db.getProduct(params.id)
// }
export async function clientAction({params}: Route.ClientActionArgs) {
 try {
   await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
     method: 'DELETE',
   });
   return { isDeleted: true };
 } catch (error) {
    return { isDeleted: false };
 }
}
export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate()
  
  const isDeleted = fetcher.data?.isDeleted;
  return (
    <div>
      {isDeleted ? (
        <div>
          <h1 className='text-2xl font-semibold my-4 text-center underline'>
            <span className='font-bold italic mr-2 text-amber-500'>
              {' '}
              Title:
            </span>{' '}
            {loaderData.title}
          </h1>
          <p className='border border-amber-400 mx-2 p-4 rounded-2xl'>
            Body: {loaderData.body}
          </p>
        </div>
      ) : 'Data Deleted Successfully'}

      <div>
      <button className="bg-rose-700 px-6 py-2 rounded-md" onClick={() => navigate('/')}>Redirect</button>
      </div>

      <div className='w-1/2 mx-auto my-8'>
        <fetcher.Form method='delete'>
          <button type='submit' className='px-6 py-2 bg-orange-700 rounded-lg'>
            Delete
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}