import tw from 'twin.macro';
import { useAppDispatch, useAppSelector } from '../../../hooks/common/useRedux';
import { getTreasureIsMine, openBox } from '../../../_reducers/applications/treasureIsMineReducer';

export const Box = ({ rowIdx, colIdx }: { rowIdx: number; colIdx: number }) => {
  const dispatch = useAppDispatch();
  const game = useAppSelector(getTreasureIsMine);

  const isOpen = game.isOpen[rowIdx][colIdx];

  const clickBox = () => {
    dispatch(openBox({ rowIdx: rowIdx, boxIdx: colIdx }));
  };

  return (
    <>
      <Button key="btn" onClick={clickBox}>
        {!isOpen ? <>?</> : 1}
      </Button>
    </>
  );
};

const Button = tw.div`
  bg-gray-200 
  w-[2rem] h-[2rem]  
  m-1
  flex items-center justify-center
`;
