import tw from 'twin.macro';
import { useAppSelector } from '../../../hooks/common/useRedux';
import { getTreasureIsMine } from '../../../_reducers/applications/treasureIsMineReducer';
import { Box } from './Box';

export const Board = () => {
  // TODO: 좌표값 이벤트위임으로 온클릭을 보드에서 처리하기

  const game = useAppSelector(getTreasureIsMine);

  return (
    <GameCont>
      {game.bombContainer.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((col: number, colIdx: number) => (
            <Box rowIdx={rowIdx} colIdx={colIdx} key={`${colIdx}${rowIdx}`} />
          ))}
        </div>
      ))}
    </GameCont>
  );
};

const GameCont = tw.div`
  flex  
`;
