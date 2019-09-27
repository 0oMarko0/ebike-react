import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'carbon-components-react';
import {Link} from 'react-router-dom';

export default class PageHeader extends React.Component {
    render() {
        console.log(this.buildBreadcrumb());
        return (
            <div className="bx--row page-header__banner">
                <div className="bx--col-lg-16">
                    <Breadcrumb noTrailingSlash aria-label="Page navigation">
                        {this.buildBreadcrumb()}
                    </Breadcrumb>
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
            </div>
        );
    }

    buildBreadcrumb() {
        if (this.props.breadcrumb) {
            return this.props.breadcrumb.map((item) => {
                return (
                    <BreadcrumbItem>
                        <Link to={item.link}>{item.name}</Link>
                    </BreadcrumbItem>
                );
            });

        }
    }

}