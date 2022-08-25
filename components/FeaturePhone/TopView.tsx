import tw from 'twin.macro';

// 피처폰 화면 부분
export const TopView = () => {
  return (
    <>
      <TopCont>
        <Speaker></Speaker>
        <div>T</div>
        <Screen></Screen>
        <div>sky</div>
      </TopCont>
    </>
  );
};

const TopCont = tw.div`
  border-2 border-gray-200 rounded
  flex flex-col items-center
  h-[50vh]
`;

const Speaker = tw.div`
  bg-gray-800 rounded
  h-1 w-20 my-2
`;

const Screen = tw.div`
  border-2 border-gray-400 rounded-sm
  w-[90%]
  h-full
  m-2 p-2
`;
