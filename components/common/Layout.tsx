import tw from 'twin.macro';

const Row = tw.div`
  flex
  flex-row
  items-center
  justify-center
  gap-2
`;
const Col = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-2
  w-full
`;

export { Row, Col };
