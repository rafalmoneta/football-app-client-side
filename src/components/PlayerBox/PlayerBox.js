import React from 'react';
import {Player, PlayerTop, PlayerImage, PlayerInfo, Label, PlayerBottom} from './style';

const PlayerBox = ({ children ,player}) => {

  const url = 'https://i.imgur.com/blWMP2K.png'

  return (
    <Player>
      <PlayerTop>
        <PlayerImage>
          <img alt="player" src={player.imageURL || url}/>
        </PlayerImage>
        <PlayerInfo>
          <Label>
            Age: 
            <span>32</span>
            {/* <span>{player.bornAt}</span> */}
          </Label>
          <Label>
            Number: 
            <span>{player.number}</span>
          </Label>
          <Label>
            Position: 
            <span>{player.position}</span>
          </Label>
        </PlayerInfo>
      </PlayerTop>
      <PlayerBottom>
        <h3>{player.name}</h3>
        {children && 
          <div>{children}</div>
        }
      </PlayerBottom>
    </Player>
  );
}
 
export default PlayerBox;