import React from 'react';
import {ToastContainer} from 'react-toastify';

export default class ToastContent extends React.Component {
    render() {
        return (
            <div className="container">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                />
            </div>
        )
    }
}