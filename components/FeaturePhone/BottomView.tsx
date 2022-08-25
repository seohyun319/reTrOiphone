import tw from 'twin.macro';
import { FcCallback, FcEndCall } from 'react-icons/fc';

export const BottomView = () => {
  return (
    <>
      <BottomCont>
        <Row>
          <Button>―</Button>
          <NotButton></NotButton>
          <Button>―</Button>
        </Row>
        <Row>
          <NumberButton>
            <FcCallback />
          </NumberButton>
          <CircleButton>
            <CircleButton>nate</CircleButton>
          </CircleButton>
          <NumberButton>
            <FcEndCall />
          </NumberButton>
        </Row>
        <Row>
          <NumberButton>1</NumberButton>
          <Button>△</Button>
          <NumberButton>3</NumberButton>
        </Row>
        <Row>
          <Button>◁</Button>
          <NumberButton>5</NumberButton>
          <Button>▷</Button>
        </Row>
        <Row>
          <NumberButton>7</NumberButton>
          <Button>▽</Button>
          <NumberButton>9</NumberButton>
        </Row>
      </BottomCont>
    </>
  );
};

const BottomCont = tw.div`
  border-2 border-gray-200 rounded
  flex flex-col items-center
  w-full h-[50vh]
  py-4
`;

const Row = tw.div`  
  flex flex-row my-1
`;

const CircleButton = tw.div`
  border-2 border-pink-200 rounded-full
  flex flex-col items-center justify-center
  min-w-[50px] min-h-[50px] p-3
`;

const Button = tw.div`
  border-2 border-pink-200 rounded
  flex flex-col items-center justify-center
  min-w-[80px] h-[40px] 
  // m-2
`;

const NotButton = tw.div`
  border-2 border-white rounded
  flex flex-col items-center justify-center
  min-w-[80px] min-h-[40px] 
  // m-2
`;

const NumberButton = tw.div`
  border-2 border-gray-200 rounded
  flex flex-col items-center
  min-w-[80px] min-h-[40px] 
  // m-2
`;
