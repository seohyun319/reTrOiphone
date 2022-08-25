import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import tw from 'twin.macro';
import { ModalRenderType } from '../../types/props';
import Text from '../../components/common/Text';

const PopUpDataInit: ModalRenderType = {
  bodyNode: 'hi',
  title: '모달창',
};

const usePopUp = () => {
  const [isItOpen, setIsItOpen] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [popUpData, setPopUpData] = useState<ModalRenderType>(PopUpDataInit);
  const modalRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsBrowser(true);
    // @ts-ignore
    // backRef.current = document.getElementById('__next');
  }, []);

  const open = ({ bodyNode, title = '팝업창' }: ModalRenderType) => {
    setIsItOpen(true);
    setPopUpData({ ...PopUpDataInit, bodyNode, title });

    setTimeout(() => {
      if (!modalRef.current) return;
      const $modal = modalRef.current;
      $modal.style.transform = `translate3D(0px, 0px, 0px)`;
    }, 0);
  };

  const close = () => {
    if (!modalRef.current) return;
    const $modal = modalRef.current;
    $modal.style.transform = `translate3D(0px, 200%, 0px)`;

    setTimeout(() => {
      setIsItOpen(false);
    }, 300);
  };

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
      document.getElementById('pop-up-modal'),
    );
  }, [isBrowser, isItOpen, popUpData]);

  return { open, close, Render };
};

export default usePopUp;

const Container = tw.div`
  absolute
  top-0
  left-0
  right-0
  bottom-0
  h-[400px]
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
  text-green-500
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
