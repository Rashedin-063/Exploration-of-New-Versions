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
export async function action() {
  
}
export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className='text-2xl font-semibold my-4 text-center underline'>
        <span className="font-bold italic mr-2 text-amber-500"> Title:</span> {loaderData.title}
      </h1>
      <p className='border border-amber-400 mx-2 p-4 rounded-2xl'>
        Body: {loaderData.body}
      </p>
    </div>
  );
}