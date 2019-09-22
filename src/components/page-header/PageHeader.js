import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'carbon-components-react';
import {Link} from 'react-router-dom';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div className="bx--row page-header__banner">
                <div className="bx--col-lg-16">
                    <Breadcrumb noTrailingSlash aria-label="Page navigation">
                        <BreadcrumbItem>
                            <Link to="/auth">Home</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
            </div>
        );
    }
}