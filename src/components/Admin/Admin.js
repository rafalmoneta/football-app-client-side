import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { AdminPanel, AdminLink, AdminNavigation, AdminPanelContent } from './style';
import AdminTeams from './AdminTeams';
import AdminPlayers from './AdminPlayers';

const Admin = () => {
  
  let { path, url } = useRouteMatch();
  
  return (
    <AdminPanel>
      <AdminNavigation>
        <AdminLink to={`${url}/teams`}>Teams</AdminLink>
        <AdminLink to={`${url}/players`}>Players</AdminLink>
      </AdminNavigation>
      <AdminPanelContent>
        
        <Route exact path={`${path}/`}/>
        <Route path={`${path}/teams`} component={AdminTeams} />
        <Route path={`${path}/players`} component={AdminPlayers} />
        
      </AdminPanelContent>

      
    </AdminPanel>
  );
}
 
export default Admin;