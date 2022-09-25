import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import tw from 'twin.macro';
import { ModalRenderType } from '../../types/props';
import Spacer from '../../components/common/Spacer';
import Image from 'next/image';
import { getDate, getTime } from '../../util/date';

const PopUpDataInit: ModalRenderType = {
  bodyNode: 'hi',
  title: '모달창',
};

const useSlideUpModal = (backRef?: RefObject<HTMLDivElement>) => {
  const [isItOpen, setIsItOpen] = useState<boolean>(true);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [popUpData, setPopUpData] = useState<ModalRenderType>(PopUpDataInit);
  const modalRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const onMoveSlide = (e: TouchEvent) => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
    const scrollBarLoc = e.targetTouches[0].clientY - window.screen.height;
    if (scrollBarLoc > 0) return;
    $modal.style.transform = `translate3D(0px, ${scrollBarLoc}px, 0)`;
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    console.log('fail');
    if (!slideRef.current) {
      close();
      return;
    }
    console.log('ok');
    const $slide = slideRef.current;
    $slide.addEventListener('touchmove', onMoveSlide);

    return () => {
      $slide.removeEventListener('touchmove', onMoveSlide);
    };
  }, []);

  const open = () => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
    $modal.style.transition = 'all 0.3s linear';
    $modal.style.transform = `translate3D(0px, -100%, 0px)`;
  };

  const close = useCallback(() => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
    $modal.style.transition = 'all 0.3s linear';
    $modal.style.transform = `translate3D(0px, 0px, 0px)`;
  }, [modalRef]);

  const Render = useCallback(() => {
    if (!isBrowser) return <Hidden />;
    const { hour, minutes } = getTime();
    const { month, day, date } = getDate();

    const ModalComponent = isItOpen ? (
      <Container ref={modalRef}>
        <Body>
          <Spacer height="1.5rem" />
          <Lock>
            <Image src={'/ios/face-id.gif'} width="52px" height="42px" alt="faceid unlock" />
          </Lock>
          <Spacer height="1.5rem" />
          <Clock>
            {hour}:{minutes}
          </Clock>
          <Day>
            {month + 1}월 {date}일 {day}
          </Day>
          <SlideContainer ref={slideRef}>
            <SlideBar />
          </SlideContainer>
        </Body>
      </Container>
    ) : null;

    return createPortal(
      ModalComponent,
      // @ts-ignore
      document.getElementById('slide-up-modal'),
    );
  }, [isBrowser, isItOpen]);

  return { Render };
};

export default useSlideUpModal;

const Container = tw.div`
  absolute
  min-w-[300px]
  top-0
  left-0
  right-0
  bottom-0
  w-full
  m-auto
  overflow-hidden
  rounded-lg
  transform-gpu
  shadow-lg
  bg-white
  pt-10
  bg-ios-background
  bg-cover
`;

const SlideContainer = tw.div`
  w-40
  h-16
  bottom-3
  right-0
  left-0
  m-auto
  z-10
  absolute
`;

const SlideBar = tw.div`
  absolute
  bottom-0
  w-40
  h-2
  rounded-md
  bg-black
`;

const Body = tw.div`

`;

const Hidden = tw.div`
  hidden
`;

const Clock = tw.div`
  text-white
  text-6xl
  text-center
`;

const Day = tw.div`
  text-white
  text-xl
  text-center
`;

const Lock = tw.div`
  flex
  justify-center
`;
