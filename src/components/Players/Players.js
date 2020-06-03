import React from 'react';
import { PlayersContainer} from './style';
import PlayerBox from '../PlayerBox/PlayerBox';
import ButtonLove from '../Elements/ButtonLove/ButtonLove';

const Players = () => {

  const players = [
    {
      name: 'Leo Messi',
      number: 10,
      position: 'RW',
      bornAt: '1987-06-24',
    },
    {
      name: 'Karim Benzema',
      number: 10,
      position: 'ST',
      bornAt: '1987-06-24',
    }
  ]

  return (
    <PlayersContainer>
      {players.map((player) => {
        return (
          <PlayerBox player={player}>
            <ButtonLove />
          </PlayerBox>
        )
      })}
    </PlayersContainer>
  );
}
 
export default Players;