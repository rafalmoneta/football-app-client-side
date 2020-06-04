import React, { useState } from 'react';
import Select from 'react-select';
import {NewPlayerWrapper, NewPlayerAddButton} from './style';
import {positionOptions, customStyles} from './other';




const NewPlayer = ({ teams ,onSubmit}) => {
  const [player, setPlayer] = useState({name: '', team: 'FC Barcelona', bornAt: '1990-09-19', position: 'GK', number: 1, imageURL: ''})
  
  // const teamOptions = teams.map((team) => {
  //   return ({value: team.id, label: team.name})
  // })
  // const team = teamOptions.find((option) => option.label === player.team)
  const position = positionOptions.find((option) => option.value === player.position)


  const submit = (e) => {
    e.preventDefault();
    console.log("submiting", player);
    // onSubmit({name: player.name, bornAt: player.bornAt, position: player.position, number: player.number, team: player.team, imageURL: player.imageURL})
    setPlayer({name: '', team: 'FC Barcelona', bornAt: '1990-09-19', position: 'GK', number: 1, imageURL: ''})
  }



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
          onChange={e => setPlayer({...player, number: e.target.value})}
        />
        <Select
          className="player-select"
          // value={team}
          // defaultValue={teamOptions[0]}
          onChange={e => setPlayer({...player, team: e.value})}
          // options={teamOptions}
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