import type { NextPage } from 'next';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import { TopView } from '../../components/FeaturePhone/TopView';
import { BottomView } from '../../components/FeaturePhone/BottomView';

const FeaturePhone: NextPage = () => {
  return (
    <div>
      <FeatureCont>
        <TopView />
        <BottomView />
      </FeatureCont>
    </div>
  );
};
export default FeaturePhone;

const FeatureCont = tw.div`
  h-screen    
  min-w-[234px] max-w-[420px]
  mx-auto
`;
