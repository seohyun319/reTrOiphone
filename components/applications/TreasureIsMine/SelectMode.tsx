import tw from 'twin.macro';
import { useAppDispatch, useAppSelector } from '../../../hooks/common/useRedux';
import { getTreasureIsMine, selectMode, startGame } from '../../../_reducers/applications/treasureIsMineReducer';

export const SelectMode = () => {
  const game = useAppSelector(getTreasureIsMine);
  const dispatch = useAppDispatch();

  const BombContainer = new Array(game.numX); // 지뢰 여부 저장
  const isOpen = new Array(game.numX); // 칸 클릭 여부 저장

  const renderGrid = () => {
    for (let i = 0; i < game.numX; i++) {
      // 지뢰 컨테이너: 1이면 지뢰 존재, 0이면 없음
      BombContainer[i] = Array.from({ length: game.numY }, () =>
        // 지뢰 0 1 랜덤 값
        Math.round(Math.random() * 1),
      );
      isOpen[i] = Array.from({ length: game.numY }).fill(0);
    }
  };
  renderGrid();

  const onClickModeButton = (numX: number, numY: number) => {
    dispatch(selectMode({ numX: numX, numY: numY }));
  };

  return (
    <>
      <div>난이도 선택</div>
      <button
        onClick={() => {
          onClickModeButton(6, 6);
        }}>
        초급
      </button>
      <button
        onClick={() => {
          onClickModeButton(10, 10);
        }}>
        중급
      </button>
      <button
        onClick={() => {
          onClickModeButton(15, 15);
        }}>
        고급
      </button>
      <StartGame onClick={() => dispatch(startGame({ bombContainer: BombContainer, isOpen: isOpen }))}>게임 시작</StartGame>
    </>
  );
};

const StartGame = tw.div`
  bg-blue-200 hover:bg-blue-300 active:bg-purple-300
  p-2 w-max
  rounded-lg
  cursor-pointer
`;
