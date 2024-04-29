import React from 'react';
import './App.scss';
import {Route, Switch, withRouter} from 'react-router-dom';
import ContentContainer from './containers/content/ContentContainer';
import MainHeaderContainer from './containers/header/HeaderContainer';
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
                    </Switch>
                </ContentContainer>
            </div>
        );
    }
}

export default withRouter(App);
