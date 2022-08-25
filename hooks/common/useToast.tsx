import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import tw from 'twin.macro';
import { ToastIconType, ToastRenderType } from '../../types/props';
import { Col } from '../../components/common/Layout';
import { FiAlertTriangle } from 'react-icons/fi';
import { IoCheckmarkCircleOutline, IoSadOutline } from 'react-icons/io5';

const ToastDataInit: ToastRenderType = {
  title: '팝업창',
  content: '알림내용',
  type: 'info',
};

const ToastDefalutIcon = (type: ToastIconType) => {
  if (type === 'error')
    return (
      <Icon>
        <FiAlertTriangle size="48px" color="red" />
      </Icon>
    );
  else if (type === 'success')
    return (
      <Icon>
        <IoCheckmarkCircleOutline size="48px" color="green" />
      </Icon>
    );
  else if (type === 'warning')
    return (
      <Icon>
        <IoSadOutline size="48px" color="#FFD600" />
      </Icon>
    );
  else return null;
};

const useToast = () => {
  const [isItOpen, setIsItOpen] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [toastData, setToastData] = useState<ToastRenderType>(ToastDataInit);
  const toastRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const close = (delOpt: boolean = true) => {
    if (!toastRef.current) return;
    const $modal = toastRef.current;
    $modal.style.transform = `translate3D(0px, -200%, 0px)`;

    delOpt && setTimeout(() => setIsItOpen(false), 300);
  };

  const open = (props?: ToastRenderType) => {
    if (isItOpen) close(false);

    setIsItOpen(true);
    setToastData({ ...ToastDataInit, ...props });

    setTimeout(() => {
      if (!toastRef.current) return;
      const $modal = toastRef.current;
      $modal.style.transform = `translate3D(0px, 0px, 0px)`;

      // 타임아웃 클리어 함수를 여기에 두어야, 마지막 여러 open이 있어도, 마지막에 불린 타임아웃만 실행되어,
      // 타임아웃이 여러번 실행되는 문제를 막을 수 있음
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => {
        close();
      }, 3000);
    }, 0);
  };

  // useCallback의 중요성...!
  // 만약 useCallback을 사용하지 않으면, 부모컴포의 상태가 변경되면 해당 컴포넌트도 다시 렌더링되면서,
  // 모달 창이 닫히게 되는 문제가 발생함.
  const Render = useCallback(() => {
    if (!isBrowser) return <Hidden />;

    const ModalComponent = isItOpen ? (
      <Container ref={toastRef}>
        {toastData.icon ? <Icon>toastData.icon</Icon> : ToastDefalutIcon(toastData.type)}

        <Col>
          <Title onClick={() => console.log(toastData)}>{toastData.title}</Title>
          <Content>{toastData.content}</Content>
        </Col>
      </Container>
    ) : null;

    return createPortal(
      ModalComponent,
      // @ts-ignore
      document.getElementById('toast'),
    );
  }, [isBrowser, isItOpen, toastData]);

  return { open, Render };
};

export default useToast;

const Container = tw.div`
  absolute
  top-5
  left-0
  right-0
  min-h-[80px]
  w-full
  max-w-[600px]
  min-w-[320px]
  m-auto
  overflow-hidden
  rounded-lg
  transform-gpu
  -translate-y-full
  transition-all
  duration-300
  shadow-lg
  flex
  flex-row
  items-center
  p-2
  bg-white
  backdrop-blur-3xl
  border
`;

const Icon = tw.div`
  flex
  items-center
  justify-center
  w-[64px]
  h-[64px]
  rounded-full
`;

const Title = tw.div`
  w-full
  px-5
  font-bold
  text-gray-900
`;

const Content = tw.div`
  w-full
  px-5
  text-gray-600
`;

const Hidden = tw.div`
  hidden
`;
