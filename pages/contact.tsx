import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { event } from '../utils/gtag';

export default function Contact() {
  const onSubmit = () => {
    event({
      action: 'submit contact form',
      category: 'contact form',
      label: 'user has send a message successfuly',
      value: 0,
    });
  };
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmit}
      >
        <textarea
          placeholder="write your thoughts"
          className={utilStyles.contactMsg}
        />
        <button className={utilStyles.contactSend}>send</button>
      </form>
    </Layout>
  );
}
