import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getQuotes } from '../lib/posts';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export default function Quotes({
  quotes,
}: {
  quotes: { id: number; Author: string; Quote: string; img: string }[];
}) {
  const { headingMd, headingLg, quotesList, quotesListItem } = utilStyles;
  return (
    <Layout>
      <Head>
        <title>Quotes</title>
      </Head>
      <section className={headingMd}>
        <p>Find your quote.</p>
        <h2 className={headingLg}>Quotes</h2>
        <ul className={quotesList}>
          {quotes.map(({ Author, img }, index) => (
            <li className={quotesListItem} key={index + 'quote'}>
              <Link href={`/quotes/${Author.replace(/ /g, '')}`}>
                <img src={img} alt='no pic' />
              </Link>
              {Author}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const quotes = await getQuotes();
  return { props: { quotes } };
};
