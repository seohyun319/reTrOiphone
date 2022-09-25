import tw from 'twin.macro';
import Icon from './Icon';

const Dock = () => {
  return (
    <Container>
      <Icon img="/ios/icons/Phone.png" />
      <Icon img="/ios/icons/Safari.png" />
      <Icon img="/ios/icons/Caculator.png" />
      <Icon img="/ios/icons/App Store.png" />
    </Container>
  );
};

export default Dock;

const Container = tw.div`
  fixed bottom-3 right-0 left-0
  grid grid-cols-4 grid-rows-1
  justify-center items-center
  rounded-2xl
  mx-auto
  h-28 w-[95%]
  bg-gray-500 backdrop-blur-sm 
`;
