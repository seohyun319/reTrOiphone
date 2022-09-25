import React from 'react';
import tw from 'twin.macro';
import { useAppDispatch, useAppSelector } from '../../../hooks/common/useRedux';
import { getTreasureIsMine, openBox } from '../../../_reducers/applications/treasureIsMineReducer';

export const Box = ({ rowIdx, colIdx }: { rowIdx: number; colIdx: number }) => {
  const dispatch = useAppDispatch();
  const game = useAppSelector(getTreasureIsMine);

  const isOpen = game.isOpen[rowIdx][colIdx];
  const isBomb = game.bombContainer[rowIdx][colIdx];
  const [count, setCount] = React.useState(0); // 주변 폭탄 개수
  const bombView = isBomb ? <>💣</> : <>{count}</>;

  // 주변에 폭탄이 몇 개 있는지
  const aroundBombNum = () => {
    // 주변 방향 좌표
    const move = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
    let tempCount = 0;
    for (const newIdx of move) {
      const nx = rowIdx + newIdx[0];
      const ny = colIdx + newIdx[1];
      // 이동한 좌표가 범위에서 벗어나지 않으면 카운트 올려줌
      if (nx < game.numX && ny < game.numY && nx >= 0 && ny >= 0) {
        if (game.bombContainer[nx][ny]) {
          tempCount++;
        }
      }
    }
    setCount(tempCount);
  };

  React.useEffect(() => {
    if (!isBomb && !isOpen) {
      aroundBombNum();
    }
  }, []);

  const clickBox = () => {
    dispatch(openBox({ rowIdx: rowIdx, colIdx: colIdx }));
  };

  return (
    <BoxButton key="btn" onClick={clickBox}>
      {!isOpen ? <>?</> : bombView}
    </BoxButton>
  );
};

const BoxButton = tw.div`
  bg-gray-200 
  w-[2rem] h-[2rem]  
  m-1
  flex items-center justify-center
  cursor-pointer
`;
