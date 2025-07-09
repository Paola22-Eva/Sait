import { preparedNews } from "../lib/readyNews";
import prisma from "../lib/db";

async function main() {
    const newsArray = await preparedNews()
    for (const newsData of newsArray) {
        await prisma.news.upsert({
            where: { title: newsData.title },
            update: {
                date: newsData.date,
                excerpt: newsData.excerpt,
                text: newsData.text,
                source: newsData.source,
                author: newsData.author,
                image: newsData.image,
            },
            create: {
                title: newsData.title,
                date: newsData.date,
                excerpt: newsData.excerpt,
                text: newsData.text,
                source: newsData.source,
                author: newsData.author,
                image: newsData.image,
            },
        });
        console.log(`Upserted news: ${newsData.title}`);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })