import Layout from '../../components/layout';
import { getAllQuotesIds, getQuotes } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function Post({
  quote: { Author, Quote, img },
}: {
  quote: { id: number; Author: string; Quote: string; img: string };
}) {
  const { authorPic, quoteArticle, headingXl, quote, backToHome } = utilStyles;
  return (
    <Layout>
      <Head>
        <title>{Author}</title>
      </Head>
      <Link href='/quotes'>
        <a>← Back to quotes</a>
      </Link>
      <article className={quoteArticle}>
        <img className={authorPic} src={img} />
        <div>
          <h1 className={headingXl + ' ' + quote}>{Author}</h1>
          <p>{Quote}</p>
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
