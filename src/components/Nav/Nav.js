import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, NavItems, NavItem } from './style';
import FootballIcon from '../../Icons/Football';
import PersonIcon from '../../Icons/Person';
import TeamIcon from '../../Icons/Team';
import SettingsIcon from '../../Icons/Settings';
import CupIcon from '../../Icons/Cup';

const Nav = () => {
  return (
    <Navigation>
      <NavItems>
        <NavItem>
          <NavLink exact={true} to="/">
            <FootballIcon height="40px" width="40px"/>
            <div>Home</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/teams">
            <TeamIcon height="40px" width="40px"/>
            <div>Teams</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/players">
            <PersonIcon height="40px" width="40px" />
            <div>Players</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <CupIcon height="40px" width="40px" />
            <div>Ranking</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin">
            <SettingsIcon height="40px" width="40px"/>
            <div>Admin</div>
          </NavLink>
        </NavItem>
      </NavItems>
    </Navigation>
  );
}
 
export default Nav;