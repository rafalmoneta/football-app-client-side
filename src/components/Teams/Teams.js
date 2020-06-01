import React from 'react';
import {TeamsContainer} from './style';
import TeamBox from '../TeamBox/TeamBox';
import useDeleteTeam from '../../Utilis/useDeleteTeam';
import useQueryTeams from '../../Utilis/useQueryTeams';


const Teams = () => {
  const {data, loading, error} = useQueryTeams();
  const deleteTeam = useDeleteTeam();

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    console.log(error);
    return <div>Error...</div>
  }

  return (
    <TeamsContainer>
      {data.teams.map((team) => {
        return <TeamBox key={team.id} team={team} handleDeleteTeam={deleteTeam}/>
      })}
      
    </TeamsContainer>
  );
}
 
export default Teams;