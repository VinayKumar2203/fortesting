import React, { useState } from 'react';

const Typing = () => {
    const [state, setState] = useState(''); // Initialize state with an empty string
    const arr = ['stop', 'running'];

    const checkStatus = () => {
        const random = Math.floor(Math.random() * arr.length);
        setState(arr[random]);
    };

    let id;
    const getLocation = () => {
        // console.log(state);
        if (id) {
            console.log("locationUpdating.....")
            clearInterval(id);
        }
        id = setInterval(() => {
            console.log('Finnaly update location......')
            clearInterval(id);
        }, 1000)
    };

    return (
        <div>
            <h1>Truck Status: {state || 'Runing'}</h1>
            <button onClick={checkStatus}>Check Status</button>
            <button onClick={getLocation}>UPDATE Location</button>
        </div>
    );
};

export default Typing;
