import React from 'react';
import { PlayersContainer} from './style';
import PlayerBox from '../PlayerBox/PlayerBox';
import ButtonLove from '../Elements/ButtonLove/ButtonLove';
import useQueryPlayers from '../../Utilis/useQueryPlayers';

const Players = () => {
  const {data, loading, error} = useQueryPlayers();

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    console.log(error);
    return <div>Error...</div>
  }

  const test = (input) => {
    console.log('something', input)
  }

  return (
    <PlayersContainer>
      {data.players.map((player) => {
        return (
          <PlayerBox player={player}>
            <ButtonLove onClick={() => test(player.name)}/>
          </PlayerBox>
        )
      })}
    </PlayersContainer>
  );
}
 
export default Players;