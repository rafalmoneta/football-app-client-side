import React, { useState } from 'react';
import Select from 'react-select';
import {NewPlayerWrapper, NewPlayerAddButton} from './style';
import {positionOptions, customStyles} from './other';


const NewPlayer = ({ handleToggle, teams ,onSubmit}) => {
  const [player, setPlayer] = useState({name: '', teamId: 1, bornAt: '1990-09-19', position: 'GK', number: 1, imageURL: ''})

  const teamOptions = teams.map((team) => {
    return ({value: team.id, label: team.name});
  });

  const team = teamOptions.find((option) => option.label === player.teamId);
  const position = positionOptions.find((option) => option.value === player.position);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({name: player.name, bornAt: player.bornAt, position: player.position, number: player.number, teamId: player.teamId, imageURL: player.imageURL});
    setPlayer({name: '', teamId: 1, bornAt: '1990-09-19', position: 'GK', number: 1, imageURL: ''});
    handleToggle();
  };

  return (
    <NewPlayerWrapper>
      <form onSubmit={submit}>
        <input
          className="input"
          type="text"
          placeholder="Player name"
          value={player.name}
          onChange={e => setPlayer({...player, name: e.target.value})}
          required
        />
        <input
          className="input"
          type="date"
          placeholder="Date of birth"
          value={player.bornAt}
          onChange={e => setPlayer({...player, bornAt: e.target.value})}
          required
        />
        <input 
          className="input"
          type="number"
          placeholder="Number"
          value={player.number}
          onChange={e => setPlayer({...player, number: parseInt(e.target.value)})}
        />
        <Select
          className="player-select"
          value={team}
          defaultValue={teamOptions[0]}
          onChange={e => setPlayer({...player, teamId: e.value})}
          options={teamOptions}
          styles={customStyles}
          required
        />
        <Select
          className="player-select"
          value={position}
          defaultValue={positionOptions[0]}
          onChange={e => setPlayer({...player, position: e.value})}
          options={positionOptions}
          styles={customStyles}
          required
        />
        <input 
          className="input"
          type="url"
          placeholder="Image url"
          value={player.imageURL}
          onChange={e => setPlayer({...player, imageURL: e.target.value})}
        />
        <NewPlayerAddButton type="submit" name="submit">add player</NewPlayerAddButton>
      </form>
    </NewPlayerWrapper>
  );
}
 
export default NewPlayer;