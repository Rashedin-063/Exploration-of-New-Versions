import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="min-h-screen flex justify-center items-center text-3xl text-amber-600 bg-gray-800">
    Home
  </div>;
}
