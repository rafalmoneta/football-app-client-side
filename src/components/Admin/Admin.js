import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { AdminPanel, AdminLink, AdminNavigation, AdminPanelContent } from './style';
import AdminTeams from './AdminTeams';

const Admin = () => {
  
  let { path, url } = useRouteMatch();
  
  return (
    <AdminPanel>
      <AdminNavigation>
        <AdminLink to={`${url}/teams`}>Teams</AdminLink>
        <AdminLink to="">Players</AdminLink>
      </AdminNavigation>
      <AdminPanelContent>
        
        <Route exact path={`${path}/`}/>
        <Route path={`${path}/teams`} component={AdminTeams} />
        
      </AdminPanelContent>

      
    </AdminPanel>
  );
}
 
export default Admin;