import React from 'react';
import {SkeletonText} from 'carbon-components-react';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <SkeletonText/>
            </div>
        );
    }
}