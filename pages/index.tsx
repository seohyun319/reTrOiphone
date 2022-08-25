import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/common/Header';
import useSlideUpModal from '../hooks/common/useSlideModal';
import { useRef } from 'react';
import tw from 'twin.macro';

const Home: NextPage = () => {
  const backRef = useRef<HTMLDivElement>(null);
  const SlideUpModal = useSlideUpModal(backRef);

  return (
    <div className={styles.container}>
      <Header />
      <TmpBack ref={backRef}>
        <SlideUpModal.Render />
        <main className={styles.main} onClick={() => SlideUpModal.open({})}>
          슬라이드 업 모달 열기
        </main>
      </TmpBack>
    </div>
  );
};

export default Home;

const TmpBack = tw.div`
bg-blue-800
`;
