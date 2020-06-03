import React, { useState } from 'react';
import {AdminTeamsContainer} from './style';
import TeamBox from '../TeamBox/TeamBox';
import useDeleteTeam from '../../Utilis/useDeleteTeam';
import useQueryTeams from '../../Utilis/useQueryTeams';
import Modal from '../Modal/Modal';
import NewTeam from '../NewTeam/NewTeam';
import useAddTeam from '../../Utilis/useAddTeam';
import ButtonAdd from '../Elements/ButtonAdd/ButtonAdd';

const AdminTeams = () => {
  const [isShowing, setIsShowing] = useState(false);
  const {data, loading, error} = useQueryTeams();
  const deleteTeam = useDeleteTeam();
  const addTeam = useAddTeam();

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
    <Modal header="New Team" handleToggle={handleToggle}>
      <NewTeam handleToggle={handleToggle} onSubmit={addTeam} />
    </Modal>) 
  }

  return (
    <AdminTeamsContainer>
      <ButtonAdd onClick={handleToggle}/>
      {data.teams.map((team) => {
        return <TeamBox key={team.id} team={team} handleDeleteTeam={deleteTeam}/>
      })}

    </AdminTeamsContainer>
  );
}
 
export default AdminTeams;