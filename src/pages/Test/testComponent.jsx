import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return <h2>The time is: {time}</h2>;
}

export default Clock;
