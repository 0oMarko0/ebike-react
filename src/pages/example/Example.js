import React from 'react';
import {SkeletonText} from 'carbon-components-react';

export default class ExamplePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Example</h1>
                <SkeletonText />
            </div>
        );
    }
}