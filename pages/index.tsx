import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Menu from '../components/menu';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Menu />
    </Layout>
  );
}
