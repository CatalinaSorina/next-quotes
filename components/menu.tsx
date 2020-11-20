import styles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link href='/quotes'>
        <a className={styles.spaceEvenlyDiv}>
          Quotes
          <img style={{ width: '200px' }} src='/images/think.webp' />
        </a>
      </Link>
      <Link href='/joke'>
        <a className={styles.spaceEvenlyDiv}>
          <img style={{ width: '170px' }} src='/images/laugh.png' />
          Joke of the day
        </a>
      </Link>
      <Link href='/contact'>
        <a className={styles.spaceEvenlyDiv}>
          Contact
          <img style={{ width: '50px' }} src='/images/texting.gif' />
        </a>
      </Link>
    </div>
  );
}
