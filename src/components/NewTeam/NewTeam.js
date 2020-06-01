import React, { useState } from 'react';
import { NewTeamWrapper, NewTeamAddButton } from './style';

const NewTeam = ({handleToggle, onSubmit}) => {
  const [team, setTeam] = useState({name: '', imageURL: '', about: '', colours: '',stadium: ''})

  const submit = e => {
    e.preventDefault();
    onSubmit(team);
    setTeam({name: '', imageURL: '', about: '', colours: '',stadium: ''});
    handleToggle();
  }

  return (
    <NewTeamWrapper>
      <form onSubmit={submit}>
        <input
          className="input"
          type="text"
          placeholder="Team Name"
          value={team.name}
          onChange={e => setTeam({...team, name: e.target.value})}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Colours"
          value={team.colours}
          onChange={e => setTeam({...team, colours: e.target.value})}
        />
        <input
          className="input"
          type="text"
          placeholder="Stadium Name"
          value={team.stadium}
          onChange={e => setTeam({...team, stadium: e.target.value})}
          required
        />
        <input 
          className="input"
          type="url"
          placeholder="Image/logo url"
          value={team.imageURL}
          onChange={e => setTeam({...team, imageURL: e.target.value})}
        />
        <input 
          className="input"
          type="text"
          placeholder="About Team"
          value={team.about}
          onChange={e => setTeam({...team, about: e.target.value})}
        />   

        <NewTeamAddButton type="submit" name="submit">add team</NewTeamAddButton>
      </form>
    </NewTeamWrapper>
  )
}
 
export default NewTeam;