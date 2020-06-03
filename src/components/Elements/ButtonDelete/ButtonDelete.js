import React from 'react';
import TrashIcon from '../../../Icons/Trash';
import {DeleteBtn} from './style';

const ButtonDelete = ({onClick}) => {
  return (
    <DeleteBtn onClick={onClick}><TrashIcon /></DeleteBtn>
  );
}
 
export default ButtonDelete;