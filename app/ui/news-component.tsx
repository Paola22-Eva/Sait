import { getAllNews } from "@/lib/data"
import Link from "next/link"
import React from "react"


export default async function NewsComponent() {
    const newsData = await getAllNews()

    return (
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((elem) => (
          <div key={elem.id} className="bg-blue-500 p-6 rounded-lg shadow-md">
            <Link href={`/news/${elem.id}`} className="text-white text-lg font-bold">{elem.title}</Link> <br/>
            <Link href={`/news/${elem.id}`} className="text-white">{elem.excerpt}</Link>
          </div>
        ))}
      </div>
    </div>
    )
}
