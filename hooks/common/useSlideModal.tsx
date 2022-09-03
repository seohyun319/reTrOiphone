import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import tw from 'twin.macro';
import { ModalRenderType } from '../../types/props';
import Text from '../../components/common/Text';

const PopUpDataInit: ModalRenderType = {
  bodyNode: 'hi',
  title: '모달창',
};

const useSlideUpModal = (backRef?: RefObject<HTMLDivElement>) => {
  const [isItOpen, setIsItOpen] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [popUpData, setPopUpData] = useState<ModalRenderType>(PopUpDataInit);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
  }, []);

  const open = ({ bodyNode, title = '팝업창' }: ModalRenderType) => {
    setIsItOpen(true);
    setPopUpData({ ...PopUpDataInit, bodyNode, title });

    if (backRef?.current) {
      const $backRef = backRef.current;
      $backRef.style.transform = 'scale(0.95)';
      $backRef.style.transition = 'all 0.35s linear';
      $backRef.style.borderRadius = '1rem';
      $backRef.style.opacity = '0.8';
    }

    setTimeout(() => {
      if (!modalRef.current) return;
      const $modal = modalRef.current;
      $modal.style.transform = `translate3D(0px, 0px, 0px)`;
    }, 0);
  };

  const close = useCallback(() => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
    $modal.style.transform = `translate3D(0px, 200%, 0px)`;

    if (backRef?.current) {
      const $backRef = backRef.current;
      $backRef.style.transform = '';
      $backRef.style.transition = 'all 0.35s linear';
      $backRef.style.borderRadius = '';
      $backRef.style.opacity = '';
    }

    setTimeout(() => {
      setIsItOpen(false);
    }, 300);
  }, [backRef]);

  const Render = useCallback(() => {
    if (!isBrowser) return <Hidden />;
    const ModalComponent = isItOpen ? (
      <Container ref={modalRef}>
        <Header>
          <HeaderLeft>___</HeaderLeft>
          <HeaderCenter>{popUpData.title}</HeaderCenter>
          <HeaderRight>
            <Text onClick={close}>Done</Text>
          </HeaderRight>
        </Header>
        <Body>{popUpData.bodyNode}</Body>
      </Container>
    ) : null;

    return createPortal(
      ModalComponent,
      // @ts-ignore
      document.getElementById('slide-up-modal'),
    );
  }, [isBrowser, isItOpen, popUpData, close]);

  return { open, close, Render };
};

export default useSlideUpModal;

const Container = tw.div`
  absolute
  top-16
  left-0
  right-0
  bottom-0
  // h-[400px]
  w-[400px]
  m-auto
  overflow-hidden
  rounded-lg
  transform-gpu
  translate-y-[200%]
  transition-all
  duration-300
  shadow-lg
  border
`;

const Header = tw.div`
  flex
  justify-between
  bg-gray-100
  h-[2.5rem]
  items-center
  border-b
  px-5
`;

const HeaderLeft = tw.div`
  invisible
  w-2/3
  text-left
`;

const HeaderCenter = tw.div`
  w-2/3
  text-center
`;

const HeaderRight = tw.div`
  text-blue-500
  w-2/3
  text-right
  cursor-pointer
`;

const Body = tw.div`
  h-full
  bg-gray-100
  p-3
`;

const Hidden = tw.div`
  hidden
`;
