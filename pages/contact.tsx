import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <textarea
          placeholder='write your thoughts'
          className={utilStyles.contactMsg}
        />
        <button className={utilStyles.contactSend}>send</button>
      </form>
    </Layout>
  );
}
