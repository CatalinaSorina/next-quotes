import Layout from '../../components/layout';
import { getAllQuotesIds, getQuotes } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { event } from '../../utils/gtag';

export default function Post({
  quote: { Author, Quote, img },
}: {
  quote: { id: number; Author: string; Quote: string; img: string };
}) {
  const { authorPic, quoteArticle, headingXl, quote } = utilStyles;
  let start: any;
  useEffect(() => {
    start = new Date();
  }, []);
  const calculateTimeSpent = () => {
    const end: any = new Date();
    const allSeconds = Math.abs(end - start) / 1000;
    const secWithoutMinutes: number = Math.floor(allSeconds % 60);
    const minutes = Math.floor((allSeconds - secWithoutMinutes) / 60);
    event({
      action: `${minutes}'${secWithoutMinutes}" quote watched`,
      category: 'quotes',
      label: `user saw quote for ${minutes}'${secWithoutMinutes}" and returned to other quotes`,
    });
  };
  return (
    <Layout additionalBack={calculateTimeSpent}>
      <Head>
        <title>{Author}</title>
      </Head>
      <article className={quoteArticle}>
        <img className={authorPic} src={img} />
        <div>
          <h1 className={headingXl + ' ' + quote}>{Author}</h1>
          <p>{Quote}</p>
          <div onClick={calculateTimeSpent}>
            <Link href='/quotes'>
              <a>See more quotes →</a>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllQuotesIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { author },
}) => {
  const res = await getQuotes();
  const quote = res.find(obj => obj.Author.replace(/ /g, '') === author);
  return {
    props: {
      quote,
    },
  };
};
