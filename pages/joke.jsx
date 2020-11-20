import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const { jokePic, spaceBetweenDiv, emojiButton, activeEmoji } = utilStyles;
  const [funny, setFunny] = useState();
  return (
    <Layout>
      <Head>
        <title>Joke</title>
      </Head>
      <img className={jokePic} src='/images/joke.jpg' alt='no pic' />
      <div className={spaceBetweenDiv}>
        <button
          className={emojiButton + ' ' + (funny === false && activeEmoji)}
          onClick={() =>
            funny || typeof funny === 'undefined' ? setFunny(false) : setFunny()
          }>
          😕
        </button>
        <button
          className={emojiButton + ' ' + (funny && activeEmoji)}
          onClick={() => (funny ? setFunny() : setFunny(true))}>
          😂
        </button>
      </div>
    </Layout>
  );
}
