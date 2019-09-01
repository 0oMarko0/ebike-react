import React from 'react';
import './App.scss';
import MainHeader from './components/header/MainHeader';

import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';

import HomePage from './pages/home/Home';
import ExamplePage from './pages/example/Example';

function App() {
  return (
      <div>
          <MainHeader />
          <Content>
              <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/example" component={ExamplePage}/>
              </Switch>
          </Content>
      </div>
  );
}

export default App;
