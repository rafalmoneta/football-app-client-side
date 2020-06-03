import styled from 'styled-components';

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid #efefef;
  font-size: 1.5rem;
  cursor: pointer;

  span {
    display: block;
    margin-top: 2rem;
    color: #cecece;
  }

  svg {
    color: #cecece;
    width: 75px;
    height: 75px;
  }
`