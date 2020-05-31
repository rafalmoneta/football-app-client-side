import React from 'react';
import {TeamsContainer} from './style';
import TeamBox from '../TeamBox/TeamBox';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_TEAMS = gql`
  query teams {
    teams {
      id
      name
      imageURL
    }
  }
`

const Teams = () => {
  const {data, loading, error} = useQuery(GET_TEAMS);
  

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
        return <TeamBox team={team}/>
      })}
      
    </TeamsContainer>
  );
}
 
export default Teams;