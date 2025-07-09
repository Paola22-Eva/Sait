import Link from "next/link";
import NewsComponent from "../ui/news-component";



export default async function Home() {

  return (
    <div className="bg-white items-center justify-items-center min-h-screen  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-black text-4xl text-center">News</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NewsComponent/>
        <Link className='bg-blue-500 p-6 rounded-lg shadow-md' href='./'>На главную</Link>
        
      </main>
    </div>
  );
}
