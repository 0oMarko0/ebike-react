import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/Home';
import ExamplePage from './pages/example/Example';
import ContentContainer from './containers/content/ContentContainer';
import MainHeaderContainer from './containers/header/HeaderContainer';

function App() {
  return (
      <div>
          <MainHeaderContainer />
          <ContentContainer>
              <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/example" component={ExamplePage}/>
              </Switch>
          </ContentContainer>
      </div>
  );
}

export default App;
