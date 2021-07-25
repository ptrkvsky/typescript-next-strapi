import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api';

interface PropsHome {
  articles: any;
  categories: any;
  homepage: any;
}

export default function Home({ articles, categories, homepage }: PropsHome) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ReactMarkdown>{articles[3].content}</ReactMarkdown>
      </main>

      <footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI(`/articles`),
    fetchAPI(`/categories`),
    fetchAPI(`/homepage`),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}
