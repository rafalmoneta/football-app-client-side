import React from 'react';
import PlusIcon from '../../../Icons/Plus';
import {AddBtn} from './style';

const ButtonAdd = ({add, onClick}) => {
  return (
    <AddBtn onClick={onClick}>
      <PlusIcon />
      <span>Add {add}</span>
    </AddBtn>
  );
}
 
export default ButtonAdd;