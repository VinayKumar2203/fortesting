import React, { useState } from 'react';

const Typing = () => {
    const [state, setState] = useState('');
    let [check,setCheck]=useState('')
    const checkStatus = () => {
        setCheck(state);
    };

    let id;
    const getLocation = () => {
        if (id) {
            setState('Running');
            clearInterval(id);
        }
        id = setInterval(() => {
            setState('Stop');
            clearInterval(id);
        }, 4000)
    };

    return (
        <div>
            <h1>Truck Status: {check}</h1>
            <button onClick={checkStatus}>Check Status</button>
            <button onClick={getLocation}>UPDATE Location</button>
        </div>
    );
};

export default Typing;
