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
          <NavLink to="/artists">
            <span role="img" aria-label="emoji">⚽️</span>
            <div>Top Artists</div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tracks">
            <span role="img" aria-label="emoji">⚽️</span>
            <div>Top Tracks</div>
          </NavLink>
        </NavItem>
      </NavItems>
    </Navigation>
  );
}
 
export default Nav;