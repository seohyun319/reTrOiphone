import tw from 'twin.macro';
import Spacer from '../common/Spacer';
import Icon from './Icon';

const Apps = () => {
  return (
    <>
      <Spacer height="5rem" />
      <Container>
        <Icon img="/ios/icons/Phone.png" name="전화" />
        <Icon img="/ios/icons/Safari.png" name="사파라" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
        <Icon img="/ios/icons/App Store.png" name="앱스토어" />
        <Icon img="/ios/icons/Phone.png" name="전화" />
        <Icon img="/ios/icons/Safari.png" name="사파라" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
        <Icon img="/ios/icons/Phone.png" name="전화" />
        <Icon img="/ios/icons/Safari.png" name="사파라" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
        <Icon img="/ios/icons/Phone.png" name="전화" />
        <Icon img="/ios/icons/Safari.png" name="사파라" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
        <Icon img="/ios/icons/App Store.png" name="앱스토어" />

        <Icon img="/ios/icons/App Store.png" name="앱스토어" />
        <Icon img="/ios/icons/Phone.png" name="전화" />
        <Icon img="/ios/icons/Safari.png" name="사파라" />
        <Icon img="/ios/icons/Caculator.png" name="계산기" />
      </Container>
    </>
  );
};

export default Apps;

const Container = tw.div`
  grid grid-cols-4 grid-rows-6 gap-3
  w-full h-[calc(100% - 15rem)]
`;
