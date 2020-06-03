import React from 'react';
import StarIcon from '../../../Icons/Star';
import {LoveBtn} from './style';

const ButtonLove = ({onClick}) => {
  return (
    <LoveBtn onClick={onClick}><StarIcon /></LoveBtn>
  );
}
 
export default ButtonLove;