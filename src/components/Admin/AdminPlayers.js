import React, { useState } from 'react';
import useQueryPlayers from '../../Utilis/useQueryPlayers';
import PlayerBox from '../PlayerBox/PlayerBox';
import ButtonDelete from '../Elements/ButtonDelete/ButtonDelete';
import useDeletePlayer from '../../Utilis/useDeletePlayer';
import ButtonAdd from '../Elements/ButtonAdd/ButtonAdd';
import Modal from '../Modal/Modal';
import Grid from '../Elements/Grid/Grid';
import NewPlayer from '../NewPlayer/NewPlayer';

const AdminPlayers = () => {
  const {data, loading, error} = useQueryPlayers();
  const deletePlayer = useDeletePlayer();
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = () => setIsShowing(!isShowing);

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    console.log(error);
    return <div>Error...</div>
  }

  if(isShowing) {
    return (
    <Modal header="New Player" handleToggle={handleToggle}>
      <NewPlayer />
    </Modal>) 
  }


  return (
    <Grid>
      <ButtonAdd onClick={handleToggle} add={'player'} />
      {data.players.map((player) => {
        return (
          <PlayerBox key={player.id} player={player}>
            <ButtonDelete onClick={() => deletePlayer(player.id)}/>
          </PlayerBox>
        )
      })}
    </Grid>
  );
}
 
export default AdminPlayers;