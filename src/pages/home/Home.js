import React from 'react';
import PageHeader from '../../components/page-header/PageHeader';
import {Routes} from '../../utils/Routes';
import InfoTile from '../../components/tile/InfoTile';
import {heartbeat} from '../../service/heartbeat';

export default class HomePage extends React.Component {
    state = {
        nbOfRestaurants: 0,
        totalBikePathLength: 0,
        nbOfActiveUser: 100,
        nbOfTotalUser: 100,
    };

    componentDidMount() {
        heartbeat().then((response) => {
            console.log('REsponse: ', response);
            this.setState({
                nbOfRestaurants: response.data.nb_restaurants,
                totalBikePathLength: response.data.total_path_length,
            });
        }).catch((error) => {
            console.log('error: ', error);
        });
    }

    render() {
        const breadcrumb = [
            {
                link: Routes.HOME,
                name: "Home"
            }
        ];

        return (
            <div className="bx--grid bx--grid--full-width">
                <PageHeader title="Home" breadcrumb={breadcrumb}/>
                <div className="bx--row ">
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Number of restaurants"} content={this.state.nbOfRestaurants}/>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Bike path - (km)"} content={this.state.totalBikePathLength}/>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Active User"} content={this.state.nbOfActiveUser}/>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Total User"} content={this.state.nbOfTotalUser}/>
                    </div>
                </div>
            </div>
        );
    }
}
