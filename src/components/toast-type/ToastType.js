import React from 'react';
import {ToastNotification} from 'carbon-components-react';
import moment from 'moment';

export const WarningToast = (message, title) => {
    const notificationProps = () => ({
        kind: 'warning',
        title: title || 'Warning',
        subtitle: message || 'Warning',
        hideCloseButton: false,
    });

    return (
        <ToastNotification
            {...notificationProps()}
            caption={moment().format('MMMM Do YYYY, h:mm:ss a')}
            style={{minWidth: '30rem', marginBottom: '.5rem'}}
        />
    );
};

export const ErrorToast = (message, title) => {
    const notificationProps = () => ({
        kind: 'error',
        title: title || 'Error',
        subtitle: message,
        hideCloseButton: false,
    });

    return (
        <ToastNotification
            {...notificationProps()}
            caption={moment().format('MMMM Do YYYY, h:mm:ss a')}
            style={{minWidth: '30rem', marginBottom: '.5rem'}}
        />
    );
};

export const SuccessToast = (message, title) => {
    const notificationProps = () => ({
        kind: 'success',
        title: title || 'Success',
        subtitle: message,
        hideCloseButton: false,
    });

    console.log('SuccessToast: ', notificationProps());
    return (
        <ToastNotification
            {...notificationProps()}
            caption={moment().format('MMMM Do YYYY, h:mm:ss a')}
            style={{minWidth: '30rem', marginBottom: '.5rem'}}
        />
    );
};

export const InfoToast = (message, title) => {
    const notificationProps = () => ({
        kind: 'info',
        title: title || 'Info',
        subtitle: message,
        hideCloseButton: false,
    });

    return (
        <ToastNotification
            {...notificationProps()}
            caption={moment().format('MMMM Do YYYY, h:mm:ss a')}
            style={{minWidth: '30rem', marginBottom: '.5rem'}}
        />
    );
};

export const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: false
};