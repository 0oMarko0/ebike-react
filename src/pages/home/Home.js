import React from 'react';
import PageHeader from '../../components/page-header/PageHeader';
import {Routes} from '../../utils/Routes';
import InfoTile from '../../components/tile/InfoTile';

export default class HomePage extends React.Component {
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
                        <InfoTile title={"Number of restaurants"} content={45}/>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Bike path - (Km)"} content={45} />
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Active User"} content={100}/>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-4 home_row-container">
                        <InfoTile title={"Total of User"} content={45}/>
                    </div>
                </div>
            </div>
        );
    }
}