import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PropsTypes from 'prop-types';

function AlertError({ title, message }){
    const Pesan = withReactContent(Swal);
    Pesan.fire({
        title: <strong>{title}</strong>,
        html: <p>{message}</p>,
        icon: 'error',
    })
}

AlertError.propsTypes = {
    title: PropsTypes.string.isRequired,
    message: PropsTypes.string.isRequired,
}

export default AlertError;