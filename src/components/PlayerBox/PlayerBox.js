import React from 'react';
import {Player, PlayerTop, PlayerImage, PlayerInfo, Label, PlayerBottom} from './style';

const PlayerBox = ({ children ,player}) => {
  return (
    <Player>
      <PlayerTop>
        <PlayerImage>
          <img alt="player" src="https://i.imgur.com/QiiE9Dw.png"/>
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