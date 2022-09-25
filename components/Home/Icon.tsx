import tw from 'twin.macro';
import Spacer from '../common/Spacer';
import Text from '../common/Text';

const Icon = ({ img, name }: { img: string; name?: string }) => {
  return (
    <Container>
      <Img src={img} />
      <Spacer height="0.5rem" />
      {name && <Name>{name}</Name>}
    </Container>
  );
};

export default Icon;

const Container = tw.div`
  w-16 h-20
  flex flex-col justify-center items-center
  mx-auto
`;

const Img = tw.img`
  w-16 h-16
  flex-shrink-0
  rounded-xl
`;

const Name = tw(Text)`
  text-white text-sm
  font-medium
`;
