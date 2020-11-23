import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const { jokePic, spaceBetweenDiv, emojiButton, activeEmoji } = utilStyles;
  const [funny, setFunny] = useState<boolean>();
  const setEmoji = (like) => {
    if (like) {
      // IF EMOJI IS LIKE
      if (funny) {
        // IF LIKE IS ALREADY SET, REMOVE LIKE
        setFunny(undefined);
        console.log('user removed like');
      } else {
        // SET LIKE
        setFunny(true);
        console.log('user likes joke');
      }
    } else {
      // IF EMOJI IS DISLIKE
      if (funny || typeof funny === 'undefined') {
        // SET DISLIKE
        setFunny(false);
        console.log('user dislikes joke');
      } else {
        // IF DISLIKE IS ALREADY SET, REMOVE DISLIKE
        setFunny(undefined);
        console.log('user removed dislike');
      }
    }
  };
  return (
    <Layout>
      <Head>
        <title>Joke</title>
      </Head>
      <img className={jokePic} src="/images/joke.jpg" alt="no pic" />
      <div className={spaceBetweenDiv}>
        <button
          className={emojiButton + ' ' + (funny === false && activeEmoji)}
          onClick={() => setEmoji(false)}
        >
          😕
        </button>
        <button
          className={emojiButton + ' ' + (funny && activeEmoji)}
          onClick={() => setEmoji(true)}
        >
          😂
        </button>
      </div>
    </Layout>
  );
}
