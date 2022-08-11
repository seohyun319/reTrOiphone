import tw from 'twin.macro';
import styled from '@emotion/styled';
import { TbAntennaBars4, TbWifi } from 'react-icons/tb';
import { BsBatteryFull } from 'react-icons/bs';

const Header = () => {
  return (
    <Container>
      <Left>WE +</Left>
      <Notch />
      <VirtualNotch />
      <Right>
        <TbAntennaBars4 size="1.5rem" />
        <TbWifi size="1.5rem" />
        <BsBatteryFull size="1.5rem" />
      </Right>
    </Container>
  );
};

const VirtualNotch = styled.div`
  width: 200px;
  height: 2.5rem;
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 200px;
  height: 2.5rem;
  background-color: black;
  border-radius: 0 0 1.5rem 1.5rem;
  transform: translateX(-50%);
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -7px;
    width: 14px;
    height: 7px;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-image: radial-gradient(circle at 0 100%, transparent 7px, black 7px);
  }
  &:after {
    left: 100%;
    background-image: radial-gradient(circle at 100% 100%, transparent 7px, black 7px);
  }
`;

const Container = tw.div`
  flex
  justify-evenly
  top-0
  left-0
  right-0
  mx-auto
  w-full
  min-w-[300px]
  h-[2.5rem]
  items-center
  px-1
`;

const Right = tw.div`
  text-center
  w-[20%]
  flex
  flex-row
  gap-1
`;

const Left = tw.div`
  text-center
  w-[20%]
`;

export default Header;
