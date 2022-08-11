import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Notch />
      <main className={styles.main}>{/* <div>아이폰 잠금화면</div> */}</main>
    </div>
  );
};

export default Home;

const Notch = tw.div`
  absolute
  top-0
  left-0
  right-0
  w-[50%]
  max-w-[234px]
  h-[2.5rem]
  bg-black
  rounded-b-3xl
  transform
  mx-auto
`;
