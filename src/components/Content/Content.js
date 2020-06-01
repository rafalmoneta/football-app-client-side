import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Teams from '../Teams/Teams';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import {ContentWrapper, ContentContainer} from './style';
import Admin from '../Admin/Admin';

const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path='/teams' component={Teams} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </ContentContainer>
    </ContentWrapper>
  );
}
 
export default Content;