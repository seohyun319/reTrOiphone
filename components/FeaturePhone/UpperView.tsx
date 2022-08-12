import tw from 'twin.macro';

// 피처폰 화면 부분
export const UpperView = () => {
  return (
    <>
      <UpperCont>
        <Speaker></Speaker>
        <div>T</div>
        <Screen></Screen>
        <div>sky</div>
      </UpperCont>
    </>
  );
};

const UpperCont = tw.div`
  border-2 border-gray-200 rounded
  flex flex-col items-center
  min-w-[234px]
`;

const Speaker = tw.div`
  bg-gray-800 rounded
  h-1 w-20 my-2
`;

const Screen = tw.div`
  border-2 border-gray-400 rounded-sm
  w-11/12
  min-w-[234px] min-h-[400px]
  m-2 p-2
`;
