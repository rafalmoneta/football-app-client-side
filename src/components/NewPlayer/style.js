import styled from 'styled-components';

export const NewPlayerWrapper = styled.div`
  padding: 2rem;
  background-color: blue;
  background: rgb(253, 253, 253);
  border: 1px solid rgb(246, 246, 249);
  border-radius: 10px;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .input {
    flex-basis: 10rem;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid #efefef;
    font-size: 1rem;
    width: 100%;
    margin-right: 1rem;
    margin-top: 1rem;
    &:nth-child(4) {
      margin-right: 0;
    };
  }
`

export const NewPlayerAddButton = styled.button`
  flex-basis: 14rem;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid #efefef;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`