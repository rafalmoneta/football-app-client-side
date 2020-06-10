import React from 'react';
import { GridContainer, LeftContent, CenterContent, RightContent } from './style';

const Home = () => {
  return (
    <div>
      <GridContainer>
        <LeftContent>Left</LeftContent>
        <CenterContent>center</CenterContent>
        <RightContent>right</RightContent>
      </GridContainer>
    </div>
  );
}
 
export default Home;