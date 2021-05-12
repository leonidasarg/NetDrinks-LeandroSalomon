import React from 'react';
import { useState, useEffect } from 'react';
import Item from "./item"
import './ItemList.css'

function ItemList (props) {
    const [items, setItems] = useState (false)

    useEffect(() => {
        setTimeout (() => {
            fetch(`https://609acd920f5a13001721bebf.mockapi.io/NetDrinks/items`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setItems(data);
                });
            }, 3000);
    }, []);

    return (
        <div className="item-container">
            {items ? (
                items.map((i, index) => (
                    <Item
                        id={i.id}
                        key={index}
                        nombre={i.nombre}
                        precio={i.precio}
                        categoria={i.categoria}
                    />
                ))
            ) : (
                <p>Descargando información desde la base de datos...</p>
            )}
        </div>
    );
}

export default ItemList;