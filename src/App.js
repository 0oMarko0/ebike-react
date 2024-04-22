import React from 'react';
import './App.scss';
import {Route, Switch, withRouter} from 'react-router-dom';
import HomePage from './pages/home/Home';
import ContentContainer from './containers/content/ContentContainer';
import MainHeaderContainer from './containers/header/HeaderContainer';
import api from './service/api';
import store from './store';
import {setCurrentUser} from './action/auth/AuthAction';
import {Routes} from './utils/Routes';
import MapPage from './pages/map/Map';


class App extends React.Component {
    render() {
        return (
            <div>
                <MainHeaderContainer/>
                <ContentContainer>
                    <Switch>
                        <Route path={Routes.MAP} component={MapPage}/>
                        <Route path={Routes.HOME} component={HomePage}/>
                    </Switch>
                </ContentContainer>
            </div>
        );
    }
}

export default withRouter(App);
