import styled from 'styled-components';


export const Player = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border: 1px solid #efefef;
  border-radius: 0.75rem;
  box-sizing: border-box;
  text-align: center;
`

export const PlayerTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PlayerImage = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: auto;
    height: 100%;
    margin: 0 auto;
  }
`

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  padding-left: 1rem;
  border-left: 1px solid #efefef;
`

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  span {
    font-weight: normal;
    font-size: 1rem;
  }
`

export const PlayerBottom = styled.div`
  display: flex;
  align-items: center;
  h3 {
    flex: 4;
    text-align: left;
    margin: 0 0.5rem;
  }

`

