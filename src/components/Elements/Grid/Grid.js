import React from 'react';
import { GridFourElements } from './style';

const Grid = ({children}) => {
  return (
    <GridFourElements>
      {children}
    </GridFourElements>
  );
}
 
export default Grid;