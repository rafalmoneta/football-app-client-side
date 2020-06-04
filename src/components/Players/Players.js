import React from 'react';
import PlayerBox from '../PlayerBox/PlayerBox';
import ButtonLove from '../Elements/ButtonLove/ButtonLove';
import useQueryPlayers from '../../Utilis/useQueryPlayers';
import Grid from '../Elements/Grid/Grid';

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
    <Grid>
      {data.players.map((player) => {
        return (
          <PlayerBox player={player}>
            <ButtonLove onClick={() => test(player.name)}/>
          </PlayerBox>
        )
      })}
    </Grid>
  );
}
 
export default Players;