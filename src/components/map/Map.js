import React from 'react';
import L from 'leaflet';
import {divIcon} from 'leaflet/dist/leaflet-src.esm';

export default class Map extends React.Component {
    mapStyle = {
        'color': '#0043ce',
        'weight': 1.3,
        'opacity': 0.85,
    };

    pinIcon = L.divIcon({
        className: 'custom-div-icon',
        html: '<div class=\'pin\'></div><div class=\'pulse\'></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
    });

    markersGroup;
    oldMarker = [];

    map;
    geoJsonLayer;

    componentDidMount() {
        this.map = L.map('mapid', {
            center: [45.520908, -73.579442],
            zoom: 12,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }),
            ],
        });

        this.geoJsonLayer = L.geoJSON();
        this.markersGroup = L.layerGroup();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.bikePath) {
            this.geoJsonLayer.clearLayers();
            this.markersGroup.clearLayers();
            this.props.bikePath.features.forEach((feature) => {
                if (feature.geometry.type === 'Point') {
                    const marker = this.buildMarker(feature);
                    marker.bindPopup(this.buildPopUp(this.retriveData(feature)));
                    this.markersGroup.addLayer(marker);
                    this.markersGroup.addTo(this.map);
                }
            });

            this.clearFeaturesFromPoint(this.props.bikePath);
            this.geoJsonLayer.addData(this.props.bikePath, {style: this.mapStyle}).addTo(this.map);
        }
    }

    buildPopUp(data) {
        return `name: ${data.name} <br/> type: ${data.cuisine}`;
    }

    retriveData(feature) {
        let data = {};

        if(feature.properties && feature.properties.data) {
            data = {
               name: feature.properties.data.name,
               cuisine: feature.properties.data.cuisine.join(", ")
           }
        }

        return data;
    }

    clearFeaturesFromPoint(featuresCollection) {
        featuresCollection.features.forEach((feature) => {
            if (feature.geometry.type === 'LineString') {
                featuresCollection.features = [feature];
            }
        });
    }

    buildMarker(feature) {
        const latlng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        return L.marker(latlng, {icon: this.pinIcon});
    }

    render() {
        return (
            <>
                <div id="mapid" className="map_content"/>
            </>
        );
    }

    cleanOldMarker() {
        this.oldMarker.forEach((marker) => {
            this.markersGroup.removeLayer(marker);
        });

        this.oldMarker = [];
    }
}