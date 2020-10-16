import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getQuotes } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home({ quotes, allPostsData }: {
  quotes: { id: number; Author: string; Quote: string; img: string; }[];
  allPostsData: { date: string; title: string; id: string; }[];
}) {
  const { headingMd, headingLg, quotesList, quotesListItem, padding1px, list, listItem, lightText } = utilStyles;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={headingMd}>
        <p>Find your quote.</p>
        <h2 className={headingLg}>Quotes</h2>
        <ul className={quotesList}>
          {quotes.map(({ id, Author, img }, index) => (
            <li className={quotesListItem} key={index+"quote"}>
              <Link href={`/quotes/${Author.replace(/ /g,'')}`}>
                <img src={img} />
              </Link>
              {Author}
            </li>
          ))}
        </ul>
      </section>
      <section className={`${headingMd} ${padding1px}`}>
        <p>(Blog more about Next.js)</p>
        <h2 className={headingLg}>Blog</h2>
        <ul className={list}>
          {allPostsData.map(({ id, date, title }, index) => (
            <li className={listItem} key={index+title}>
              <Link href={`/posts/${id}`}>
                <a>
                  {index + 1}. {title}
                </a>
              </Link>
              <br />
              <small className={lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  const quotes = await getQuotes();
  return {
    props: {
      quotes,
      allPostsData,
    },
  };
};
