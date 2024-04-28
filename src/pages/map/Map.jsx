import React from 'react';
import MapController from '../../containers/map-controller/MapController';

export default class MapPage extends React.Component {
    render() {
        return (
            <div className="bx--grid bx--grid--full-width">
                <MapController/>
            </div>
        );
    }
}
