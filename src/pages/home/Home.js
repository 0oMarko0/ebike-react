import React from 'react';
import PageHeader from '../../components/page-header/PageHeader';
import {Routes} from '../../utils/Routes';
import InfoTile from '../../components/tile/InfoTile';
import {getGlobalStatistics} from '../../service/statistics';
import poll, {startPolling, stopPolling} from '../../utils/polling';

export default class HomePage extends React.Component {
    state = {
        nbOfRestaurants: 0,
        totalBikePathLength: 0,
        nbOfActiveUser: 0,
        nbOfTotalUser: 0,
    };

    componentDidMount() {
        startPolling();
        poll(() => {
            getGlobalStatistics().then((response) => {
                this.setState({
                    nbOfRestaurants: response.data.nbRestaurants,
                    totalBikePathLength: response.data.totalPathLength,
                    nbOfActiveUser: response.data.userConnected,
                    nbOfTotalUser: response.data.totalUser,
                });
            });

        }, Infinity, 500).then().catch();
    }

    componentWillUnmount() {
        stopPolling();
    }

    render() {
        const breadcrumb = [
            {
                link: Routes.HOME,
                name: 'Home',
            },
        ];

        return (
            <div className="bx--grid bx--grid--full-width">
                <PageHeader title="Home" breadcrumb={breadcrumb}/>
                <div className="bx--row ">
                    <div className="bx--col-md bx--col-lg home_row-container">
                        <InfoTile title={'Number of restaurants'} content={this.state.nbOfRestaurants}/>
                    </div>
                    <div className="bx--col-md bx--col-lg home_row-container">
                        <InfoTile title={'Active User'} content={this.state.nbOfActiveUser}/>
                    </div>
                </div>
                <div className="bx--row ">
                    <div className="bx--col-md bx--col-lg home_row-container">
                        <InfoTile title={'Bike path - (km)'} content={this.state.totalBikePathLength}/>
                    </div>
                    <div className="bx--col-md bx--col-lg home_row-container">
                        <InfoTile title={'Total User'} content={this.state.nbOfTotalUser}/>
                    </div>
                </div>
            </div>
        );
    }
}
