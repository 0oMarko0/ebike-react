import React from 'react';
import L from 'leaflet';

export default class Map extends React.Component {
    mapStyle = {
        "color": "#0043ce",
        "weight": 1.3,
        "opacity": 0.85
    };

    map;
    geoJsonLayer;

    componentDidMount() {
        this.map = L.map('mapid', {
            center: [ 45.520908, -73.579442],
            zoom: 12,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });

        this.geoJsonLayer = L.geoJSON();


        // const myIcon = L.divIcon({
        //     className: 'custom-div-icon',
        //     html: "<div class='pin'></div><div class='pulse'></div>",
        //     iconSize: [30, 42],
        //     iconAnchor: [15, 42]
        // });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.bikePath) {
            this.geoJsonLayer.clearLayers();
            this.geoJsonLayer.addData(this.props.bikePath, {style: this.mapStyle}).addTo(this.map);
        }
    }

    render() {
        return (
             <>
                <div id="mapid" className="map_content"/>
             </>
        );
    }
}