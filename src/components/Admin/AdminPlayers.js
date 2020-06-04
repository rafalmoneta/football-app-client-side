import React, { useState } from 'react';
import PlayerBox from '../PlayerBox/PlayerBox';
import ButtonDelete from '../Elements/ButtonDelete/ButtonDelete';
import useDeletePlayer from '../../Utilis/useDeletePlayer';
import ButtonAdd from '../Elements/ButtonAdd/ButtonAdd';
import Modal from '../Modal/Modal';
import Grid from '../Elements/Grid/Grid';
import NewPlayer from '../NewPlayer/NewPlayer';
import useQueryPlayersAndTeams from '../../Utilis/useQueryPlayersAndTeams';
import useAddPlayer from '../../Utilis/useAddPlayer';

const AdminPlayers = () => {
  const {data, loading, error} = useQueryPlayersAndTeams();
  const deletePlayer = useDeletePlayer();
  const addPlayer = useAddPlayer();
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = () => setIsShowing(!isShowing);

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    console.log(error);
    return <div>Error...</div>
  }

  return (
    <>
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

      {isShowing &&
        <Modal header="New Player" handleToggle={handleToggle}>
          <NewPlayer handleToggle={handleToggle} teams={data.teams} onSubmit={addPlayer}/>
        </Modal>
      }
    </>
    
  );
}
 
export default AdminPlayers;