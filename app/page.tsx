import Link from "next/link";

export default function Home() {
  return (
    
    <div className=" bg-white grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen gap-16 sm:p-20 text-black">
      <h1 className="text-3xl">site-assignment</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 row-start-2 items-center sm:items-start ">
        
        <div key={1} className="bg-gray-500 p-6 rounded-lg shadow-md text-5xl text-center">
          <Link href='/news'>News</Link>
        </div>
        <div key={2} className="bg-gray-500 p-6 rounded-lg shadow-md text-5xl">
          <Link href='https://github.com/Linksapp/'>Github</Link>
        </div>
        
      </main>
    </div>
  );
}
