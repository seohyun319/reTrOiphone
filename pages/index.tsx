import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/common/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{/* <div>아이폰 잠금화면</div> */}</main>
    </div>
  );
};

export default Home;
