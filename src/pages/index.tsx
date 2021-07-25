import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Image from 'next/image';
import { fetchAPI } from '@/lib/api';
import { useThemeContext } from '@/components/core/ThemeContext';

const Background = styled(`main`)`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
interface PropsHome {
  articles: any;
  categories: any;
  homepage: any;
}

export default function Home({ articles, categories, homepage }: PropsHome) {
  const { setDark, setLight } = useThemeContext();
  return (
    <>
      <Head>
        <title>Johan Petrikovsky - Développeur Web à Toulouse</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button type="button" onClick={setLight}>
        set light
      </button>
      <button type="button" onClick={setDark}>
        set dark
      </button>

      <Background>
        <ReactMarkdown>{articles[3].content}</ReactMarkdown>
      </Background>

      <footer />
    </>
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
