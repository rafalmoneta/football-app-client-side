import React, { useState } from 'react';
import {AdminTeamsContainer, AddTeamButton} from './style';
import TeamBox from '../TeamBox/TeamBox';
import useDeleteTeam from '../../Utilis/useDeleteTeam';
import useQueryTeams from '../../Utilis/useQueryTeams';
import PlusIcon from '../../Icons/Plus';
import Modal from '../Modal/Modal';

const AdminTeams = () => {
  const [isShowing, setIsShowing] = useState(false);
  const {data, loading, error} = useQueryTeams();
  const deleteTeam = useDeleteTeam();
  

  const handleToggle = () => setIsShowing(!isShowing);

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    console.log(error);
    return <div>Error...</div>
  }

  if(isShowing) {
    return <Modal handleToggle={handleToggle}>Working</Modal> 
  }

  return (
    <AdminTeamsContainer>
      {data.teams.map((team) => {
        return <TeamBox key={team.id} team={team} handleDeleteTeam={deleteTeam}/>
      })}
      <AddTeamButton onClick={handleToggle}>
        <PlusIcon />
        <span>Add Team</span>
      </AddTeamButton>
    </AdminTeamsContainer>
  );
}
 
export default AdminTeams;