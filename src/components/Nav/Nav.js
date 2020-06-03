import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, NavItems, NavItem } from './style';

const Nav = () => {
  return (
    <Navigation>
      <NavItems>
        <NavItem>
          <NavLink exact={true} to="/">
            <span role="img" aria-label="emoji">⚽️</span>
            <div>Home</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/teams">
            <span role="img" aria-label="emoji">⚽️</span>
            <div>Teams</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/players">
            <span role="img" aria-label="emoji">🙎‍♂️</span>
            <div>Players</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            <span role="img" aria-label="emoji">🏆</span>
            <div>Ranking</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/admin">
            <span role="img" aria-label="emoji">😎</span>
            <div>Admin</div>
          </NavLink>
        </NavItem>
      </NavItems>
    </Navigation>
  );
}
 
export default Nav;