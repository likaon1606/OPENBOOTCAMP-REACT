import React from 'react';
import { useState } from 'react';
import '../styles/index.scss';

const Cubic = () => {

    const [color, setColor] = useState('#000000');
    const [stop, setStop] = useState(0);


    // ? Changing colors
   const colors = [
    "#FF5733",
    "#FFA833",
    "#DEECA4",
    "#A4C3EC",
    "#ECA4D6",
    "#EC3D58"
    ];

    const getRandom = () => Math.floor(Math.random() * 6);

    const randomColor = () => {
        const random = getRandom();
        setColor(colors[random]);
    };

    const changeColor = () => {
        return setStop(setInterval(randomColor, 200));
    };

    // ? Stop changing colors
    const stopColors = () => {
        clearInterval(stop)
    }

    return (
        <div>
            <div className='cubic' 
            style={{ background: color, width: '255px', height: '255px' }}
            onMouseOver={changeColor}
            onMouseLeave={stopColors}
            onDoubleClick={stopColors}
            >
            </div>
        </div>
    );
};

export default Cubic;