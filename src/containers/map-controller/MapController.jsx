import React from 'react';
import Map from '../../components/map/Map';
import {Button, MultiSelect, Slider, Loading} from 'carbon-components-react';
import {getRestaurantsType} from '../../service/type';
import {getAJourney, getStartingPoint} from '../../service/journey';
import {toast} from 'react-toastify';
import {ErrorToast, toastOption} from '../../components/toast-type/ToastType';

export default class MapController extends React.Component {
    multiSelectProps = {
        id: '_multiselect',
        titleText: 'Restaurants Type',
        filterable: false,
        disabled: false,
        type: 'default',
        label: 'Restaurants Type',
        invalid: false,
        onChange: (e) => this.addToSelectedList(e),
        listBoxMenuIconTranslationIds:
            {
                'close.menu': 'Close menu',
                'open.menu': 'Open menu',
                'clear.all': 'Clear all',
                'clear.selection': 'Clear selection',
            },

    };

    distanceSlider = {
        name: 'Distance',
        inputType: 'number',
        disabled: false,
        value: 5000,
        min: 1000,
        max: 10000,
        step: 100,
        labelText: 'Distance',
        stepMuliplier: 4,
        minLabel: '',
        maxLabel: '',
    };

    numberOfStops = {
        name: 'NbStop',
        inputType: 'number',
        disabled: false,
        value: 2,
        min: 0,
        max: 5,
        step: 1,
        labelText: 'Number Of Stop',
        stepMuliplier: 2,
        minLabel: '',
        maxLabel: '',
    };

    buttonProps = {
        className: 'map_button',
        onClick: e => {
            e.preventDefault();
            this.sendForm();
        },
    };
    selectedValue = [];

    constructor(props) {
        super(props);
        this.state = {items: [], loading: false, distance: 0};
    }

    componentWillMount() {
        getRestaurantsType().then((response) => {
            this.setState({items: this.mapToMultiselect(response.data)});
        });
    }

    sendForm = () => {
        this.setState({loading: true});
        const formValue = {
            startingPoint: {
                type: 'Point',
                coordinates: [-73.579442, 45.52090],
            },
            maximumLength: parseInt(document.getElementById('_distance-input-for-slider').value),
            numberOfStops: parseInt(document.getElementById('_numberOfStop-input-for-slider').value),
            type: this.selectedValue,
        };

        getStartingPoint({maximum_length: formValue.maximumLength, type: formValue.type}).then((response) => {
            Object.assign(formValue, {startingPoint: response.data.starting_point});

            getAJourney(formValue).then((result) => {
                if (result.data.features) {
                    result.data.features.forEach((feature) => {
                        if (feature.properties.distance) {
                            this.setState({distance: feature.properties.distance});
                        }
                    });
                }
                this.setState({bikePath: result.data});
                this.setState({loading: false});
            }).catch((e) => {
                toast(ErrorToast(e.message, 'An Error Occurred'), toastOption);
            });
        }).catch((e) => {
            toast(ErrorToast(e.message, 'An Error Occurred'), toastOption);
        });
    };

    render() {
        return (
            <>
                <div className="map_wrapper">
                    <Map bikePath={this.state.bikePath}/>
                    {this.loading(this.state.loading)}
                </div>
                <div className="map_input_container">
                    <h1 className="map_controle_title">Control</h1>
                    <div className="map_slider">
                        <Slider id="_distance" {...this.distanceSlider} />
                    </div>
                    <div className="map_slider">
                        <Slider id="_numberOfStop" {...this.numberOfStops} />
                    </div>
                    <div className="map_multiselect">
                        <MultiSelect
                            {...this.multiSelectProps}
                            items={this.state.items}
                            itemToString={item => (item ? item.text : '')}
                            placeholder="Cuisine type"
                            selectionFeedback={(e) => this.addToSelectedList(e)}/>
                    </div>
                    <div className="map_send_button">
                        <Button {...this.buttonProps}>
                            Random Bike Journey
                        </Button>
                    </div>
                    <div className="map_distance_container">
                        <h1 className="map_controle_title">Distance (m)</h1>
                        <div className="map_distance">
                            {Math.floor(this.state.distance)}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    loading(state) {
        const props = {
            active: state,
        };

        return (
            <div className="map_loading">
                <Loading {...props} className={'some-class'}/>
            </div>);
    };

    addToSelectedList(e) {
        const tmp = [];
        e.selectedItems.forEach((item) => {
            tmp.push(item.id);
        });
        this.selectedValue = tmp;
    }

    mapToMultiselect(data) {
        const multiselect = [];
        data.forEach((item) => {
            if (item.includes('_')) {
                const tmp = item.split('_').join(' ');
                multiselect.push({
                    id: item,
                    text: this.capitalizeFirstLetter(tmp),
                });
            } else {
                multiselect.push({
                    id: item,
                    text: this.capitalizeFirstLetter(item),
                });
            }
        });

        return multiselect;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}