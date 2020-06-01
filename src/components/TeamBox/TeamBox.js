import React from 'react';
import { TeamBoxContainer, TeamBoxImage, TeamBoxLink, TeamBoxButtons, TeamBoxButton } from './style';
import StarIcon from '../../Icons/Star';
import TrashIcon from '../../Icons/Trash';

const TeamBox = ({team, handleDeleteTeam}) => {
  
  return (
    <TeamBoxContainer>
      <div>
        <TeamBoxImage>
          <img src={team.imageURL} alt="team-logo" />
        </TeamBoxImage>
        <h2>{team.name}</h2>
        <TeamBoxButtons>
          <TeamBoxLink to="/">More!</TeamBoxLink>
          <TeamBoxButton>
            <StarIcon />
          </TeamBoxButton>
          <TeamBoxButton onClick={() => handleDeleteTeam(team.id)}>
            <TrashIcon />
          </TeamBoxButton>
        </TeamBoxButtons>
      </div>
    </TeamBoxContainer>
  );
}
 
export default TeamBox;