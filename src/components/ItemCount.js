import React from 'react'
import { useState, useEffect } from 'react';
import './ItemCount.css';

export default function ItemCount(props) {
    const [count, setCount] = useState(0);

    useEffect (() => {
        if (count < 0) {
            setCount(0);
        } else {
            if (count > 10) {
                setCount(10);
            }
        }
        props.func(count);
    }, [count]);

    return (
        <div>
            <h4>{props.nombre}</h4>
            <h4>Precio: {props.precio}</h4>
            <input type="button" value="-" onClick={ () => setCount(count - 1)} />
            {count}
            <input type="button" value="+" onClick={ () => setCount(count + 1)} />
        </div>
    );
}