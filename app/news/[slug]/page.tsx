import { getAllNews } from "@/lib/data"
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{
      slug: string;
    }>;
  };
export default async function Page(props: Props) {
    const { slug } = await props.params
    const newId = Number(slug)-1
    const newsData = await getAllNews();
    return (
        <div className="bg-white text-black min-h-screen">
            <main>
                <h1 className="text-center decoration-solid text-3xl font-bold">{newsData[newId].title}</h1>
                <h2 className="text-center text-lg">{newsData[newId].excerpt}</h2>
                <div className="px-40">
                    Author: {newsData[newId].author} <br/>
                    Date: {newsData[newId].date.toDateString()} <br/>
                    <p className="text-justify">{newsData[newId].text}</p>
                </div>
                <div className="flex justify-center">
                    <Image
                    src={newsData[newId].image}
                    alt={newsData[newId].title}
                    width={632}
                    height={355.5}
                    />
                </div>
                <div className="text-center">
                    <Link href={newsData[newId].source}>{newsData[newId].source}</Link>
                </div>
                <Link className='bg-blue-500 p-4 rounded-lg shadow-md' href='./'>Назад</Link>
            </main>
            
            
        </div>
        
    )
}