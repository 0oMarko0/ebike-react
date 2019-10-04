import React from 'react';
import {Tile} from 'carbon-components-react';

class InfoTile extends React.Component {
    render() {
        return (
            <Tile className="info-tile__container">
                <h5>{this.props.title}</h5>
                <h1 className="info-tile__content">{this.props.content}</h1>
            </Tile>);
    }
}

export default InfoTile;