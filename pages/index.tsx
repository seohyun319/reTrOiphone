import type { NextPage } from 'next';
import Header from '../components/common/Header';
import useSlideUpModal from '../hooks/common/useSlideModal';
import { useRef } from 'react';
import styled from '@emotion/styled';
import Dock from '../components/Home/Dock';
import Apps from '../components/Home/Apps';

const Home: NextPage = () => {
  const backRef = useRef<HTMLDivElement>(null);
  const SlideUpModal = useSlideUpModal(backRef);

  return (
    <BackgroundContainer>
      {/* <SlideUpModal.Render /> */}
      <Header />
      <Apps />
      <Dock />
    </BackgroundContainer>
  );
};

export default Home;

const BackgroundContainer = styled.div`
  height: 100vh;
  background: url('/ios/backgound.jpeg');
  background-size: cover;
`;
