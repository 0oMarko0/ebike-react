import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home/Home';
import ExamplePage from './pages/example/Example';
import ContentContainer from './containers/content/ContentContainer';
import MainHeaderContainer from './containers/header/HeaderContainer';
import AuthenticationPage from './pages/authentication/Auth';
import api from './service/api';
import store from './store';
import {setCurrentUser} from './action/auth/AuthAction';


class App extends React.Component {
    componentWillMount() {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            api.defaults.headers.common['Authorization'] = `bearer ${token}`;
            store.dispatch(setCurrentUser(token));
        }
    }

    render() {
        return (
            <div>
                <MainHeaderContainer/>
                <ContentContainer>
                    <Switch>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/auth" component={AuthenticationPage}/>
                        <Route path="/example" component={ExamplePage}/>
                    </Switch>
                </ContentContainer>
            </div>
        );
    }
}

export default App;
